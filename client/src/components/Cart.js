import { useEffect, useState } from "react";
import styled from "styled-components";

const Cart = () => {
  const [cartState, setCartState] = useState(null);

  let cart;
  let total = 0;

  // Checks sessionStorage to see if there are already items in the cart, if not assigns cart variable empty object
  if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"));
  } else {
    cart = {};
  }

  // Calculate total
  Object.values(cart).forEach((item) => {
    const itemPrice = item.price.slice(1);
    const subTotal = (itemPrice * item.quantity).toFixed(2);
    total += parseFloat(subTotal);
  });

  // This is to get the page to rerender when someone increases or decreases the number of items they want - probably something should actually happen in it
  useEffect(() => {}, [cartState]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const finalCart = JSON.parse(sessionStorage.getItem("cart"));

    // For each item in the final cart, update the number of items in stock in the "products" database
    Object.values(finalCart).forEach((item) => {
      const newNumInStock = item.numInStock - item.quantity;

      fetch(`/products/${item._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          numInStock: newNumInStock,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.status === 200) {
            sessionStorage.clear();
          }
        });
    });
  };

  return (
    <StyledCart>
      <div class="titles">
        <div class="product">Product</div>
        <div class="price">Price</div>
        <div class="quantity">Quantity</div>
        <div class="subtotal">Subtotal</div>
      </div>
      <div>
        {Object.values(cart).map((item) => {
          // Get just the price, without the dollar sign
          const itemPrice = item.price.slice(1);
          return (
            <div class="cart-item">
              <div class="item-name">{item.name}</div>
              <div class="item-price">${itemPrice}</div>
              <div class="item-quantity">
                <input
                  id={item._id}
                  type="number"
                  value={item.quantity}
                  min="0"
                  max={item.numInStock}
                  // When number changed, cart updated in sessionStorage and added to cartState to prompt useEffect to rerender page
                  onChange={(e) => {
                    const value = e.target.value;
                    cart[item._id] = { ...item, quantity: value };
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    setCartState(cart);
                  }}
                />{" "}
              </div>
              <div class="item-subtotal">
                ${(itemPrice * item.quantity).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
      <div class="total">Total: ${total.toFixed(2)}</div>
      <div class="order-button">
        <input
          type="button"
          value="Place your order"
          onClick={handlePlaceOrder}
        />
      </div>
    </StyledCart>
  );
};

const StyledCart = styled.form`
  margin-top: 80px;

  .titles,
  .cart-item,
  .total,
  .order-button {
    max-width: 1500px;
    margin: 0 auto;
  }

  .titles, .cart-item {
    border-bottom: 1px solid;
    display: flex;
    height: 50px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
  }

    .item-name, .product {
      width: 800px;
    }

    .item-price, .price,
    .item-quantity, .quantity,
    .item-subtotal, .subtotal {
      width: 100px;
    }

    .item-quantity input {
      width: 40px;
    }


  .product, .price, .quantity, .subtotal {
    font-size: 1.1em;
    font-weight: 600;
  }

  .total {
    text-align: right;
    font-size: 1.3em;
    padding: 40px 40px 30px 0;
  }

  .order-button {
    text-align: right;
    padding-right: 35px;
    

    input {
      font-size: 1.4em;
      background-color: #DCDCDC;
      padding: 10px;
      border-radius: 5px;
      border: none;
    }

    input:hover {
      background-color: #0099cc;
      color: white;
    }
  }
`;

export default Cart;

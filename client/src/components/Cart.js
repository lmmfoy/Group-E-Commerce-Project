import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "./ItemsContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartState, setCartState] = useState(null);
  const navigate = useNavigate();

  const { setNumCartItems } = useContext(ItemsContext);
  let cart;
  let total = 0;

  // Checks sessionStorage to see if there are already items in the cart, if not assigns cart variable an empty object
  // Calculate the number of items in the cart, and set the numCartItems
  if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"));
    let cartItemsNum = 0;
    Object.values(cart).forEach((item) => {
      cartItemsNum += item.quantity;
    });
    setNumCartItems(cartItemsNum);
  } else {
    cart = {};
  }

  // Calculate price total
  Object.values(cart).forEach((item) => {
    const itemPrice = item.price.slice(1);
    const subTotal = (itemPrice * item.quantity).toFixed(2);
    total += parseFloat(subTotal);
  });

  // This is to get the page to rerender when someone increases or decreases the number of items they want
  useEffect(() => {}, [cartState]);

  // When a user presses the checkout button
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
          // If a success, reset everything
          if (json.status === 200) {
            sessionStorage.clear();
            setNumCartItems(0);
          }
        });
      navigate("/cart/confirmed");
    });
  };

  return (
    <StyledCart>
      <form>
        <div className="titles">
          <div className="product-title">Product</div>
          <div className="short-title">Price</div>
          <div className="short-title">Quantity</div>
          <div className="short-title">Subtotal</div>
        </div>
        <div>
          {Object.values(cart).map((item) => {
            // Get just the price, without the dollar sign
            const itemPrice = item.price.slice(1);
            // Create an array of numbers from 0 - item.numInStock
            let inStockArray = [...Array(item.numInStock + 1).keys()];
            //slice the array to remove the option of picking zero
            let slicedStockArray = inStockArray.slice(1);
            return (
              <div className="cart-item">
                <button
                  className="btn-remove"
                  onClick={(e) => {
                    //set quantity value to 0
                    let tempItem = JSON.parse(sessionStorage.getItem("cart"));
                    delete tempItem[item._id];
                    sessionStorage.setItem("cart", JSON.stringify(tempItem));
                    setCartState(tempItem);
                    e.preventDefault();
                  }}
                >
                  X
                </button>
                <Link to={`/products/${item._id}`} className="item-name">
                  {item.name}
                </Link>
                <div className="item-price">${itemPrice}</div>
                <div className="item-quantity">
                  <select
                    id={item._id}
                    value={item.quantity}
                    className="select"
                    // When number changed, cart updated in sessionStorage and added to cartState to prompt useEffect to rerender page
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      cart[item._id] = { ...item, quantity: value };
                      sessionStorage.setItem("cart", JSON.stringify(cart));
                      setCartState(cart);
                    }}
                  >
                    {/* Loop through the array of numbers to add correct quantity in dropdown */}
                    {slicedStockArray.map((item, index) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>{" "}
                </div>
                <div className="item-subtotal">
                  ${(itemPrice * item.quantity).toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">Total: ${total.toFixed(2)}</div>
        {/* Can only click order button if there is a product in the cart */}
        {total ? (
          <div className="order-button">
            <Button onClick={handlePlaceOrder}>Place your order</Button>
          </div>
        ) : (
          <div className="order-button">
          <Button onClick={(e) =>{
                e.preventDefault();
                }
              }>
                Nothing in your cart!</Button>
          </div>
        )}
      </form>
    </StyledCart>
  );
};

const StyledCart = styled.form`
  margin-top: 80px;

  .select {
    width: 40px;
  }

  .titles,
  .cart-item,
  .total,
  .order-button {
    max-width: 1200px;
    margin: 0 auto;
  }

  .titles,
  .cart-item {
    border-bottom: 2px solid #dcdcdc;
    display: flex;
    height: 50px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .titles {
    border-bottom: 4px solid #dcdcdc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .item-name,
  .product-title {
    width: 800px;
  }

  .item-price,
  .short-title,
  .item-quantity,
  .short-title,
  .item-subtotal,
  .short-title {
    width: 100px;
  }

  .item-subtotal {
    margin-left: 12px;
  }

  .item-quantity input {
    width: 40px;
  }

  .product-title,
  .price,
  .quantity,
  .subtotal {
    font-size: 1.1em;
    font-weight: 600;
  }

  .item-name {
    text-decoration: none;
    color: black;
  }

  .item-name:hover {
    color: #0099cc;
  }

  .total {
    text-align: right;
    font-size: 1.3em;
    padding: 40px 40px 30px 0;
  }

  .order-button {
    text-align: right;
    padding-right: 35px;
  }
`;

export default Cart;

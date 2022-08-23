import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [cartState, setCartState] = useState(null);
  const navigate = useNavigate();

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
  //Can make the item disappear if the quantity is set to zero by the user, or alternatively create a delete button - stretch
  useEffect(() => {}, [cartState]);
  //function that listens to the X button, which will remove an item from the cart
  const handleRemove = (e) =>{
  e.preventDefault();

  }
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
      navigate("/cart/confirmed");
      // }
    });
  };

  return (
    <StyledCart>
      <form>
        <div class="titles">
          <div class="product-title">Product</div>
          <div class="short-title">Price</div>
          <div class="short-title">Quantity</div>
          <div class="short-title">Subtotal</div>
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
              <div class="cart-item">
              <button className="btn-remove" onClick={(e) =>{
                //set quantity value to 0
                // sessionStorage.removeItem("cart", )
                let tempItem = JSON.parse(sessionStorage.getItem('cart'));
                
                console.log(tempItem);
                delete tempItem[item._id];
                sessionStorage.setItem('cart', JSON.stringify(tempItem))
                // sessionStorage.removeItem()
                setCartState(tempItem);
                e.preventDefault();
              }
                
                }> X </button>
                <a href={`/products/${item._id}`} class="item-name">
                  {item.name}
                </a>
                <div class="item-price">${itemPrice}</div>
                <div class="item-quantity">
                  <select
                    id={item._id}
                    value={item.quantity}
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
                <div class="item-subtotal">
                  ${(itemPrice * item.quantity).toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
        <div class="total">Total: ${total.toFixed(2)}</div>
        {/* Can only click order button if there is a product in the cart */}
        {total ? (
          <div class="order-button">
            <input
              type="button"
              value="Place your order"
              onClick={handlePlaceOrder}
            />
          </div>
        ) : (
          <div class="order-button">
            <input type="button" value="Nothing in your cart!" />
            
          </div>
        )}
      </form>
    </StyledCart>
  );
};

const StyledCart = styled.form`
  margin-top: 80px;

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

    input {
      padding: 12px 40px;
      margin: 15px;
      font: 16px/24px Verdana, sans-serif;
      text-decoration: none;
      background: 
        linear-gradient(90deg, 
          #04f5ed, 
          #5c27fe, 
          #c165dd, 
          #04f5ed);
      background-size: 400%;
      display: inline-block;
      color: #fff;
      border-radius: 8px;
      position: relative;
      border: none;
      cursor: pointer;
      animation: glowing 8s linear infinite;
      text-transform: uppercase;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      letter-spacing: 1px;
      &:after {
        content: " ";
        position: absolute;
        border-radius: inherit;
        left: -6px;
        right: -6px;
        bottom: -6px;
        top: -6px;
        background: inherit;
        background-size: inherit;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.5s ease;
        filter: blur(16px);
        animation: glowing 7s linear infinite;
        transform: translateZ(0);
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  
  @keyframes glowing {
    100% {
      background-position: -400%;
    }
  }
}
`;

export default Cart;

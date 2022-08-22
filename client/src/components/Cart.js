import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SelectOption from "./SelectOption";

const Cart = () => {
  const [cartState, setCartState] = useState(null);
  const [value, setValue] = useState(null); //state array for x items
  const navigate = useNavigate()

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

  //select option function that renders based on number of items
  const selectOption = (value) =>{
    let itemQuantityArray = [];
    for(let i = 0; i< value; i++){
    itemQuantityArray.push( 
      {value: i, label: i}
    )
  }
  return itemQuantityArray;
  }



  // This is to get the page to rerender when someone increases or decreases the number of items they want - probably something should actually happen in it
  //Can make the item disappear if the quantity is set to zero by the user, or alternatively create a delete button - stretch
  useEffect(() => {}, [cartState]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const finalCart = JSON.parse(sessionStorage.getItem("cart"));

    // For each item in the final cart, update the number of items in stock in the "products" database
    Object.values(finalCart).forEach((item) => {
      // if(item.quantity > item.numInstock){
      //   window.alert('You have selected an invalid quantity for the following item(s):');
      // }
      // else {
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
        {Object.values(cart).map((item, index) => {
          // Get just the price, without the dollar sign
          const itemPrice = item.price.slice(1);
          //creates an array the size of the number of items available for purchase
          const arrayLength = item.numInStock;
          let purchaseLimit = new Array(arrayLength);
          //fills the array with 0 - number of items in stock
          let count = 0;
          while(count < item.numInStock+1){
            purchaseLimit.push(count);
            count++;
          }
          //* const itemQuantity = item.numInStock; */
          return (
            <div class="cart-item">
              <a href={`/products/${item._id}`} class="item-name">
                {item.name}
              </a>
              <div class="item-price">${itemPrice}</div>
              <div class="item-quantity">
              <select
              onChange={(e) =>{
                const value = parseInt(e.target.value);
                    cart[item._id] = { ...item, quantity: value };
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    setCartState(cart);
                    count = item.quantity;
              }}
              >
              {
                purchaseLimit.map((value, index) =>{
                  
                  return (
                <option value={value}>{value}</option>
                  )
                })
              }
              </select>
                {" "}
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
          <input type="button" value="Place your order" />
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
      font-size: 1.4em;
      background-color: #dcdcdc;
      padding: 10px;
      border-radius: 5px;
      border: none;
    }

    input:hover {
      background-color: #0099cc;
      color: white;
    }

    input:active {
      transform: scale(0.9);
    }
  }
`;

export default Cart;

import { useEffect, useState, useLocation, useRef } from "react";
import styled from "styled-components";

const Cart = () => {
  // const location = useLocation();
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
  Object.values(cart).map((item) => {
    const itemPrice = item.price.slice(1);
    const subTotal = (itemPrice * item.quantity).toFixed(2);
    total += parseFloat(subTotal);
  });

  // This is to get the page to rerender when someone increases or decreases the number of items they want - probably something should actually happen in it
  useEffect(() => {}, [cartState]);

  return (
    <StyledCart>
      <div>
        {Object.values(cart).map((item) => {
          // Get just the price, without the dollar sign
          const itemPrice = item.price.slice(1);
          return (
            <div class="cart-item">
              <span>{item.name}</span>
              <span>{(itemPrice * item.quantity).toFixed(2)}</span>
              <span>
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
              </span>
            </div>
          );
        })}
      </div>
      <div>{total.toFixed(2)}</div>
    </StyledCart>
  );
};

const StyledCart = styled.form`
  .cart-item {
    padding: 20px;

    span {
      padding: 20px;
    }
  }
`;

export default Cart;

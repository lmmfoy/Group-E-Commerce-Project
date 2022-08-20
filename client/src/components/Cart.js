import { useEffect, useState, useLocation } from "react";
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
              <span>{item.quantity}</span>
            </div>
          );
        })}
      </div>
      <div>{total}</div>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  .cart-item {
    padding: 20px;

    span {
      padding: 20px;
    }
  }
`;

export default Cart;

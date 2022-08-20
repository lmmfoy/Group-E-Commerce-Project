import { useEffect, useState, useLocation } from "react";
import styled from "styled-components";

const Cart = () => {
  // const location = useLocation().state;
  const [cartState, setCartState] = useState(null);
  let cart;

  if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"));  
  } else {
    cart = {};
  }


  useEffect(() => {
    fetch(`products/${6544}`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.data;
        
        const itemID = item._id;

        if (!cart[itemID]) {
          cart[itemID] = {...item, quantity: 1};
        } else {
          cart[itemID].quantity = cart[itemID].quantity + 1;
        }
        sessionStorage.setItem("cart", JSON.stringify(cart))
      });
  });

  return (
    <StyledCart>
      <>
        {Object.values(cart).map((item) => {
          // Get just the price, without the dollar sign
          const itemPrice = item.price.slice(1);
          return (
            <div class="cart-item">
              <span>{item.name}</span>
              <span>{Math.round(itemPrice * item.quantity * 100) / 100}</span>
              <span>{item.quantity}</span>
            </div>
          );
        })}
      </>
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

import { useEffect, useState, useLocation } from "react";
import styled from "styled-components";

const Cart = () => {
  const location = useLocation().state;
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`/products/${location._id}`)
      .then((res) => res.json())
      .then((data) => {
        const { _id, name, price } = data.data;

        // Check to see if there are already items in the cartItems array
        if (cartItems.length !== 0) {
          let previouslyAddedItem = false;
          // Map through the array, and if there is an item already in it that has the id of the item being added, increase the count
          const newCartItemsArray = cartItems.map((item) => {
            if (item._id === _id) {
              previouslyAddedItem = true;
              const newCount = item.count + 1;
              const newItem = { ...item, count: newCount };
              return newItem;
            }
            return item;
          });

          // If the item has never been added before, add to cartItems
          if (previouslyAddedItem === false) {
            setCartItems((prev) => [
              ...prev,
              { _id: _id, name: name, price: price, count: 1 },
            ]);
          } else {
            // Update the cartItems array to the new array created by cartItems.map
            setCartItems(newCartItemsArray);
          }
        } else {
          // Add the first item to the cartItems array
          setCartItems([{ _id: _id, name: name, price: price, count: 1 }]);
        }
      });
  }, []);

  console.log(cartItems);


  return (
    <StyledCart>
      <>
        {cartItems.map((item) => {
          // Get just the price, without the dollar sign
          console.log(item);
          const itemPrice = item.price.slice(1);
          return (
            <div class="cart-item">
              <span>{item.name}</span>
              <span>{Math.round((itemPrice * item.count) * 100)/100}</span> 
              <span>{item.count}</span>
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

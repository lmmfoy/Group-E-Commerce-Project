import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemPage = () => {
  //state that will store the product object
  const [product, setProduct] = useState(null);
  //loading state that will change to true when the data is fetched from the backend, can add loading image while req is pending
  const [loading, setLoading] = useState(false);
  //used to navigate away from this page to the /cart page
  let navigate = useNavigate();
  //pulls the id from the URL to find the appropriate item
  let { _id } = useParams();
  //fetch that will call the .get function in the backend to retrieve the getSingleItem handler
  useEffect(() => {
    fetch(`/products/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);

        setLoading(true); //loading state is now true, product state is updated with a single item
        //navigate will be nested inside a button
        // navigate('/cart', {state: { _id: _id}})
      });
  }, []);

  const addToCartHandleClick = () => {
    // This is for when "add to cart" button clicked
    // Checks sessionStorage to see if there are already items in the cart, if not assigns cart variable empty object
    let cart;

    if (sessionStorage.getItem("cart")) {
      cart = JSON.parse(sessionStorage.getItem("cart"));
    } else {
      cart = {};
    }

    // If the cart doesn't contain item id already, add it, else update the quantity
    const itemID = product._id;
    if (!cart[itemID]) {
      cart[itemID] = { ...product, quantity: 1 };
    } else {
      cart[itemID].quantity = cart[itemID].quantity + 1;
    }
    // Save the cart in sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // Navigate to Cart page
    navigate("/cart");
  };

  return (
    <Wrapper>
      {/* Conditional rendering below */}
      {loading && (
        <>
          <h1>{product.name}</h1>
          <img alt="base64 encoded URL of product" src={product.imageSrc} />
          <div>
            <p>{product.price}</p>
            <p>
              Quantity remaining: <span>{product.numInStock}</span>
            </p>
          </div>
          <Button onClick={addToCartHandleClick}>Add to cart</Button>
        </>
      )}
    </Wrapper>
  );
};

export default ItemPage;

const Wrapper = styled.div`
  //CSS styling to be added

  //bolding the quantity of the stock. can be removed
  span {
    font-weight: bold;
  }
`;

const Button = styled.button``;

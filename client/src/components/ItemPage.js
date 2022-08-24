import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import background from "../media/img18.jpg";
import Button from "./Button";

const ItemPage = () => {
  //state that will store the product object
  const [product, setProduct] = useState(null);
  //loading state that will change to true when the data is fetched from the backend, can add loading image while req is pending
  const [loading, setLoading] = useState(false);
  //state to store company information
  const [company, setCompany] = useState({});

  const [stock, setStock] = useState(0);

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
      });
  }, []);

  // Once the product has loaded, then fetch the company information
  useEffect(() => {
    if (product) {
      fetch(`/products/company/${product.companyId}`)
        .then((res) => res.json())
        .then((data) => {
          setCompany(data.data);
        });
    }
  }, [product]);

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
    } else if(cart[itemID].quantity < cart[itemID].numInStock) {
      
      cart[itemID].quantity = cart[itemID].quantity + 1;
    }
    else {
      window.alert(`You have reached the maximum quantity for "${cart[itemID].name}". You will be redirected to view your cart items.`);
    }
    // Save the cart in sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));
  
    // Navigate to Cart page
    navigate("/cart");
  };
  

  return (
    <Box  style={{ backgroundImage: `url(${background})` }}>
      <Wrapper>
        {/* Conditional rendering below */}
      {loading && (
        <Conteiner>
          <div class="product-image">
            <img alt="base64 encoded URL of product" src={product.imageSrc} />
          </div>
          <div className="company-style">
            <a href={company.url} class="company-name">
              {company.name}
              {/* Add company country flag */}
              { company.countryCode &&
              <ReactCountryFlag
                class="flag"
                countryCode={`${company.countryCode}`}
              />
              }
            </a>
            <h1>{product.name}</h1>
            <div>
              <p>{product.price}</p>
              <p>
                Quantity remaining: <span>{product.numInStock}</span>
              </p>
            </div>
            {/* Check if there is stock, if not don't allow user to click button */}
            {product.numInStock > 0 ? (
              <Button onClick={addToCartHandleClick}>Add to cart</Button>
            ) : (
              <Button>Out of stock</Button>
            )}
          </div>
        </Conteiner>
      )}
    </Wrapper>
    </Box>
  );
};

export default ItemPage;

const Box = styled.div`
  height: 93vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Conteiner = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    font-family: sans-serif;
    text-align: center;
    line-height: 1;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    max-width: auto;
    max-height: auto;
    padding: 50px 60px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 10;
  gap: 50px;

  img {
    width: 250px;
  }

  .company-style{
    margin-top: 20px;
  }

  .company-name { 
    font-size: 30px;
    text-decoration: none;
  }

  .flag {
    padding-left: 5px;
    font-size: 200px;
    margin-top: -5px;
    
  }

  span {
    font-weight: bold;
  }
`;



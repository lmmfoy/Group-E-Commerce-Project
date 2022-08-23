import styled from "styled-components";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import img30 from "../media/img30.jpg";
import Loading from "./Loading";

const ProductPage = (props) => {
  //State that will store the entire array of products received from the back end .find().toArray()
  const [allProducts, setAllProducts] = useState(null);
  //loading state for fetch
  const [loading, setLoading] = useState(false);
  //fetch to get the entire database collection under - 'products' -
  useEffect(() => {
    fetch(`/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.data); //this line sets the state allProducts to the array of data, containing 348 items from the database, each product nested in an object.
        setLoading(true);
        props.setLoading(true);
      });
  }, []);
  return (
    <>
      <ImageStyle>
        <img src={img30} width="1000px" alt="watch" />
        <CategoryFeedBox>
          {loading ? (
            allProducts.map((product) => {
              return (
                //if you call props._id, props.name or any other existing key props.key in ItemCard, appropriate information will be received.
                <ItemProfile>
                  <ItemCard product={product} loading={props.loading} />
                </ItemProfile>
              );
            })
          ) : (
            // If still loading, show loading animation
            <Loading />
          )}
        </CategoryFeedBox>
      </ImageStyle>
    </>
  );
};

const ImageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }
`;
const CategoryFeedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
`;

const ItemProfile = styled.div`
  display: flex;
  background: white;
  box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
  gap: 20px;
  border-radius: 20px;
  margin: 30px;
  border: none;
  font-size: 20px;
  image-resolution: unset;

  :hover {
    box-shadow: 0 0 15px 1px #2b4865;
    opacity: 70%;
  }
`;

export default ProductPage;

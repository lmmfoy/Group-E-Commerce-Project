import styled from "styled-components";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const ProductPage = (props) =>{
  //State that will store the entire array of products received from the back end .find().toArray()
  const [allProducts, setAllProducts] = useState(null);
  //loading state for fetch
  const [loading, setLoading] = useState(false);
  //fetch to get the entire database collection under - 'products' -
  useEffect(() =>{
    fetch(`/products`)
    .then(res => res.json())
    .then((data) =>{
      setAllProducts(data.data); //this line sets the state allProducts to the array of data, containing 348 items from the database, each product nested in an object.
      setLoading(true);
      props.setLoading(true)
    })
  }, [])
  console.log(props.loading)
  return (
    <Wrapper>
    {loading && props.loading && allProducts.map((product) => {
        return (
        //if you call props._id, props.name or any other existing key props.key in ItemCard, appropriate information will be received.
        <ItemCard product={product} loading={props.loading}/>       
        )
    })

    }

    </Wrapper>
  )
}

export default ProductPage;

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
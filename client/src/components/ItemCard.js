import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";

const ItemCard = (props) => {
  const product = props.product
  console.log(props)
  return (
    <Wrapper>
    {/* Conditional rendering below */}
    {(props.loading) &&
      <>
      <NavigationLink to={`/products/${product._id}`}>
      <img alt="base64 encoded URL of product" src={product.imageSrc}/>
      <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
      </NavigationLink>
      
      </>}

    </Wrapper>
  )
}
//difficulty pushing

export default ItemCard;

const NavigationLink = styled(NavLink)`
text-decoration: none;
color:black;
display:flex;
flex-direction: column;
align-items: center;
`

const Wrapper = styled.div`
//CSS styling to be added
width:200px;
border:1px lightgray solid;
padding: 5px;

//bolding the quantity of the stock. can be removed 
span {
  font-weight: bold;
}
`

const Button = styled.button`
`
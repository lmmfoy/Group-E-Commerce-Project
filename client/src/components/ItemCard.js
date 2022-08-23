import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";

const ItemCard = (props) => {
  const product = props.product
  const navigate = useNavigate()

  return (
    <Wrapper outOfStock={product.numInStock} >
    {/* Conditional rendering below */}
    {(props.loading) &&
      <>
      <NavigationLink to={`/products/${product._id}`}>
      <StyledImg alt="base64 encoded URL of product" src={product.imageSrc}/>
      <StyledInfo>
        <p className="name">{product.name}</p>
        <p>{product.price}</p>
      </StyledInfo>
      </NavigationLink>
      
      </>}

    </Wrapper>
  )
}
//difficulty pushing

export default ItemCard;

const StyledInfo = styled.div`
display:flex;
flex-direction: column;
align-items: center;

.name{
  min-height: 80px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
`

const StyledImg = styled.img`
max-height:200px;
margin: 30px 0 0 0;
`

const NavigationLink = styled(NavLink)`
text-decoration: none;
color:black;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border:none;
background-color: white;

`

const Wrapper = styled.div`
//CSS styling to be added
width:200px;
padding: 10px;

opacity: ${(props) => (props.outOfStock === 0 ? "20%" : "1")}

`

const Button = styled.button`
`
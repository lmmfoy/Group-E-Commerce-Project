import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";

const ItemCard = (props) => {
  const product = props.product
  return (
    <Wrapper>
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
  justify-content: center;
  align-items: center;

}
`

const StyledImg = styled.img`
max-height:100px;
margin: 10px 0 0 0;
`

const NavigationLink = styled(NavLink)`
text-decoration: none;
color:black;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Wrapper = styled.div`
//CSS styling to be added
width:200px;
border:1px lightblue dashed;
padding: 10px;

//bolding the quantity of the stock. can be removed 
span {
  font-weight: bold;
}
`

const Button = styled.button`
`
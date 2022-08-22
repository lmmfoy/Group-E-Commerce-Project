import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo/logo.png";

const ConfirmationPage = () => {
    //this function makes the button navigate back to the products page
    const navigate = useNavigate()
const returnToProducts = () => {
    navigate("/products")
};

return (
        <>
        <Wrapper>
        <p>thank you for shopping with us!</p>
        <StyledLogo src={logo}/>
        <p>your order is confirmed</p>
        <Button onClick={returnToProducts}>continue shopping?</Button>
        </Wrapper>
        </>
);
};

const StyledLogo = styled.img`
height:100px;
`

const Button = styled.button`
background:none;
`
const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
height:80vh;

`

export default ConfirmationPage;

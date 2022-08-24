import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo/logo.png";
import Button from "./Button";

const ConfirmationPage = () => {
    //this function makes the button navigate back to the products page
    const navigate = useNavigate()
const returnToProducts = () => {
    navigate("/products")
};

return (
        <>
        <Wrapper>
        <p className="gratitude">Thank you for shopping with us!</p>
        <StyledLogo src={logo}/>
        <p>Your order is confirmed</p>
        <Button onClick={returnToProducts}>continue shopping?</Button>
        </Wrapper>
        </>
);
};

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height:80vh;
    .gratitude{
        font-size: 30px;
    }
    p{
        font-size: 25px;
    }
    `;

const StyledLogo = styled.img`
height:100px;
`;



export default ConfirmationPage;

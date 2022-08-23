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

const Button = styled.button`
    padding: 12px 40px;
    margin: 15px;
    font: 16px/24px Verdana, sans-serif;
    text-decoration: none;
    background: 
        linear-gradient(90deg, 
            #04f5ed, 
            #5c27fe, 
            #c165dd, 
            #04f5ed);
    background-size: 400%;
    display: inline-block;
    color: #fff;
    border-radius: 8px;
    position: relative;
    border: none;
    cursor: pointer;
    animation: glowing 8s linear infinite;
    text-transform: uppercase;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
    &:after {
        content: " ";
        position: absolute;
        border-radius: inherit;
        left: -6px;
        right: -6px;
        bottom: -6px;
        top: -6px;
        background: inherit;
        background-size: inherit;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.5s ease;
        filter: blur(16px);
        animation: glowing 7s linear infinite;
        transform: translateZ(0);
    }
    &:hover {
        &:after {
            opacity: 1;
        }   
    }
}

    @keyframes glowing {
        100% {
        background-position: -400%;
        }

`;


export default ConfirmationPage;

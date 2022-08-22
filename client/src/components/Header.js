import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import logo from "../logo/logo.png";
const Header = () => {

    return (
        <Wrapper>
            <div className="sticky">
            <Nav>
                    <StyledImageLink to="/">w<StyledLogo src={logo}/> tching</StyledImageLink> 
                    <StyledNavLink to="/products"> Products</StyledNavLink>
                    <StyledNavLink to="/cart">Cart</StyledNavLink>

            </Nav>
            </div>
        </Wrapper>
    )
};

const StyledImageLink = styled(NavLink)`
display:flex;
text-decoration: none;
color:black;
align-items:center;
font-size: 30px;
border:3px white solid;
gap:2px;
top:3px;
position:relative;
&:hover {
    opacity: .5;
    border-radius: 8px;
    border:3px lavender solid;
}

`

const StyledLogo = styled.img`
height:50px;
width:56px;

`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
/* align-items: center; */
height:60px;

.sticky{
    position:sticky;
    top:0px;
}

`

const Nav = styled.div`

padding:0px 80px 16px 0;
display:flex;
justify-content: space-around;
/* border-bottom: 1px black solid; */
gap:70px;

`
const StyledNavLink = styled(NavLink)`
color:black;
text-decoration: none;
padding: 16px 16px 8px;

top:3px;
border: 3px white solid;
position:relative;
left: -30px;



&:hover {
    background-color: lightgray;
    opacity: .5;
    border-radius: 8px;
    color:black;
    border:3px lavender solid;
}
&.active {
    background-color: gray;
    opacity: .5;
    border-radius: 8px;
    color:white;
}
`

export default Header




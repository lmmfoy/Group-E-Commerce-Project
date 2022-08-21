import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiHome } from "react-icons/fi";

const Header = () => {

    return (
        <Wrapper>
            <div className="sticky">
            <Nav>
                    <StyledNavLink to="/">Home</StyledNavLink> 
                    <StyledNavLink to="/products"> Products</StyledNavLink>
                    <StyledNavLink to="/cart">Cart</StyledNavLink>

            </Nav>
            </div>
        </Wrapper>
    )
};

const Logo = styled.img`

`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
/* justify-content:end; */
height:50px;
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
padding: 8px 16px 8px;
border: 3px white solid;

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




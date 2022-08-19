import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiHome } from "react-icons/fi";

const Header = () => {

    return (
        <Wrapper>
            <Nav>
                    <StyledNavLink to="/"><FiHome/></StyledNavLink> 
                    <StyledNavLink to="/products"> Products</StyledNavLink>
                    <StyledNavLink to="/cart"><FiShoppingCart/></StyledNavLink>

            </Nav>
        </Wrapper>
    )
};

const Logo = styled.img`

`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:end;


`

const Nav = styled.div`

padding:80px 80px 16px 0;
display:flex;
justify-content: space-around;
border-bottom: 1px black solid;
gap:70px;

`
const StyledNavLink = styled(NavLink)`
color:black;
text-decoration: none;
padding: 8px 16px 4px;
border: 1px white solid;

&:hover {
    background-color: lightgray;
    opacity: .5;
    border-radius: 8px;
    color:black;
    border:1px blue solid;
}
&.active {
    background-color: gray;
    opacity: .5;
    border-radius: 8px;
    color:white;
}
`

export default Header




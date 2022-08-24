import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../logo/logo.png";
import { ItemsContext } from "./ItemsContext";

const Header = () => {
  const { numCartItems } = useContext(ItemsContext);
  return (
    <StyledContainer>
      <Wrapper>
        <div className="sticky">
          <Nav>
            <LogoDiv>
              <StyledImageLink to="/">
                w<StyledLogo src={logo} /> tching
              </StyledImageLink>
            </LogoDiv>
            <SmallerRoutes>
              <StyledNavLink to="/products"> Products</StyledNavLink>
              <StyledNavLink to="/cart">
                Cart ({numCartItems && numCartItems})
              </StyledNavLink>
            </SmallerRoutes>
          </Nav>
        </div>
      </Wrapper>
    </StyledContainer>
  );
};

const LogoDiv = styled.div`
  position: relative;
  left: 24px;
  border-radius: 8px;
`;

const SmallerRoutes = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledContainer = styled.div`
  position: relative;
  top: 8px;
`;

const StyledImageLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  font-size: 30px;
  border: 3px var(--primary-color) solid;
  gap: 2px;
  top: 3px;
  position: relative;
  &:hover {
    opacity: 0.5;
    border-radius: 8px;
    border: 3px lavender solid;
  }
  &.active {
    border-radius: 8px;
    border: none;
  }
`;

const StyledLogo = styled.img`
  height: 50px;
  width: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;

  .sticky {
    position: sticky;
    top: 0px;
  }
`;

const Nav = styled.div`
  padding: 0px 80px 16px 0;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  position: relative;
  left: 16px;
`;
const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  top: 3px;
  border: 3px var(--primary-color) solid;
  position: relative;
  left: -30px;

  &:hover {
    background-color: lightgray;
    opacity: 0.5;
    border-radius: 8px;
    color: black;
    border: 3px lavender solid;
  }
  &.active {
    background-color: gray;
    opacity: 0.5;
    border-radius: 8px;
    color: white;
    border: none;
  }
`;

export default Header;


import styled from "styled-components";
import logo from "../logo/logo.png";

const Footer = () => (
    <FooterStyle>
        <Box>
            <StyledLogo src={logo}/>
        </Box>
    </FooterStyle>
);

const FooterStyle = styled.div`
    margin-top: 1rem;
    padding: .5rem;
    background-color: #2C394B;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: .8;
`
const Box =styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;    
`
const StyledLogo = styled.img`
height:60px;
`;

export default Footer;
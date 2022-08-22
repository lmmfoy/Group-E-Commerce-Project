import styled from "styled-components";

import img15 from "../media/img15.jpg";

const Footer = () => (
    <Wrapper>
        <img src={img15}width = "1000px"/>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    height: 120px;
    width: 100%;
img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
`;
// const Logo = styled.img`
//   height: 100%;
// `;



export default Footer;
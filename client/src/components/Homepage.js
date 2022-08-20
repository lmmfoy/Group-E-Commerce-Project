import React from "react";
import styled from "styled-components";
import VideoPage from "./VideoPage";
import Category from "./Category";
import img21 from "../media/img21.jpg";
import img22 from "../media/img22.jpg";
import img23 from "../media/img23.jpg";




const Homepage =() =>{

    return (
        <Container>
            <VideoPage/>
                <TextBox>
                <h1>Our watches are selected with great attention to detail.</h1>
                <p>Explore the collection of prestigious, high-precision timepieces.</p>
                    <p>We offer a wide assortment of Classic and Professional watch models to suit any wrist.</p>
                    <p>Discover the broad selection of watches to find a perfect combination of style and functionality.</p>
                    </TextBox>
                    <TextBoxTwo>
                    <h1>Category</h1>
                    </TextBoxTwo>
                    
                <ImageBox>
                    <Category/>
                </ImageBox>
            <>
            <HomepageBox>
            <img src={img21}width = "1000px"/>
            </HomepageBox>
            <FactsStyle>
                <ItemCategory>
                    <Visual>
                        <img src={img23}width = "600px"/>
                            <div className="text">
                                <div className="nameItems"><p>Interesting Facts</p></div>
                            </div>
                    </Visual>
                </ItemCategory>
                <ItemCategory>
                    <Visual>
                        <img src={img22}width = "600px"/>
                            <div className="text">
                                <div className="nameItems"><p>About Us</p></div>
                                    </div>
                    </Visual>
                </ItemCategory>
            </FactsStyle>
            </>
        </Container>
        );
};

const Container = styled.div`
background-color: #FEFBF6;

`

const FactsStyle = styled.div`
display: flex;
justify-content: space-around;
margin-top: -200px;
`
const HomepageBox = styled.div`
width: 100%;
height: 100vh;
img{
    margin-top:250px;
    width: 100%;
    height: 40%;
    object-fit:cover;
}
`
const ImageBox = styled.div`
margin-top: 30px;
background-size:cover;

`
const TextBox = styled.div`
margin-top:-200px;
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 35px;
}
p{
    font-size: 20px;
}
`
const TextBoxTwo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
margin-top:20px;
`

const ItemCategory = styled.div`
    width: 25%;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 24px;
    transform: translate(0px, 0px);
    margin: 20px;
    
    img{
    background: #fafafa;
border-radius: 4px;
box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1CD6CE;
    opacity: 70%;
}
`

const Visual = styled.div`

.text{
    color: #fff;
    transition: .2s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.nameItems{
    font-weight: 500;
    letter-spacing: .1em;
    line-height: 1.5;
    p{
        font-size:50px;
    }
    }
`
export default Homepage;
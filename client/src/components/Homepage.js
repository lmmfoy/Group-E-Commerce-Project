import React from "react";
import styled from "styled-components";
import VideoPage from "./VideoPage";
import Category from "./Category";
import img21 from "../media/img21.jpg";
import img22 from "../media/img22.jpg";
import img23 from "../media/img23.jpg";

const Homepage = () => {
  return (
    <Container>
      <VideoPage />
      <TextBox>
        <h3>You're bad with time.</h3>
        <p> You missed your bus this morning.</p>
        <p>
          You were late to that important meeting, worked right through your
          lunch date, and left your daughter waiting 3 hours for pickup after
          band practice.
        </p>
        <p>How do we know?</p>
        <p>Nevermind that.</p>
        <div class="here-for-you">
          <p>We know you need help </p>
          <h3>AND WE'RE HERE FOR YOU</h3>
        </div>
        <p>Explore our timepieces and accessories and fix your damn life.</p>
      </TextBox>
      <TextBoxTwo>
        <h2>Our products:</h2>
      </TextBoxTwo>

      <ImageBox>
        <Category />
      </ImageBox>
      <>
        <HomepageBox>
          <img src={img21} width="1000px" alt="watch" />
        </HomepageBox>
        <FactsStyle>
          <ItemCategory>
            <Visual>
              <img src={img23} width="600px" alt="watch" />
              <div className="text">
                <div className="nameItems">
                  <p>Interesting Facts</p>
                </div>
              </div>
            </Visual>
          </ItemCategory>
          <ItemCategory>
            <Visual>
              <img src={img22} width="600px" alt="watch" />
              <div className="text">
                <div className="nameItems">
                  <p>About Us</p>
                </div>
              </div>
            </Visual>
          </ItemCategory>
        </FactsStyle>
      </>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const FactsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -200px;
`;
const HomepageBox = styled.div`
  width: 100%;
  height: 100vh;
  img {
    margin-top: 250px;
    width: 100%;
    height: 40%;
    object-fit: cover;
  }
`;
const ImageBox = styled.div`
  margin-top: 30px;
  background-size: cover;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  text-align: center;
  margin: -28vh auto 0 auto;

  h3 {
    font-size: 1.5em;
  }

  p {
    font-size: 20px;
    margin: 13px;
  }

  .here-for-you {
    width: 100vw;
    padding: 15px 30px;
    border-radius: 5px;

    h3 {
      margin: 0;
    }
  }
`;
const TextBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: -20px;
`;

const ItemCategory = styled.div`
  width: 25%;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 24px;
  transform: translate(0px, 0px);
  margin: 20px;

  img {
    background: #fafafa;
    border-radius: 4px;
    box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
  }
  img:hover {
    box-shadow: 0 0 45px 2px #1cd6ce;
    opacity: 70%;
  }
`;

const Visual = styled.div`
  .text {
    color: #fff;
    transition: 0.2s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .nameItems {
    font-weight: 500;
    letter-spacing: 0.1em;
    line-height: 1.5;
    p {
      font-size: 50px;
    }
  }
`;
export default Homepage;

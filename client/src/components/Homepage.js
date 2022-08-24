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
        <p className="missed"> You missed your bus this morning.</p>
        <p>
          You were late to that important meeting, worked right through your
          lunch date, and left your daughter waiting 3 hours for pickup after
          band practice.
        </p>
        <p className="how">How do we know?</p>
        <p>Nevermind that.</p>
        <div className="here-for-you">
          <p>You need help </p>
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
      </>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
`;
const HomepageBox = styled.div`
  width: 100%;
  height: 100vh;
  img {
    margin-top: 100px;
    width: 100%;
    height: 50%;
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
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    margin: 13px;
  }

  .missed {
    margin: 20px 0 6px 0;
  }

  .how {
    margin: 20px 0 6px 0;
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

export default Homepage;

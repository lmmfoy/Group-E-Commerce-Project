import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
  padding: 12px 40px;
  margin: 15px;
  font: 16px/24px Verdana, sans-serif;
  text-decoration: none;
  background: linear-gradient(90deg, #04f5ed, #5c27fe, #c165dd, #04f5ed);
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

  @keyframes glowing {
    100% {
      background-position: -400%;
    }
  }
`;
export default Button;

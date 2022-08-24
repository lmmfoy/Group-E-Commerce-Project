import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ItemCard = (props) => {
  const product = props.product;

  return (
    <Wrapper outOfStock={product.numInStock}>
      {/* Conditional rendering below */}
      {props.loading && (
        <>
          <NavigationLink to={`/products/${product._id}`}>
            <StyledImg
              alt="base64 encoded URL of product"
              src={product.imageSrc}
            />
            <StyledInfo>
              <p className="name">{product.name}</p>
              <p>{product.price}</p>
            </StyledInfo>
          </NavigationLink>
        </>
      )}
    </Wrapper>
  );
};

export default ItemCard;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    min-height: 80px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  max-height: 200px;
  margin: 30px 0 0 0;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: white;
`;

const Wrapper = styled.div`
  //CSS styling to be added
  width: 200px;
  padding: 10px;
  //conditionally renders out of stock items' opacity
  opacity: ${(props) => (props.outOfStock === 0 ? "20%" : "1")};
`;

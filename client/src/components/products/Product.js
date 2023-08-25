import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  position: relative;
  border-radius: 0.5rem;
  background-color: #e0ae4c;
  max-width: 23rem;
  box-shadow: black 0px 20px 30px -10px;
  img {
    grid-area: image;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  h1 {
    color: #1a2c36;
    grid-area: title;
    font-size: 1.4rem;
    margin-top: 1rem;
  }
  h1,
  p {
    font-family: Roboto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p {
    margin-top: 0rem;
    grid-area: description;
    font-size: 1.1rem;
    min-height: 40px;
  }
  p.price {
    color: #534c5e;
    grid-area: price;
    text-decoration: underline;
    text-underline-offset: 2px;
    margin-bottom: 0rem;
    font-weight: bolder;
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 58rem) {
    .card {
      display: grid;
      grid-template-rows: 4.5fr 1fr 0.5fr 0.5fr 0.5fr;
      grid-template-areas:
        "image"
        "title"
        "price"
        "description"
        "button";
    }
  }
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  box-shadow: black 0px 4px 10px -6px;
  padding: 1rem;
  border-bottom-right-radius: 25px;
  font-weight: 800;
  font-size: 1.1rem;
  background-color: #f38519;
  color: #29343f;
  top: 0;
  left: 0;
`;
const StyledButtonContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;
const StyledButton = styled.button`
  box-shadow: black 0px 7px 11px -6px;
  background-color: #98544d;
  border-radius: 0.3rem;
  border-style: none;
  padding: 1rem;
  color: white;
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledProduct>
      <div className="card">
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <StyledDiscountBadge
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <h1>{name}</h1>
        <p className="price">Price {price}</p>
        <p data-testid="product-description">{description}</p>
        <StyledButtonContainer>
          <StyledButton>Add to Cart</StyledButton>
        </StyledButtonContainer>
      </div>
    </StyledProduct>
  );
};

export default Product;

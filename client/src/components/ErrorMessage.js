import styled from "styled-components";
const StyledErrorMessageContainer = styled.div`
padding-top 10rem;
padding-bottom 15rem;
background-color: #29343F;
`;
const StyledErrorMessage = styled.div`
  margin-top: 6rem;
  text-align: center;
  padding: 1rem;
  color: #ffffff;
  background-color: #a60e0e;
`;

const ErrorMessage = ({ message }) => {
  return (
    <StyledErrorMessageContainer>
      <StyledErrorMessage>Error: {message}</StyledErrorMessage>
    </StyledErrorMessageContainer>
  );
};

export default ErrorMessage;

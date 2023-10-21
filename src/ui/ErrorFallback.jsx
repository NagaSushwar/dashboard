import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/Globalstyles";
import Button from "./Button";
import PropTypes from 'prop-types';


const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

function ErrorFallback({error,resetErrorBoundary}){

  return (
    <>
    <GlobalStyles/>
    <StyledErrorFallback>
      <Box>
        <Heading as ="h1">Something went wrong</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </Box>
    </StyledErrorFallback>
    </>
  )

}
ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired, // Assuming error is an object
  resetErrorBoundary: PropTypes.func.isRequired,
};
export default ErrorFallback;
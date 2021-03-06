import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoaderContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const LoaderSpinner = ({ resultsLoading }) => {
  console.log(resultsLoading);
  if (resultsLoading) {
    return (
      <LoaderContainer data-testid="Loader">
        <Loader
          type="RevolvingDot"
          color="red"
          height={100}
          width={100}
        />
      </LoaderContainer>
    );
  };
  return (null);
}

export default LoaderSpinner;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorStyles = styled.h2`
margin: 20px 20px;
color: #D6D4D0;
`

const ErrorMessage = ({ errorParams }) => {
  return (
    <ErrorStyles>
      {`${errorParams.errorStatus} Error: ${errorParams.errorText}`}
    </ErrorStyles>
  )
};

ErrorMessage.propTypes = {
  errorParams: PropTypes.object
};

export default ErrorMessage;
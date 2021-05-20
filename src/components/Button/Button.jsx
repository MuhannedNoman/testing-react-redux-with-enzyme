import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, event }) => {
  const handleClick = () => {
    if (event) event();
  };

  return (
    <button onClick={handleClick} data-test="btn-component">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  event: PropTypes.func,
};

export default Button;

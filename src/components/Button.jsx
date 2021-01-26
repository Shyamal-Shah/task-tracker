import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, color, onClick }) => {
  return (
    <button
      className='btn btn-dark'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

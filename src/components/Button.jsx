import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, color, onAdd }) => {
  return (
    <button 
    className='btn btn-dark' style={{ backgroundColor: color }}
    onClick= {onAdd}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Button;

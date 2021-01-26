import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const handleAdd = () => {
    console.log('Click');
  };

  return (
    <header className='d-flex justify-content-between align-items-center'>
      <h1>{title}</h1>
      <Button title='Add' color='blue' onAdd={handleAdd}/>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

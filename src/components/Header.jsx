import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShowAddTaskToggle, showAddTask }) => {
  return (
    <header className='d-flex justify-content-between align-items-center border-bottom p-2 mb-3'>
      <h1>{title}</h1>
      <Button
        title={showAddTask ? 'Close' : 'Add'}
        color={showAddTask ? 'red' : 'green'}
        onClick={onShowAddTaskToggle}
      />
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

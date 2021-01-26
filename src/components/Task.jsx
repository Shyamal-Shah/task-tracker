import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className='m-2 p-2 bg-light rounded-3'
      style={{
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
        borderLeftColor: task.reminder ? 'green' : 'gray',
      }}
      onDoubleClick={() => onToggle(task.id) }
    >
      <h3 className='d-flex justify-content-between'>
        {task.text}
        <button className='btn btn-close' onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onClick: PropTypes.func,
};

export default Task;

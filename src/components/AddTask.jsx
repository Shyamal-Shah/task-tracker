import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form
      className='border p-3 rounded'
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) {
          alert('Please add a task');
          return;
        }
        onAddTask({
          text: text,
          day: day,
          reminder: reminder,
        });
        setText('');
        setDay('');
        setReminder(false);
      }}
    >
      <div className='form-group'>
        <label className='form-control-plaintext form-text'>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          className='form-control'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <div className='form-group'>
        <label className='form-control-plaintext form-text'>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          className='form-control'
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        ></input>
      </div>
      <div className='form-group form-check my-3'>
        <label className='form-check-label '>Set Reminder</label>
        <input
          className='form-check-input form'
          type='checkbox'
          checked={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        ></input>
      </div>

      <input
        type='submit'
        value='Save task'
        className='btn btn-block btn-dark w-100'
      />
    </form>
  );
};

AddTask.propTypes = {
  isVisible: PropTypes.bool,
  onAddTask: PropTypes.func,
};

export default AddTask;

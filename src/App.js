import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleRemainder = (taskId) =>{
    const newTasks = [... tasks];
    newTasks[taskId - 1].reminder = !newTasks[taskId - 1].reminder;
    setTasks(newTasks);
  }

  return (
    <div className='border rounded m-3 p-3'>
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleRemainder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;

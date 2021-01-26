import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

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

  const [showAddTask, setShowAddTask] = useState(false);

  const handleShowTasktoggle = () => {
    setShowAddTask(!showAddTask);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleReminder = (taskId) => {
    const newTasks = tasks.map((task) =>
      taskId === task.id ? { ...task, reminder: !task.reminder } : task
    );
    console.log(taskId);
    setTasks(newTasks);
  };

  const handleAddTask = (task) => {
    const newTasks = [...tasks];
    newTasks.push({
      id: Math.floor(Math.random() * 10000) + 1,
      text: task.text,
      day: task.day,
      reminder: task.reminder,
    });
    setTasks(newTasks);
  };

  return (
    <div className='border rounded m-3 p-3'>
      <Header
        onShowAddTaskToggle={handleShowTasktoggle}
        showAddTask={showAddTask}
      />

      {showAddTask && <AddTask onAddTask={handleAddTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;

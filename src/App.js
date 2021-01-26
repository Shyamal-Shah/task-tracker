import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fectTasks();

      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fectTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  const fectTask = async (taskId) => {
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`);
    const data = await res.json();

    return data;
  };
  const handleShowTasktoggle = () => {
    setShowAddTask(!showAddTask);
  };

  const handleDeleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE',
    });

    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleReminder = async (taskId) => {
    const taskTotoggle = await fectTask(taskId);
    const updatedTask = { ...taskTotoggle, reminder: !taskTotoggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        taskId === task.id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const handleAddTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
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

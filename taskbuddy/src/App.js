import { useEffect, useState } from 'react';
import './Style.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks,task])
  }

  const upadteTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <div className='App'>
      <header className = "header">
        <div className = "header-container">
          <h1 className="title">
            Task <span class = "highlight"> Buddy</span>
          </h1>
          <p className= "tagline">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList
      tasks={tasks}
      updateTask={upadteTask}
      deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      
      {tasks.length > 0 && (
      <button className='clear-btn' onClick={clearTasks}>
        Clear All Tasks
      </button>
      )}
    </div>
  );
}

export default App;

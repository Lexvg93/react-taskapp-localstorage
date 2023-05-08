import {useState} from 'react'
import "./App.css";

function App() {

  const [newTaskName, setNewTaskName]= useState()
  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem('tasks', newTaskName)
    setNewTaskName('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={() => alert(newTaskName)}>Save Task</button>
      </form>
    </div>
  );
}

export default App;

https://www.youtube.com/watch?v=sjrK6RA65eQ tiempo 16:50
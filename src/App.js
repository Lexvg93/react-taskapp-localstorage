import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";
function App() {
  const [tasksItems, setTasksItems] = useState([
    
  ]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) =>{
    setTasksItems(
      tasksItems.map((t) => ())
    )
  }
  
  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if(data){
      setTasksItems(JSON.parse(data))
    }
  },[ ])


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems)); // es para guardar un arreglo en localstorage
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks ={tasksItems}/>
    </div>
  );
}

export default App;
https://www.youtube.com/watch?v=sjrK6RA65eQ tiempo 59:15
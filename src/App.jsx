import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'


function App() {
  const[task, setTask] = useState([])

  function newInput(data){
    setTask(prev => {
      return[...prev, {id: crypto.randomUUID(),
                 task: data,
                completed:false}]
    })
    }

    function deleteTask(id){
      setTask(prev => prev.filter(task => task.id !== id))
    }

    function completed(id){
      setTask((prev) =>
              prev.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task))
    }

 

  return (
    <div className='mainContainer'>
      <Form updateTask={newInput}/>
      <Tasks deleteTask={deleteTask} tasks={task} completeTask={completed}/>
    </div>
  )
}

export default App

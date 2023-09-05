import React from "react";
import './Form.css'

export default function Form(props){

    const[input, setInput] = React.useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(input === ""){
            alert("Dont forget to write in to add a Task in your list!")
            return
        }
            props.updateTask(input)
            setInput("")
    }

return(
    <div className="form">
        <label htmlFor="newTask">Task List</label>

        <form onSubmit={handleSubmit}>
            <input 
                className="inputTask"
                id="newTask"
                name="newTask"  
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                
            />
            <button className="submitbtn" type="submit">Add Task</button>
        </form>
    </div>
    
)
}
import React from "react";
import './Tasks.css';

export default function Tasks(props){
    function handleClick(id, e){
        if(e.target.name === "delete"){
            props.deleteTask(id)
            return
        }
        props.completeTask(id)
    }

    return(
        
        <div className={props.tasks.length > 0 ? "container" : ""}>
            <div className="tasks">
                {props.tasks.map(task => (
                    <div className="task" key={task.id}>
                        {task.task}
                        <button 
                            style={{backgroundColor: task.completed ? 'rgb(0, 160, 19)' : '#8388a4',
                                    color: task.completed ? 'white' : "#363b59"}}
                            name="completed"
                            className="completebtn" 
                            onClick={() => handleClick(task.id, event)}>
                            {task.completed ? "Completed" : "Completed?"}
                        </button>
                        <button 
                            name="delete"
                            className="deletebtn" 
                            onClick={() => handleClick(task.id, event)}>

                            Delete
                        </button>
                    </div>
                    ))}
            </div>
        </div>
    )
}
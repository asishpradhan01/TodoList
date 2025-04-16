import React, { useState } from "react";   

function Todolist() {

    const [tasks, setTasks] = useState(["study", "coding", "playing games"]);
    const [addTask, setAddTask] = useState("");

    function handleinputchangne(event) {
        setAddTask(event.target.value);
    }

    function addnewtask() {
        if(addTask.trim() !== "") {
            setTasks(t => [...t, addTask]);
            setAddTask("");
        }

    }

    function deletetasks(index) {
      const todelete = tasks.filter((_, i) => i !== index);
      setTasks(todelete);
    }

    function movetasksup(index) {
      if(index > 0) {
       const todelete = [...tasks];
       [todelete[index], todelete[index - 1]] = [todelete[index -1], todelete[index]];
       setTasks(todelete);
      }
    }

    function movetaskdown(index) {
        if(index < tasks.length -1) {
            const todelete = [...tasks];
            [todelete[index], todelete[index + 1]] = [todelete[index + 1], todelete[index]];
            setTasks(todelete);
           }
    }
    
    return(<div>
        <h1>ToDoList</h1>
        <div>
        <input type="text" placeholder="enter your task" value={addTask} onChange={handleinputchangne}/>
        <button onClick={addnewtask}>Add</button>
        </div>
      
    <ol>
        {tasks.map((task, index) =>
        <li key={index}><span>{task}</span>
        <button onClick={() => deletetasks(index)}>Delete</button>
        <button onClick={() => movetasksup(index)}>Move Task Up</button>
        <button onClick={() => movetaskdown(index)}>Move Task Down</button>
        </li>
    )}
    </ol>

    </div>);
}
export default Todolist
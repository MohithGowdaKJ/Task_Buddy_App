import { useState } from "react";

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    const Handlesubmit = (e) => {
        e.preventDefault(); 
        addTask({text: task, priority, category, completed: false}) /* send data to addTask

        /* Reset State */
        setPriority("Medium");
        setCategory("General");
        setTask("");
    }
    return (
        <form className="task-form" onSubmit={Handlesubmit}>
            <div className="inp">
            <input type="text" placeholder="Enter Your Task" required
            value={task} onChange={(e) => setTask(e.target.value)}/>
            <span><button>AddTask</button></span> 
            </div> 

            <div className="btns">
            <select onChange={(e)=>setPriority(e.target.value)}
            value={priority}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <select onChange={(e)=>setCategory(e.target.value)}
            value={category}>
                <option>General</option>
                <option>Work</option>
                <option>Personal</option>
            </select>
            </div>
        </form>
    )
}
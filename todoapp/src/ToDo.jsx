import  { useState } from "react";

const tasks = [
    {id:1, text:"zadanie1"},
    {id:2, text:"zadanie2"},
    {id:3, text:"zadanie3"},
    {id:4, text:"zadanie4"},
    {id:5, text:"zadanie5"},
]

const ToDo = () => {

const [todos, setToDos] = useState(tasks)

    const removeTaskHandler = (taskId) => {

        const newTasks = todos.filter( (t)  => t.id !== taskId ){
            return t.id !== taskId
        }
        setToDos(

        )
    }

    return(
        <>
        <h1>jest todo app</h1>
        <ul>
            {
                tasks.map( t => (
                    <li style={ {color:"#ffc300", fontSize:"19px", marginBottom:"10px", backgroundColor:"#000814" } } key={t.id}>
                        <span> {t.text} </span>
                        <button onClick={ ()=> removeTaskHandler(t.id) }>usun zadanie</button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default ToDo ; 
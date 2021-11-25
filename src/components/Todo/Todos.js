import { useState } from 'react'
import Todo from './Todo'
import { FaShoppingBasket } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';





const CreateTodo = (props) => {

    const [newTodo, setNewTodo] = useState("")

    return (
        <div >
            <input id="exampleFill" type="text" placeholder="Agrega aqui tus productos" onChange={e => setNewTodo(e.target.value)}/>
            <button id="buttonTrash"type="button" onClick={() => {props.addTodo(newTodo)}}> <FaPlus /></button>
        </div>
    )


}


const Todos = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Aguacate ' ,
            isComplete: false
        },
        {
            text: 'Tortillas',
            isComplete: false
        }
    ])

const setComplete = (index) => {
    const myTodos = [...todos]
    const isComplete = myTodos[index].isComplete
    myTodos[index].isComplete = !isComplete
    setTodos(myTodos)
}



const addTodo = (todoText) => {
    const myTodos = [
        ...todos,
        {text: todoText, isComplete: false}
    ]
    setTodos(myTodos)
}

const deleteTodos = (index) => {
    const myTodos = [...todos]
    myTodos.splice(index, 1)
    setTodos(myTodos)
}
   
    return(
        <>
         <div class = "center">
        <h1>Lista del súper <FaShoppingBasket /> </h1>
        <CreateTodo addTodo={addTodo} />
        {
            todos.map((todo, index) => {
                return <Todo
                    key={index}
                    index={index}
                    text={todo.text}
                    isComplete={todo.isComplete}
                    setComplete={setComplete}
                    delete={deleteTodos}
                />
            })
        }
        </div>
        </>
    )


    }

    export default Todos
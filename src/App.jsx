import { useState } from 'react';
import React, { Fragment } from 'react'; 
import './App.css';

let counter=4;

function App() { 
 const[todos,setTodos]= useState([{
  id:1,
  title:"go to gym",
  description:"become helthy"
 },{
  id:2,
  title:"do rest",
  description:"mauj  kaato"
 },{
  id:3,
  title:"do study",
  description:"mauj mat kaato be!"
 }])

function addTodo()
{
   setTodos([...todos,{
    id:counter++,
    title: Math.random(),
    description:Math.random()
   }])
}

  return (
    <div>
      <button onClick={addTodo}> Add a todo </button>
      {todos.map(todo => <Todo title= {todo.title} description={todo.description}/> )}
    </div>
  )
}

function Todo({title,description})
{
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
}
export default App;

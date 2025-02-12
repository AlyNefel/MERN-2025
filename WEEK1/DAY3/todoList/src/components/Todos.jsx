import React from 'react'
import Card from './Card';
const Todos = () => {

    const todos = [
        { 
             text: 'Buy groceries', isCompleted: false },
        {  text: 'Clean the house', isCompleted: true },
        {  text: 'Walk the dog', isCompleted: false }
      ];
  return (
    <div>
        <ul>
      {
        todos.map(todo=>
           <span key={todo.id}> <Card  todo={todo}></Card></span>
          
        )
      }
      </ul>
    </div>
  )
}

export default Todos
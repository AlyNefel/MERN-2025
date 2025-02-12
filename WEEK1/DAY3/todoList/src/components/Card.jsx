import React from 'react'

const Card = (props) => {
console.log(props.todo)
    const completedStyle={
        textDecoration:'line-through',
        color:'red'
    }

    const notCompletedStyle={
        color:"grey"
    }
    
  return (
    <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title" style={props.todo.isCompleted ? completedStyle: notCompletedStyle}>{props.todo.text}</h5>
      
      
    </div>
  </div>
  )
}

export default Card
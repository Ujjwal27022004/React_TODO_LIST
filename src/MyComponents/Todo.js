import React from 'react'

const Todo = ({todo,onDelete}) => {
  // console.log('Todo component:', todo);
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todo

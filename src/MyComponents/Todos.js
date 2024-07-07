import React, { Component } from 'react'
import Todo from '../MyComponents/Todo';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>

      {props.todos.length===0?"No todos to display":
      props.todos.map((todo) => {
        
        return (
          <>
          <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
        </>
      )
        
      })
      }
      
    </div>
  )
}

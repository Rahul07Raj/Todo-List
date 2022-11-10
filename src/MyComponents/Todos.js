import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  let myStyle ={
  minHeight:"70vh",
  margin:"40px auto"
  }
  return (
    <div className="container my-3"style={myStyle}>
       <h3 className=' my-3'>To DOs List</h3>

       { props.todos.length===0?"No Todos to display":
         props.todos.map((todo)=>{
          return (
            <Todo todo ={todo} key={todo.sno} onDelete ={props.onDelete}/> 
          )
         })
       }
    </div>
  )
}

export default Todos

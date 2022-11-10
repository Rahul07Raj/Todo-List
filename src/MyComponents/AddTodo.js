import React from 'react'
import { useState } from 'react';

const AddTodo = ({addTodo}) => {
 const [title, setTitle] = useState("");
 const [desc, setDesc] = useState("");
 
  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank");
    }else{

      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
<div className='container my-3'>   
<h3>Add a Todo</h3>
<form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control" id="title" aria-describedby="emailHelp" placeholder="title"/>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc" placeholder="description"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todos</button>
  </form>
    </div>
  )
}

export default AddTodo

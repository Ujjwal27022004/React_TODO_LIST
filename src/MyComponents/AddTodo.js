import React, { useState } from 'react';



const AddTodo = ({addTodo}) => {
const [title,setTitle] = useState("")
const [desc,setdesc] = useState("")

const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Please fill the input boxes")
    }
    else{
    addTodo(title,desc)
    setTitle("")
    setdesc("")
    }
}

    return (
        <div className='container my-3'>
            <h3>Add your List Here</h3>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Add Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Add your todo</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc" />
                </div>
                
                <button type="submit" onClick={submit} class="btn btn-sm btn-success">ADD</button>
            </form>
        </div>
    )
}

export default AddTodo

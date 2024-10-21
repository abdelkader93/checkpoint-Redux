import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/Actions/todoList'

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch= useDispatch();
    const handleAdd=(e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random(), text, isDone:false}))
            setText("")
        }else{
            alert("can not add task ")
        }
    }
    return (
        <div>
            <Form onSubmit={handleAdd} style={{ width: "40%", display: "flex", margin: "3% 30%" }}>
                <FormControl type='text' placeholder='Add Task ..' onChange={(e)=> setText(e.target.value)} value={text} />
                <Button variant='primary' type='submit' onClick={handleAdd}>ADD </Button>

            </Form>
        </div>
    )
}

export default AddTask

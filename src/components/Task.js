import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../JS/Actions/todoList';
import EditTask from './EditTask';
import "./Task.css";
const Task = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <span className={task.isDone ? "Done" : null}>{task.text}</span>
            <EditTask task={task}/>
            <Button variant='danger' onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
            <Button variant='primary' onClick={() => dispatch(doneTask(task.id))}>{task.isDone ? 'unDone' : 'Done'}</Button>

        </div>
    )
}

export default Task

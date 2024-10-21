// import
import { ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK } from "../ActionTypes/todoList"
//add task
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask

    }
}
//delet task 
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id

    }
}
//edit task
export const editTask = (id, newTask) => {
    return {
        type: EDIT_TASK,
        payload: { id, newTask }
    };
}
//done task
export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: id
    };
}
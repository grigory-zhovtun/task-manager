import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {AddNewListButton} from "../add-new-list-button/add-new-list-button";
import {TodoList} from "../todo-list/todo-list";
import {v1} from "uuid";

export type TaskType = {
    id: string
    taskName: string
    isDone: boolean
}

export const App = () => {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), taskName: "bread", isDone: true},
        {id: v1(), taskName: "butter", isDone: true},
        {id: v1(), taskName: "milk", isDone: false},
        {id: v1(), taskName: "tea", isDone: false},
        {id: v1(), taskName: "tomato", isDone: false},
    ]);

    const deleteTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }
    const [newTaskName, setNewTaskName] = useState('')
    const inputHandler = (taskName: string) => {
        setNewTaskName(taskName)
    }
    const addTask = () => {
        const newTask = {id: v1(), taskName: newTaskName, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (id: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone} : t))
    }

    return (
        <div className="App">
            <AddNewListButton title={"New list"}/>
            <TodoList   title={'Shopping'}
                        addTaskHandler={addTask}
                        tasks={tasks}
                        deleteTask={deleteTask}
                        inputHandler={inputHandler}
                        changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

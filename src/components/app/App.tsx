import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {AddNewListButton} from "../add-new-list-button/add-new-list-button";
import {TodoList} from "../todo-list/todo-list";
import { v1 } from 'uuid';


export type TaskType = {
    id: string
    taskName: string
    isDone: boolean
}

type TodoListType = {
    title: string
    id: string
}

type TasksStateType = {
    [todoListID: string]: Array<TaskType>
}

export const App = () => {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn"},
        {id: todoListID_2, title: "Shopping"},
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), taskName: "HTML&CSS", isDone: true},
            {id: v1(), taskName: "JavaScript", isDone: true},
            {id: v1(), taskName: "React", isDone: false},
            {id: v1(), taskName: "Node", isDone: false}
        ],
        [todoListID_2]: [
            {id: v1(), taskName: "bread", isDone: true},
            {id: v1(), taskName: "butter", isDone: true},
            {id: v1(), taskName: "milk", isDone: false},
            {id: v1(), taskName: "tea", isDone: false},
            {id: v1(), taskName: "tomato", isDone: false}
        ]
            
    })

    const deleteTask = (id: string, todoListID: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }
    const [newTaskName, setNewTaskName] = useState('')
    const inputHandler = (taskName: string) => {
        setNewTaskName(taskName)
    }
    const addTask = (todoListID: string) => {
        const newTask = {id: v1(), taskName: newTaskName, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (id: string, isDone: boolean, todoListID: string) => {
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

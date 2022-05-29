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

    const [newTaskName, setNewTaskName] = useState('')

    const removeTask = (id: string, todoListID: string) => {
        const currentTodoListTasks = tasks[todoListID];
        const updateTasks = currentTodoListTasks.filter(t => t.id !== id);
        tasks[todoListID] = updateTasks;
        setTasks({...tasks});
    }   
    const inputHandler = (taskName: string) => {
        setNewTaskName(taskName)
    }
    const addTask = (todoListID: string) => { 
        const newTask = {id: v1(), taskName: newTaskName, isDone: false}
        const currentTodoListTasks = tasks[todoListID];
        const updateTasks = [newTask, ...currentTodoListTasks]
        setTasks({...tasks, [todoListID]: updateTasks})
    }
    const changeTaskStatus = (id: string, isDone: boolean, todoListID: string) => {
        const currentTodoListTasks = tasks[todoListID];
        const updateTasks = currentTodoListTasks.map(t => t.id === id ? {...t, isDone} : t)
        tasks[todoListID] = updateTasks;
        setTasks({...tasks});
    }
    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID));
        delete tasks[todoListID];
    }

    const todoListsComponents = todoLists.map(tl => {
        return (
            <TodoList   key={tl.id}
                        todoListID={tl.id}
                        title={tl.title}
                        tasks={tasks[tl.id]}
                        removeTodoList={removeTodoList}
                        addTaskHandler={addTask}
                        removeTask={removeTask}
                        inputHandler={inputHandler}
                        changeTaskStatus={changeTaskStatus}
            />
        )
    })

    return (
        <div className="App">
            <AddNewListButton title={"New list"}/>
            <div className="TodoListsWrapper">
                {todoListsComponents}
            </div>
        </div>
    );
}

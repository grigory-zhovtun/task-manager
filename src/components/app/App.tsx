import React from 'react';
import './App.css';
import {AddNewListButton} from "../add-new-list-button/add-new-list-button";
import {TodoList} from "../todo-list/todo-list";

export const App = () => {
    return (
        <div className="App">
            <AddNewListButton title={"New list"}/>
            <TodoList title={'Shopping'}/>
        </div>
    );
}

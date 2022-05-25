import './todo-list.css'
import bg from './bg.png'
import { Input } from "../input/input";
import { AddTaskButton } from '../add-new-task-button/add-new-task-button';
import { ListItem } from '../list-item/list-item';

type PropsType = {
    title: string
}

export const TodoList = ({ title }: PropsType) => {
    return (
        <div className="TodoList">
            <span className="TodoListTitle">{title}</span>
            <div className="AddTasksWrapper">
                <Input />
                <AddTaskButton />
            </div>
            <div className="ListItemsWrapper">
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            
        </div>
    )
}
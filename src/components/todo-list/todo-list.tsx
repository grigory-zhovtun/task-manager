import './todo-list.css'
import bg from './bg.png'
import {Input} from "../input/input";

type PropsType = {
    title: string
}

export const TodoList = ({title}: PropsType) => {
    return (
        <div className="TodoList">
            <span className="TodoListTitle">{title}</span>
            <Input/>
        </div>
    )
}
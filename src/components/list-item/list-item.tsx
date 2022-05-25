import './list-item.css'
import {DeleteButton} from "../delete-button/delete-button";
import {ChangeEvent} from "react";

type ListItemProps = {
    taskName: string
    isDone: boolean
    deleteTask: () => void
    changeTaskStatus: (taskStatus: boolean) => void
}

export const ListItem = ({taskName, isDone, deleteTask, changeTaskStatus}: ListItemProps) => {

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(e.currentTarget.checked)
    }

    return (
        <div className="ListItem">
            <div>
                <input type="checkbox" onChange={onChangeCheckboxHandler} checked={isDone} />
            </div>
            <div>
                <span>{taskName}</span>
            </div>
            <DeleteButton deleteTask={deleteTask}/>
        </div>
    )
}
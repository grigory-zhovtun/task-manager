import './todo-list.css'
import bg from './bg.png'
import {Input} from "../input/input";
import {AddTaskButton} from '../add-new-task-button/add-new-task-button';
import {ListItem} from '../list-item/list-item';
import {TaskType} from "../app/App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (id: string) => void
    inputHandler: (taskName: string) => void
    addTaskHandler: () => void
    changeTaskStatus: (taskID: string, taskStatus: boolean) => void
}

export const TodoList = ({
                             title,
                             tasks,
                             deleteTask,
                             inputHandler,
                             addTaskHandler,
                             changeTaskStatus
                         }: PropsType) => {
    return (
        <div className="TodoList">
            <span className="TodoListTitle">{title}</span>

            <div className="AddTasksWrapper">
                <Input inputHandler={inputHandler}
                       addTaskHandler={addTaskHandler}/>
            </div>

            <div className="ListItemsWrapper">
                {tasks.map(task => {
                    const deleteTaskHandler = () => {
                        deleteTask(task.id)
                    }
                    const onChangeCheckboxHandler = (taskStatus: boolean) => {
                        changeTaskStatus(task.id, taskStatus)
                    }
                    return (
                        <ListItem   key={task.id}
                                    changeTaskStatus={onChangeCheckboxHandler}
                                    taskName={task.taskName}
                                    isDone={task.isDone}
                                    deleteTask={deleteTaskHandler}/>
                    )
                })}
            </div>

        </div>
    )
}
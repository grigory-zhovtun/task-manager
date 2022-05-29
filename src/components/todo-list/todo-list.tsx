import './todo-list.css'
import bg from './bg.png'
import {Input} from "../input/input";
import {AddTaskButton} from '../add-new-task-button/add-new-task-button';
import {ListItem} from '../list-item/list-item';
import {TaskType} from "../app/App";

type PropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    removeTodoList: (todoListID: string) => void
    removeTask: (id: string, todoListID: string) => void
    inputHandler: (taskName: string) => void
    addTaskHandler: (todoListID: string) => void
    changeTaskStatus: (taskID: string, taskStatus: boolean, todoListID: string) => void
}

export const TodoList = ({   todoListID,
                             title,
                             tasks,
                             removeTask,
                             inputHandler,
                             addTaskHandler,
                             changeTaskStatus,
                             removeTodoList
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
                        removeTask(task.id, todoListID)
                    }
                    const onChangeCheckboxHandler = (taskStatus: boolean) => {
                        changeTaskStatus(task.id, taskStatus, todoListID)
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
import './input.css'
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddTaskButton} from "../add-new-task-button/add-new-task-button";

type PropsType = {
    inputHandler: (taskName: string) => void
    addTaskHandler: (inputValue: string) => void
}

export const Input = ({inputHandler, addTaskHandler}:PropsType) => {

    const [inputValue, setInputValue] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        inputHandler(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputValue) {
                addTaskHandler(inputValue);
                setInputValue('')
            }
        }
    }
    const onClickHandler = () => {
        if (inputValue) {
            addTaskHandler(inputValue);
            setInputValue('')
        }
    }

    return (
        <>
            <input  className={'Input'}
                    value={inputValue}
                    onChange={onChangeInputHandler}
                    onKeyPress={onKeyPressHandler}
                    type="text"/>
            <AddTaskButton onClickHandler={onClickHandler} />
        </>

    )
}
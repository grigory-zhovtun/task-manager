import './add-new-task-button.css'

type PropsType = {
    onClickHandler: () => void
}

export const AddTaskButton = ({onClickHandler}:PropsType) => {
    return (
        <div    onClick={onClickHandler}
                className="AddTaskButton">
                <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="26" y1="1" x2="26" y2="13" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" />
                <path d="M0 13L10 18.7735L10 7.2265L0 13ZM26 12L9 12L9 14L26 14L26 12Z" fill="#A5A5A5" />
            </svg>
        </div>
    )
}
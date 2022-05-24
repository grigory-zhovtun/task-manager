import './add-niew-list-button.css';

type PropsType = {
    title: string
}

export const AddNewListButton = ({title}: PropsType) => {
    return (
        <div className={'Wrapper'}>
            <div className={'PlusListButton'}></div>
            <span>{title}</span>
        </div>
    )
}
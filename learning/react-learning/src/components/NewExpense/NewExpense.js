import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formShown, setFormShown] = useState(false);
    const formShownHandler = () => {
        setFormShown(!formShown)
    }
    const onSaveExpanseDataHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expanseData)
        formShownHandler()
    }
    return (
        <div className='new-expense'>
            {!formShown && <button type='button' onClick={formShownHandler}>Add New Expense</button>}
            {formShown && <ExpenseForm onSaveExpanseData={onSaveExpanseDataHandler} onCancel={formShownHandler}/>}
        </div>
    )
};
export default NewExpense;
import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2020');
    const onChangeExpanseYearHandler = expenseYear => {
        setEnteredYear(expenseYear);
        console.log(expenseYear)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeExpanseYear={onChangeExpanseYearHandler}
                    selected={enteredYear}
                />
                {props.expenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
        </div>
    )
}

export default Expenses;
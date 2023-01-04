import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2020');
    const onChangeExpanseYearHandler = expenseYear => {
        setEnteredYear(expenseYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === enteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeExpanseYear={onChangeExpanseYearHandler}
                    selected={enteredYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;
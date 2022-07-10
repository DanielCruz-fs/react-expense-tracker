import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020'); 

    const filteredExpenses = props.items.filter(exp => exp.date.getFullYear().toString() === filterYear); 

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selectedDate={filterYear}
                onChangeFilter={filterChangeHandler}
            ></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            {/* Rendering dynamic list of data */}
            <ExpensesList
                items={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;
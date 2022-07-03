import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020'); 

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selectedDate={filterYear}
                onChangeFilter={filterChangeHandler}
            ></ExpenseFilter>
            
            {/* Rendering dynamic list of data */}
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}

            {/* <ExpenseItem
                title={props.expenses[0].title}
                date={props.expenses[0].date}
                amount={props.expenses[0].amount}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                date={props.expenses[1].date}
                amount={props.expenses[1].amount}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                date={props.expenses[2].date}
                amount={props.expenses[2].amount}
            ></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;
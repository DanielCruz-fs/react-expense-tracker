import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

// * In JSX custom components must be Upper case that's how React knows the difference
function App() {
    //* We need to use useState to make a property reactive
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = newExpense => {
        console.log(':: RECEIVED DATA IN APP.JS ::', newExpense)
        setExpenses(prevExpenses => {
            /**
             ** THIS IS THE KEY TO UNDERSTAND useState in REACT
             ** if you change the order as follow: return [newExpense, ...prevExpenses]
             ** you'll face the bug due to using useState for property: title
             ** In order to shift the 1st item to the top change the order and
             ** do not use useState anymore for title just use it as a prop directly.
             */
            return [...prevExpenses, newExpense];
        });
    };

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;

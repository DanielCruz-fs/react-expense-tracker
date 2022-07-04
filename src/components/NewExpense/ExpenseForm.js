import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = props => {
    //* Multiple states
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    
    //* One state for multiple states
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setUserInput({ ...userInput, enteredTitle: event.target.value });

        //* Use this approach to ensure to work with the latest 'state'
        setUserInput(prevState => {
            return { ...prevState, title: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput(prevState => {
            return { ...prevState, amount: +event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput(prevState => {
            return { ...prevState, date: event.target.value };
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        console.log(':: USER INPUT OBJECT TO ADD ::', userInput);

        const dateArray = userInput.date.split('-');
        const finalDateObject = new Date(dateArray[0], dateArray[1] ? dateArray[1] - 1 : 0, dateArray[2]);
        //* Communication child to parent
        props.onSaveExpenseData({...userInput, date: finalDateObject});
        setUserInput({title: '', amount: '', date: ''});
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.amount} onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.date} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
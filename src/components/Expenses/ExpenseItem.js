/**
 * * A component in React is just a 'function' (the file name should be Pascal case)
 * * Must return just one root element per component, for readability use ()
 */
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

/**
 ** IN REACT THERE IS NO CHAIN DETECTION, modifying variables
 ** or executing dom events does not trigger reactivity to update the DOM 
 ** to do that you must use STATE
 */

//* You can use this ES6 syntax
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Title Updated!!!');
        console.log(':: React schedule this update ::', title);
    };

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Click Me</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //* Child to parent communication
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {/* Passing data (child to parent) convention is to use prefix 'on' */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
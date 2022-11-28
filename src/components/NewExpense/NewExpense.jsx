import React from 'react';
import '../../assets/css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (incomingExpenseData) => {
		console.log('Added expense data is  :', incomingExpenseData);
		const expenseData = {
			...incomingExpenseData,
			id: Math.random().toFixed(5).toString(),
		};
		props.onAddExpense(expenseData);
	};
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;

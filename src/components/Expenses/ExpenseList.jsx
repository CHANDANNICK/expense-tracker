import React from 'react';
import '../../assets/css/ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
	console.log(
		'Expenses to be rendered after update from expenseList is :',
		props.items
	);
	// if (props.items.length === 0) {
	// 	return <p>No Expense Item Found !</p>;
	// }
	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;

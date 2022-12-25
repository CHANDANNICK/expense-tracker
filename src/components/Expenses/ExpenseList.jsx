import React from 'react';
import '../../assets/css/ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;

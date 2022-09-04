import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../../assets/css/Expenses.css';
import Card from '../Ui/Card';

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			{props.items.map((e) => {
				return (
					<ExpenseItem
						title={e.title}
						amount={e.amount}
						date={e.date}
					/>
				);
			})}
		</Card>
	);
};
export default Expenses;

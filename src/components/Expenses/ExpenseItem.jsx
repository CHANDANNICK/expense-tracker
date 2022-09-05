import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import '../../assets/css/ExpenseItem.css';
import Card from '../Ui/Card';

const ExpenseItems = (props) => {
	// HOOKS  
	const [title, setTitle] = useState(props.title);

	// EVENT HANDLER  // FUNCTION 

	const clickHandler = () => {
		console.log('Button Clicked');
		setTitle('Updated !')
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			{/* <button onClick={() => console.log('Button Clicked')}></button> */}
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItems;

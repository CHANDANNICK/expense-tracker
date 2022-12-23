import React, { useState } from 'react';
import '../../assets/css/ExpenseForm.css';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	// FUNCTION  Change Handler's Function
	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
		// console.log(title);
	};
	const dateChangeHandler = (event) => {
		setDate(event.target.value);
		// console.log(date);
	};
	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
		// console.log(amount);
	};

	// INFO  // FUNCTION  Submit handler

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date),
		};

		props.onSaveExpenseData(expenseData);
		setAmount('');
		setDate('');
		setTitle('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input
						required
						type='text'
						value={title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						required
						type='number'
						value={amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						required
						type='date'
						value={date}
						onChange={dateChangeHandler}
						min='2020-01-01'
						max='2030-01-01'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit' className='new-expense__action'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

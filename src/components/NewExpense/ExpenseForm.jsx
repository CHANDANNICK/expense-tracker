import React from 'react';
import '../../assets/css/ExpenseForm.css';

const ExpenseForm = () => {
	const titleChangeHandler = (event) => {
		console.log(event.target.value);
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input type='number' />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input type='date' />
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

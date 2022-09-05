import React from 'react';
import '../../assets/css/ExpenseForm.css';

const ExpenseForm = () => {
	return (
		<form>
			<div className='expense-form__controls'>
				<div className='expense-form__control'>
					<label htmlFor='title'>Title</label>
					<input type='text' />
				</div>
				<div className='expense-form__control'>
					<label htmlFor='amount'>Amount</label>
					<input type='number' />
				</div>
				<div className='expense-form__control'>
					<label htmlFor='date'>Date</label>
					<input type='date' />
				</div>
			</div>
			<div className='expense-form__actions'>
				<button type='submit' className='expense-form__action'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

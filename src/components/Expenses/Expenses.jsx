import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import '../../assets/css/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import Card from '../Ui/Card';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log('Selected Year From Expenses.js is ', selectedYear);
	};
	props.onSelectFilteredYear(filteredYear);
	console.log(
		'Expenses data from apps.js to Expenses to print ',
		props.items
	);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			{props.items.map((e) => (
				<ExpenseItem title={e.title} amount={e.amount} date={e.date} />
			))}
		</Card>
	);
};
export default Expenses;

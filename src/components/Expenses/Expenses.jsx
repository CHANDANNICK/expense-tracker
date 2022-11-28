import React, { useState, useEffect } from 'react';
import '../../assets/css/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import Card from '../Ui/Card';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('1990');
	const [expenses, setExpenses] = useState(props.items);

	useEffect(() => {
		setExpenses(props.items);
	}, [props.items]);

	const filterChangeHandler = (selectedYear) => {
		console.log('selected year is :', selectedYear);
		setFilteredYear(selectedYear);
	};
	console.log(
		'Expenses to be rendered after update from expenses is :',
		props.items
	);
	// props.onSelectFilteredYear(filteredYear);

	// if (filteredYear !== '' || filteredYear !== null) {
	// 	var filteredExpenses = props.items.filter((item) => {
	// 		return item.date.getFullYear() == filteredYear;
	// 	});
	// 	setExpenses(filteredExpenses);
	// }

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpenseList items={expenses} />
		</Card>
	);
};
export default Expenses;

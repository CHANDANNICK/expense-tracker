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
	}, [props])
	

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		if (parseInt(selectedYear) === 0) {
			setExpenses(props.items);
		} else {
			var filteredExpenses = props.items.filter((item) => {
				return item.date.getFullYear() === parseInt(selectedYear);
			});
			setExpenses(filteredExpenses);
		}
	};

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

import React, { useState, useId } from 'react';
import './assets/css/App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = (props) => {
	const dummyExpense = [
		{
			id: useId(),
			title: 'Mobile',
			amount: 1299,
			date: new Date(2022, 12, 20),
		},
		{
			id: useId(),
			title: 'Car',
			amount: 33333,
			date: new Date(2022, 9, 23),
		},
		{
			id: useId(),
			title: 'Shoes',
			amount: 213,
			date: new Date(2022, 12, 20),
		},
		{
			id: useId(),
			title: 'House',
			amount: 2000000,
			date: new Date(2022, 9, 23),
		},
	];
	const [expenses, setExpenses] = useState(dummyExpense);

	// FUNCTION to handle the received data from it's child component NewExpense
	const addExpenseHandler = (expense) => {
		// console.log(expense);
		// console.log(dummyExpense);
		setExpenses((prevExpense) => {
			return [expense, ...prevExpense];
		});
	};
	console.log('Expenses after update', expenses);
	const addFilteredYear = (filteredYear) => {
		console.log('Selected Year From App.js is ', filteredYear);
	};

	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} onSelectFilteredYear={addFilteredYear} />
		</div>
	);
};

export default App;

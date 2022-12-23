import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = (props) => {
	const [id, setId] = useState(4);
	const dummyExpense = [
		{
			id: 1,
			title: 'Mobile',
			amount: 1299,
			date: new Date(2020, 12, 20),
		},
		{
			id: 2,
			title: 'Car',
			amount: 33333,
			date: new Date(2022, 9, 23),
		},
		{
			id: 3,
			title: 'Shoes',
			amount: 213,
			date: new Date(2020, 12, 20),
		},
		{
			id: 4,
			title: 'House',
			amount: 2000000,
			date: new Date(2021, 9, 23),
		},
	];
	const [expenses, setExpenses] = useState(dummyExpense);

	// FUNCTION  to handle the received data from it's child component NewExpense
	const addExpenseHandler = (expense) => {
		setId((prevId) => {
			return prevId + 1;
		});
		setExpenses((prevExpense) => {
			expense = {
				...expense,
				id: id + 1,
			};
			return [expense, ...prevExpense];
		});
	};

	// console.log('id is:', id);
	// console.log('Expenses after update', expenses);
	const addFilteredYear = (filteredYear) => {
		// console.log('Selected Year From App.js is ', filteredYear);
	};

	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;

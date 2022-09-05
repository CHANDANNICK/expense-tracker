import React from 'react';
import './assets/css/App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const expenses = [
		{
			id: 1,
			title: 'Mobile',
			amount: 1299,
			date: new Date(2022, 12, 20),
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
			date: new Date(2022, 12, 20),
		},
		{
			id: 4,
			title: 'House',
			amount: 2000000,
			date: new Date(2022, 9, 23),
		},
	];

	return (
		<div className='App'>
			<NewExpense />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

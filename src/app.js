import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import expensesReducer from './reducers/expenses';
import getVisibleExpenses from './selectors/expenses.js';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 15000 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 350 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 7000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 195000 }));
//console.log('All expenses');
//console.log(store.getState());

//console.log('Expenses containing bill');
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
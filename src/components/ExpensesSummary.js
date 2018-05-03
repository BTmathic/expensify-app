import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
    
    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h2>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
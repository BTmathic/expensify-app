import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should return ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should return ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={13} expenseTotal={19371045823} />);
    expect(wrapper).toMatchSnapshot();
});
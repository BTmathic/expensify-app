import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem =  ({history, dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{'Amount: ' + amount + ' - Created at: ' + createdAt}</p>
    </div>
);

export default ExpenseListItem;
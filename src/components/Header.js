import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header id='header'>
        <div className='content-container'>
            <div id='header__content'>
                <Link id='header__title' to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className='button button--header' onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
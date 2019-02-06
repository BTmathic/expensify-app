import React from 'react';
const loader = require('../../public/Images/loader.gif');

const LoadingPage = () => (
    <div className='loader'>
        <img className='loader__image' src={loader} alt='Loading...' />
    </div>
);

export default LoadingPage;
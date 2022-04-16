import React from 'react';
import '../styles/loading-css.css';

const LoadingScreen = () => {
    return (
        <div className='loading-screen'>
            <div className="lds-hourglass"></div>
        </div>
    );
};

export default LoadingScreen;
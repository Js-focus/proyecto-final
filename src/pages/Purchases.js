import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PurchasesInfo } from '../components';
import '../styles/purchases.css'

const Purchases = () => {

    const purchases = useSelector(state => state.userPurchases);
    

    return (
        <div className='purchases'>
            <div className='route'>
                <div>    
                    <Link to="/" className='link'>
                        Home
                    </Link>    
                </div>
                <div className='punt'></div>
                <p>
                    purchases
                </p>
            </div>
            <div className='my-purchases'>
                <h2>My purchases</h2>
                {
                    purchases.map(purchases => (
                        <div 
                            key={purchases.id}
                            className="purchases-contain"
                        >
                            <PurchasesInfo purchases={purchases}/>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Purchases;
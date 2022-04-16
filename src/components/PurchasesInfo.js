import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasesInfo = ({ purchases }) => {
    
    const navigate = useNavigate();

    const options = {year: 'numeric', month: 'long', day:'numeric'};
    const date = new Date(purchases.createdAt).toLocaleDateString('en-us', options);
    return (
        <>
            <div className='date'>
                {date}
            </div>
            <ul className='ul-contain'>
                {
                    purchases.cart.products?.map(productItem => (
                       <li
                        onClick={() => navigate(`/shop/${productItem.id}`)}
                        key={productItem.id}
                       >
                            <div>
                                {productItem.title}
                            </div>
                            <div className='div-flex'>
                                <b>Quantity</b>
                                <p>
                                    {productItem.productsInCart.quantity}
                                </p>
                            </div>
                            <div className='div-flex'>
                                <b>Price</b>
                                <strong>
                                    $ {productItem.price}
                                </strong> 
                            </div>
                            <div className='div-flex'>
                                <b>Total</b>
                                <strong>
                                    $ {(productItem.productsInCart.quantity) * (Number(productItem.price))}
                                </strong>
                            </div>
                       </li> 
                    ))
                }
            </ul>
        </>
    );
};

export default PurchasesInfo;
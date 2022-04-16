import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/userCart.css';

const UserCart = ({ isOpen }) => {
    
    const cartProducts = useSelector(state => state.productsCart);

    const [totalCart , setTotalCart] = useState(0);

    console.log(totalCart)
    for(let i = 0; i <= (cartProducts.length - 1); i++){
        console.log((cartProducts[i].price) * (cartProducts[i].productsInCart.quantity));
        setTotalCart()
        
    }

    return (
        <>
            {
                localStorage.getItem("token") && (
                    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
                        {
                            cartProducts?.map(product => (
                                <div key={product.id}>
                                    <ul>
                                        <li>
                                            <h4>{product.brand}</h4>
                                            <p>{product.title}</p>
                                        </li>
                                        <button>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </ul>
                                    <ul>
                                        <li>{product.productsInCart.quantity}</li>
                                        <li>
                                            <h4>Total</h4>
                                            <strong>
                                                $ {product.price * product.productsInCart.quantity}
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                        <div className='modal-bottom'>
                            <div>
                                <span>Total</span>
                                <strong>
                                    $ 
                                </strong>
                            </div>
                        </div>
                        
                    </div>
                ) 
            }
            
        </>
        
    );
};

export default UserCart;
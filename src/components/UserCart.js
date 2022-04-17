import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductCartThunk, purchaseCartThunk} from '../redux/actions';
import '../styles/userCart.css';

const UserCart = ({ isOpen }) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProducts = useSelector(state => state.productsCart);


    return (
        <>
            {
                localStorage.getItem("token") && (
                    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
                        <div className="open-modal">
                            <h4>Carrito de compras</h4>
                            {
                                cartProducts?.map(product => (
                                    
                                    <div 
                                    key={product.id} 
                                    className="details"
                                    onClick={() => navigate(`/shop/${product.id}`)}
                                    >
                                        <ul className='details-top'>
                                            <li className='brand'>
                                                <span>{product.brand}</span>
                                                <p>{product.title}</p>
                                                <div className='quantity'>
                                                    {product.productsInCart.quantity}
                                                </div>
                                            </li>
                                            <button onClick={() => dispatch(deleteProductCartThunk(product.id))}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </ul>
                                        <div className='details-bottom'>
                                            <span>Total</span>
                                            <strong>
                                                $ {product.price * product.productsInCart.quantity}
                                            </strong>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='modal-bottom'>
                            <div>
                                <span>Total</span>
                                <strong>
                                    $ {1200}
                                </strong>
                            </div>
                            <button onClick={() => dispatch(purchaseCartThunk())}>
                                Checkout
                            </button>
                        </div>
                        
                    </div>
                ) 
            }
            
        </>
        
    );
};

export default UserCart;
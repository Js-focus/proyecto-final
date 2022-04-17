import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductCartThunk, getUserPurchasesThunk, purchaseCartThunk} from '../redux/actions';
import '../styles/userCart.css';

const UserCart = ({ isOpen }) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProducts = useSelector(state => state.productsCart);

    const deleteProduct = id =>{
        dispatch(deleteProductCartThunk(id));
       
    }
    const purchaseCart = () => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if(cartProducts.length > 0){
            dispatch(purchaseCartThunk(userData))
            dispatch(getUserPurchasesThunk())
        }else{
            console.log("no no no no no")
        }
    }

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
                                            <button onClick={() => deleteProduct(product.id)}>
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
                            <button onClick={() => purchaseCart()}>
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
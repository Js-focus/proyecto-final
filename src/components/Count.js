import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../redux/actions';

const Count = () => {

    
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.quantity);
    return (
        <div className='quantity-buttons'>
            <button onClick={() => {
                if(quantity <= 1){
                    dispatch(setQuantity(1))
                }else if(quantity >= 1){
                    dispatch(setQuantity(quantity - 1))
                }
                }}>
                -
            </button>
            <span>
                {quantity}
            </span>
            <button onClick={() => {
                dispatch(setQuantity(quantity + 1))
            }}>
                +
            </button>
        </div>
    );
};

export default Count;
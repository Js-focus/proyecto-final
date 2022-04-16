
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Count } from '../components';
import SimilarItems from '../components/SimilarItems';
import { addProduct, getProductsThunk } from '../redux/actions';
import '../styles/productDetail.css'


const ProductDetail = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    const quantity = useSelector(state => state.quantity);

    useEffect(() => {
        dispatch(getProductsThunk())
    } ,[dispatch])
   
    const productFound = products.products?.find(product => product.id === Number(id));
    
    const addProducts = idProduct => {
        const arr = {
            "id": idProduct,
            "quantity": quantity
        }
        
        dispatch(addProduct(arr));

        
    }
   
    return (
        <div className='contain-product'>
            <div className='route'>
                <div>    
                    <Link to="/" className='link'>
                        Home
                    </Link>    
                </div>
                <div className='punt'></div>
                <p>
                    {productFound?.title}
                </p>
            </div>
            <div className='product'>
    -
                <div className="glider-contain">
                    <button aria-label="Previous" className="glider-prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <div className="glider">
                        <div>
                            <img src={productFound?.productImgs[0]} alt=''  />
                        </div>
                        <div>
                            <img src="" alt=''   />
                        </div>
                        <div>
                            <img src="" alt=''   />
                        </div>
                        
                    </div>

                    <button aria-label="Next" className="glider-next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <div role="tablist" className="dots"></div>
                </div>
                
                <div className='bottom-product'>
                    <h1>{productFound?.title}</h1>
                    <div className='price-add'>
                        <div>
                            <p>Price</p>
                            <strong>
                                $ {productFound?.price}
                            </strong>
                        </div>
                        <div>
                            <p>Quantity</p>
                            <Count />
                        </div>
                    </div>
                    <button 
                    className='add-cart' 
                    onClick={() => addProducts(productFound?.id)}
                    >
                        <p>Add to cart</p>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <p className='description'>
                        {productFound?.description} 
                    </p>
                </div>
            </div>
            <SimilarItems idSelect={productFound?.category.id}/>
        </div>
    );
};

export default ProductDetail;
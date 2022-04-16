import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SimilarItems = ({ idSelect }) => {
    
    const [similarProducts, setSimilarProducts] = useState(null);


    useEffect(()=> {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${idSelect}`)
        .then(res => setSimilarProducts(res.data.data))
    },[idSelect])
    
    
    return (
        <div>
            <h3>
                Discover similar items
            </h3>
            <div className='info-product similar'>
                
                {similarProducts?.products.map(product => (
                    <Link to={ `/shop/${product?.id}` } key={product?.id} className='info' >
                        <div className='contain'>
                            <img src={product?.productImgs?.[0]} alt="" />
                            <img src={product?.productImgs?.[2]} alt="" className='over'/>
                        </div>
                        <div className='product-price'>
                            <li>{product?.title}</li>
                            <div>
                                <li>
                                <p>Price</p>
                                <strong> $ {product?.price} </strong>
                                </li>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>    
    );
};

export default SimilarItems;<h3>Discover similar items</h3
>
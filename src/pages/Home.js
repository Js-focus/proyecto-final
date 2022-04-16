import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCategoryThunk, filterNameThunk, getCategoriesThunk, getProductsThunk } from '../redux/actions';
import '../styles/home-similar.css'
const Home = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
    
  }, [dispatch])


  const searchName = e => {
    e.preventDefault();
    dispatch(filterNameThunk(name))
  }


    return (
        <div className='content-sections'>
          <div className='input-search'>
            <form onSubmit={searchName}>
              <input 
              type="text"
              placeholder='What are you looking for?'
              value={name}
              onChange={e => setName(e.target.value)}
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <aside>
            <h2>Category</h2>
            {
              categories.categories?.map(category => (
                <button 
                key={category.id}
                onClick={() => dispatch(filterCategoryThunk(category.id))}
                >
                  {category.name}
                </button>
              ))
            }
          </aside>
          
          <ul className='info-product'>
            
            {products.products?.map(productItem => (
              
              <Link to={`/shop/${productItem.id}`} key={productItem.id} className='info'>

                <div className='contain'>
                    <img src={productItem.productImgs?.[1]} alt="" />
                    <img src={productItem.productImgs?.[2]} alt="" className='over'/>
                </div>
                <div className='product-price'>
                  <li>{productItem.title}</li>
                  <div>
                    <li>
                      <p>Price</p>
                      <strong> $ {productItem.price} </strong>
                    </li>
                  </div>
                </div>
              
              </Link>
              
            ))}

          </ul>
        </div>
    );
};

export default Home;
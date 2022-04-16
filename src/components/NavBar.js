import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserCartThunk, getUserPurchasesThunk, loginThunk } from '../redux/actions';
import '../styles/navbar.css';
import UserCart from './UserCart';

const NavBar = () => {
    

    const [isLoginOpen, setIsLoginOpen ] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logError, setLogError] = useState("");
    const [isCartOpen, setIsCartOpen ] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openCart = () => {
        setIsCartOpen(!isCartOpen)
        dispatch(getUserCartThunk())
    }
    const openPurchases = () => {
        dispatch(getUserPurchasesThunk())
        navigate("/purchases")
        if(localStorage.getItem("token")){
            setIsLoginOpen(false)
        } else{
            setIsLoginOpen(true)
        }
        
    }

    const login = (e) => {
        e.preventDefault();
        const credentials = { email, password }
        
        dispatch(loginThunk( credentials ))
            .then(res => {
                localStorage.setItem("token", res.data.data?.token)
                setLogError("");
                setIsLoginOpen(false);
            })
            .catch(error => {
                setLogError(error.response?.data.message)
            })
    }

    return (
        <div className='navbar'>
            <nav className='top'>
                <div id='name'>
                    <Link to="/" className='link'>e-commerce</Link>
                </div>
                <div id='buttons'>
                    <button onClick={() => setIsLoginOpen(!isLoginOpen)} className='icon'>
                        <i className="fa-regular fa-user"></i>
                    </button>
                    <button     
                    className='icon'
                    onClick={() => openPurchases()}
                    >
                        <i className="fa-solid fa-box-archive"></i>
                    </button>
                    <button 
                    className='icon' 
                    onClick={() => openCart()}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                
            </nav>

            {
                isLoginOpen && 

                <div>
                    
                {
                    localStorage.getItem("token") ? (
                        <button onClick={() => localStorage.setItem("token", "") }> 
                        Log out 
                        </button> 
                    ) : (
                    <form onSubmit={login} className={`login ${isLoginOpen ? 'open' : ''}`}>
                        <input 
                        type="email" 
                        placeholder='email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input 
                        type="password" 
                        placeholder='password' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />

                        <button>Submit</button>
                        <p>
                            {logError}
                        </p>
                        
                    </form>
                    )
                }

                    
                </div>
            }
            <UserCart isOpen={isCartOpen} setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen}/>
        </div>
    );
};

export default NavBar;

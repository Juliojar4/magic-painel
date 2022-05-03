/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
 
    
const Navigation = (props) => { 
 
    const WrapNavigation = () => {
        return (
        <>
            <nav className="main-nav">    
                <div className="img">
                             
                </div>    
                <li>
                    <Link to='/' className='ta-aqui'><a>Home</a></Link>
                </li>   
                <li>
                    <Link to='/allCards' className='ta-aqui'><a>All Cards</a></Link>
                </li> 
                <li>
                    <Link to='/myCards' className='ta-aqui'><a>My Cards</a></Link>
                </li>     
            </nav>        
        </>   
        );
    };

    return (
        <>
            <div className="wrap-navigation">
                <WrapNavigation />
            </div>
        </>
    ) 
};

export default Navigation;

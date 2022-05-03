import React from 'react';
import { useEffect, useState } from 'react';
import apiHome from '../../services/apiHome'
import './stly.css'

const Home = () => {
    useEffect(() => {
        apiHome()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    });
    return (
        <>            
            <h1>home</h1>
        </>
    );
};

export default Home;
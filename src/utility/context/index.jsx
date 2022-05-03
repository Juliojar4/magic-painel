import React from 'react';
import './style.css';

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default ThemeContext;
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './style.css';

const ImageCard = ({img}) => {
    return (    
        <div className="card-individual">
            <img src={img} width="220" height="290" />
        </div>
    )
}

export default ImageCard
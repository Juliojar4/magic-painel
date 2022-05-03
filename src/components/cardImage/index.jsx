/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ImageCard = ({img}) => {
    return (    
        <div>
            <img src={img} width="220" height="290" />
        </div>
    )
}

export default ImageCard
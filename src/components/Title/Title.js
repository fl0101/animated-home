import React from 'react';
import './Title.css'

const Title = ({ text, className }) => {
    return (
        <h1 className={className}>{text}</h1>
    )
}

export default Title;
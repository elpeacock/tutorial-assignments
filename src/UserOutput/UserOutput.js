import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='quoteBlock'>
            <p className='content'>{ props.quote } </p>
            <p className='credit'>a random asssortment of words by: { props.author }</p>
        </div>
    )
};

export default userOutput;
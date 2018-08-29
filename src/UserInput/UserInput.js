import React from 'react';

const inputStyle = {
    lineHeight: '.5em',
    height: '2.5em',
    width: '35%',
    padding: '8px',
    margin: '30px 200px',
    border: '2px solid black',
    borderRadius: '3px',
    textAlign: 'center',
    fontSize: '1em',
    cursor: 'pointer'
};

const userInput = (props) => {
    return (
        <div className='userInput'>
            <input 
                type='text' 
                style={ inputStyle }
                onChange={props.changed} 
                value={props.name}>
            </input>
        </div>
    )
};

export default userInput;
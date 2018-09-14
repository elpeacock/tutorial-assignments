import React from 'react';

const charBox = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '3px',
};

const charComp = ( props ) => {
    return (
        <div id={ props.id } 
            style={ charBox }
            onClick={ props.click }>{ props.char }</div>
    )
};

export default charComp;

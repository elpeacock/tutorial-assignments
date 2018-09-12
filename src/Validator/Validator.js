import React from 'react';
import './Validator.css';

const validator = ( props ) => {

    return (
        <div>
            <p>Character count: { props.charCount }</p>
            <p className={ props.validClass }>{ props.message }</p>
        </div>
    )
};

export default validator;
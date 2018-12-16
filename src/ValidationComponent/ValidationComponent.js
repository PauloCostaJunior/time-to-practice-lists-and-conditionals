import React from 'react';

const validationComponent = (props) => {
    let message = null;

    if (props.inputValue.length === 0) {
        message = 'Type something';
    }
    else if (props.inputValue.length >= 5) {
        message = 'The text is long enough';
    } else{
        message = 'The text is too short';
    }

    return (
        <div className="ValidationComponent">
           <p>{message}</p>
           <p>Length: {props.inputValue.length}</p>
        </div>
    )
};

export default validationComponent;
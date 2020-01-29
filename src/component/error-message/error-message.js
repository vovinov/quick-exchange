import React from 'react';

import './error-message.css';

const ErrorMessage = (props) => {
    return (
        <div>
            <span className="exchange__error">{ props.label }</span>
        </div>
    );
}

export default ErrorMessage;


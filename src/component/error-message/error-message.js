import React from 'react';

import './error-message.css';

const ErrorMessage = () => {

    const { label } = this.props
    return (
        <div>
            <span className="exchange__error">{ label }</span>
        </div>
    );
}

export default ErrorMessage;


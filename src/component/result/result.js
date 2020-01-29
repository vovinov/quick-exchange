import React from 'react';

import './result.css';

const Result = ({ value, toValue, onShowResult }) => {       
        
    if (onShowResult) {
        return (
            <div className="exchange__result">
                <p>{`${value} ${toValue}`}</p>
            </div>
        );
    }

    return (
        <div className="exchange__result">

        </div>
    )
    
}

export default Result



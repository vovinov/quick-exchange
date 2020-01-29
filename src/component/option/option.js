import React from 'react';

import './option.css'


const Option = ({ value }) => {
            
    return (
        <option value={ value }>{ value }</option>
    );

}

export default Option



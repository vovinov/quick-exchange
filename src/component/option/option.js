import React from 'react';

import './option.css'


const Option = (props) => {
    
    const { value } = props
    
    return (
    <option value={ value }>{ value }</option>
    );

}

export default Option



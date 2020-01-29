import React from 'react';

import './button.css'

const Button = ({ isButtonDisabled, onButtonClick }) => {    

    const classArray = ['btn', 'btn-primary', 'exchange__button', 'align-self-end', 'col-md-3'];
            
    if (isButtonDisabled) {
        classArray.push('disabled')
    }
    
    const classList = classArray.join(' ');

    return (
        <button 
            onClick={onButtonClick}
            className={classList}>
                Результат
        </button>  
    )
}

export default Button


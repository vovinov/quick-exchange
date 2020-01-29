import React, { Component } from 'react';

import './button.css'

export default class Button extends Component {

    render() {

        const clazz = ['btn', 'btn-primary', 'exchange__button', 'align-self-end', 'col-md-3']
        
        if (this.props.isButtonDisabled) {
            clazz.push('disabled')
        }
        
        const classList = clazz.join(' ')
       
        return (
            <button 
                onClick={this.props.onButtonClick}
                className={classList}>
                    Результат
            </button>
        );
    }
}


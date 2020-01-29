import React, {Component} from 'react';

import './result.css';

export default class Result extends Component {

        
    render() {       
        
        const { value, toValue, onShowResult } = this.props

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
}



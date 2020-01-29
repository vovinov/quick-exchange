import React, { Component } from 'react';
import Header from '../header/';
import Form from '../form';
import Result from '../result';

import './app.css';


import apiService from '../../services/apiService'

export default class App extends Component {  
    
    api = new apiService(); 

    state = {
        amount: 0,
        fromValue: 'SGD',
        toValue: 'SGD',
        result: null,
        isShowResult: false,
        isButtonDisabled: true
    }    
       
    onFirstSelectChange = (e) => {                  
        switch (e.target.value) {
            case 'USD': this.setState({fromValue: 'USD'})
                break
            case 'EUR': this.setState({fromValue: 'EUR'})
                break
            case 'RUB': this.setState({fromValue: 'RUB'})
                break
            case 'SGD': this.setState({fromValue: 'SGD'})
                break
            case 'MYR': this.setState({fromValue: 'MYR'})
                break
            case 'AUD': this.setState({fromValue: 'AUD'})
                break
            case 'JPY': this.setState({fromValue: 'JPY'})
                break
            case 'HKD': this.setState({fromValue: 'HKD'})
                break
            case 'CNH': this.setState({fromValue: 'CNH'})
                break
            case 'CAD': this.setState({fromValue: 'CAD'})
                break
            case 'INR': this.setState({fromValue: 'INR'})
                break
            case 'DKK': this.setState({fromValue: 'DKK'})
                break
            case 'GBP': this.setState({fromValue: 'GBP'})
                break
            case 'NZD': this.setState({fromValue: 'NZD'})
                break
            case 'MXN': this.setState({fromValue: 'MXN'})
                break
            case 'IDR': this.setState({fromValue: 'IDR'})
                break
            case 'TWD': this.setState({fromValue: 'TWD'})
                break
            case 'THB': this.setState({fromValue: 'THB'})
                break
            case 'VND': this.setState({fromValue: 'VND'})
                break
            default:
                this.setState({value: ''})
        }  
        this.setState({
            isShowResult: false,
        })    
    }

    onSecondSelectChange = (e) => {                  
        switch (e.target.value) {
            case 'USD': this.setState({toValue: 'USD'})
                break
            case 'EUR': this.setState({toValue: 'EUR'})
                break
            case 'RUB': this.setState({toValue: 'RUB'})
                break
            case 'SGD': this.setState({toValue: 'SGD'})
                break
            case 'MYR': this.setState({toValue: 'MYR'})
                break
            case 'AUD': this.setState({toValue: 'AUD'})
                break
            case 'JPY': this.setState({toValue: 'JPY'})
                break
            case 'HKD': this.setState({toValue: 'HKD'})
                break
            case 'CNH': this.setState({toValue: 'CNH'})
                break
            case 'CAD': this.setState({toValue: 'CAD'})
                break
            case 'INR': this.setState({toValue: 'INR'})
                break
            case 'DKK': this.setState({toValue: 'DKK'})
                break
            case 'GBP': this.setState({toValue: 'GBP'})
                break
            case 'NZD': this.setState({toValue: 'NZD'})
                break
            case 'MXN': this.setState({toValue: 'MXN'})
                break
            case 'IDR': this.setState({toValue: 'IDR'})
                break
            case 'TWD': this.setState({toValue: 'TWD'})
                break
            case 'THB': this.setState({toValue: 'THB'})
                break
            case 'VND': this.setState({toValue: 'VND'})
                break
            default:
                this.setState({value: ''})
        }  
        this.setState({
            isShowResult: false,
        })    
    }

    onAmountChange = (e) => {        
        this.setState({
            amount: e.target.value,
            isButtonDisabled: false
        })
    }

    onButtonClick = async (e) => {
        e.preventDefault();
        const value = await this.api.getValue(this.state.amount, this.state.fromValue, this.state.toValue);
        const temp = await value * this.state.amount        
        this.setState({
            result: temp.toFixed(3),
            isShowResult: true
        });     
    }     

    render() {         
        
        return (
            <div>
                <div className="container exchange"> 
                    <Header />                                                 
                    
                    <Form 
                        onButtonClick={this.onButtonClick}                         
                        onFirstSelectChange={this.onFirstSelectChange}
                        onSecondSelectChange={this.onSecondSelectChange}
                        onAmountChange={this.onAmountChange} 
                        isButtonDisabled={this.state.isButtonDisabled} />
                    <Result 
                        value={this.state.result}
                        toValue={this.state.toValue} 
                        onShowResult={this.state.isShowResult} />                                
                </div>                
            </div>
        );
    }
}

import React, { Component } from 'react';
import apiService from '../../services/apiService'
import Loader from '../loader';
import Button from '../button';
import Option from '../option';
import ErrorMessage from '../error-message';

import './form.css'


export default class form extends Component {

    state = {
        array: null,
        loading: true,
        error: false
    }

    constructor() {
        super()
        this.getOptionsList()
    }

    api = new apiService(); 

    onError = () => {
        this.setState({
            error: true
        })
    }

    getOptionsList() {
        this.api.getList()
        .then((array) => this.setState({
            array: array,
            loading: false
        }))
        .catch(this.onError)
    }  
   
    render() {

        if (this.state.error) {return <ErrorMessage label={'API ERROR'}/>}
        
        if (this.state.loading) {return <Loader />}


        const optionsList = this.state.array.map((item) => {
            return <Option 
                    key={ item }
                    value={ item } />
        })        

        return (            
            <form>
                <div className="d-flex">
                    <div className="form-group col-md-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="amount">Amount</label>
                            <input  required type="number" className="form-control" id="amount"
                                    onChange={this.props.onAmountChange}>                            
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <div className="d-flex flex-column">
                            <label className="my-1 mr-2" htmlFor="select1">From</label>
                            <select className="custom-select mr-sm-2" 
                                    id="select1"
                                    onChange={this.props.onFirstSelectChange}>                            
                                { optionsList }
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <div className="d-flex flex-column">
                            <label className="my-1 mr-2" htmlFor="select2">To</label>
                            <select className="custom-select mr-sm-2" 
                                    id="select2"
                                    onChange={this.props.onSecondSelectChange}>
                                { optionsList }  
                            </select>
                        </div>
                    </div>                
                    <Button 
                        onButtonClick={this.props.onButtonClick}
                        isButtonDisabled={this.props.isButtonDisabled}/>                   
                </div>                       
            </form> 
        );
    }
}


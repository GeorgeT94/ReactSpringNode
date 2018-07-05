import React, { Component } from 'react';
import $ from 'jquery'; 


var createReactClass = require('create-react-class');
var AddForm = createReactClass({
    getInitialState: function() {
        return {
            formErrors: {firstName: '', surname: '', accountNumber:''},
            firstNameValid : false,
            surnameValid : false,
            accountNumberValid : false,
            formValid: false
        }
    },

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    },

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let surnameValid = this.state.surnameValid;
        let accountNumberValid = this.state.accountNumberValid;

        switch(fieldName) {
            case 'firstName':
                firstNameValid = value.length >= 1;
                fieldValidationErrors.firstName = firstNameValid ? '' : ' is empty';
                break;
            case 'surname':
                surnameValid = value.length >= 1
                fieldValidationErrors.surname = surnameValid ? '': ' is empty';
                break;
            case 'accountNumber':
                accountNumberValid = !isNaN(value);
                fieldValidationErrors.accountNumber = accountNumberValid ? '': ' is not an integer';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            surnameValid: surnameValid,
            accountNumberValid: accountNumberValid
        }, this.validateForm);
    },

    validateForm() {
        this.setState({formValid: this.state.firstNameValid && this.state.surnameValid && this.state.accountNumberValid});
    },
    // errorClass(error) {
    //     return(error.length === 0 ? '' : 'has-error');
    // },

    nameChange: function(e) {
        this.handleUserInput(e);
        console.log("state of name changed");
        this.setState({
            firstName: e.target.value
        })
    },
    surnameChange: function(e) {
        this.handleUserInput(e);
        this.setState({
            surname: e.target.value
        })
    },
    accountNumberChange: function(e) {
        this.handleUserInput(e);
        this.setState({
            accountNumber: parseInt(e.target.value)
        })
    },


    submit: function (e){
        var self

        e.preventDefault();
        e.persist();
        self = this;

        console.log(this.state);

        var data = {
            "firstName": this.state.firstName,
           "surname": this.state.surname,
            "accountNumber": this.state.accountNumber
        }
        var jsonData = JSON.stringify(data);
        console.log(jsonData);
        // Submit form via jQuery/AJAX

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/demo/add",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "7583589c-5a8a-9fa1-a6c1-cce43c23293d"
            },
            "processData": false,
            "data": jsonData
        }

        $.ajax(settings)
            .done(function(data) {
                console.log(self.state);
                e.target.reset();
                console.log(self.state);
            })
            .fail(function(jqXhr) {
                alert(this.url);
                console.log("data : " + data );
                console.log('failed to register');
            });

    },

    render: function() {

        return (

            <div id="main" className="container">
            <form onSubmit={this.submit}>
            <div className={`form-group`}>
            <label for="exampleInputEmail1">First Name</label>
        <input type="text" name="firstName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.nameChange} val={this.state.firstName} />
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Surname</label>
            <input type="text" name="surname" className="form-control" id="exampleInputPassword1" placeholder="Enter Surname" onChange={this.surnameChange}  val={this.state.surname} />
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Account Number</label>
        <input type="text" name="accountNumber" className="form-control" id="exampleInputPassword1" placeholder="Enter Account Number" onChange={this.accountNumberChange} val={this.state.accountNumber} />
            </div>
            <button type="submit" className="btn btn-primary"   disabled={!this.state.formValid} >Add Account</button>
            </form>
            </div>
        );
    }
});

export default AddForm;
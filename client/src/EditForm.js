import React, { Component } from 'react';
import $ from 'jquery'; 

var createReactClass = require('create-react-class');
var EditForm = createReactClass({

    getInitialState: function() {
        return {
            firstName: this.props.employee.firstName,
            surname: this.props.employee.surname,
            accountNumber: this.props.employee.accountNumber
        }
    },

    nameChange: function(e) {
        this.setState({
            firstName: e.target.value
        })
    },
    surnameChange: function(e) {
        this.setState({
            surname: e.target.value
        })
    },
    accountNumberChange: function(e) {
        this.setState({
            accountNumber: parseInt(e.target.value)
        })
    },


    submit: function (e){
        var self

        e.preventDefault();
        e.persist();
        self = this


        var data = {
            "firstName": this.state.firstName,
            "surname": this.state.surname,
            "accountNumber": this.state.accountNumber
        }

        if(typeof this.props.employee.id !== "undefined") data.id = this.props.employee.id;

        var jsonData = JSON.stringify(data);

        // Submit form via jQuery/AJAX

        var settings = {
            "async": true,
            "crossDomain": true,
            "method": "POST",
            "url": "http://localhost:8080/demo/add",
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
            })
            .fail(function(jqXhr) {
                console.log("data : " + data );
                console.log('failed to register');
            });

    },

    render: function() {
        return (

            <div className="container">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.nameChange} val={this.state.firstName} defaultValue={this.props.employee.firstName}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Surname</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Surname" onChange={this.surnameChange} val={this.state.surname} defaultValue={this.props.employee.surname}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Account Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Account Number"  onChange={this.accountNumberChange} val={this.state.accountNumber} defaultValue={this.props.employee.accountNumber}/>
                    </div>
                    <button type="submit" className="btn btn-primary"  reRenderParent={this.props.onClick} >Edit Account</button>
                </form>
            </div>
        );
    }
});

export default EditForm;
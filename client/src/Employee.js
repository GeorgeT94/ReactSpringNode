import React, { Component } from 'react';
import $ from 'jquery';
import toastr from "react-toastr";
import EditModal from './EditModal'; 

var createReactClass = require('create-react-class');
var Employee = createReactClass({

    getInitialState: function() {
        return {display: true };
    },

    handleDelete() {
        this.setState({ delete: true });
        var self = this;
        $.ajax({
            "url": "http://localhost:8080/demo/delete",
            type: 'DELETE',
            data: JSON.stringify(self.props.employee),
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "c7bb89b4-2b6c-3cdb-cd22-86fdba25c43c"
            },
            "processData": false,
            success: function(result) {

            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });


    },
    reRender: function(firstName , surname, accountNumber){
        this.props.employee.surname = surname;
        this.props.employee.firstName = firstName;
        this.props.employee.accountNumber = accountNumber;
        this.forceUpdate();
    },
    render: function() {
        if(!this.state.delete){
            return (
                    <tr >
                        <td>{this.props.employee.firstName}</td>
                        <td>{this.props.employee.surname}</td>
                        <td>{this.props.employee.accountNumber}</td>
                        <td></td>
                        <td><EditModal employee={this.props.employee} onClick={this.reRender}/></td>
                        <td><button className="btn btn-info btn-danger" onClick={this.handleDelete}>Delete</button></td>
                    </tr>)

        }else{
            return null;
        }

    }

});

export default Employee;
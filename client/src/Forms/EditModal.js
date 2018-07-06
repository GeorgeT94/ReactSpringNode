import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

import EmployeeTable from '../Table/EmployeeTable';
import EditForm from './EditForm';

var createReactClass = require('create-react-class');
var EditModal = createReactClass({
    getInitialState: function() {
        return {
            firstName: this.props.employee.firstName,
            surname: this.props.employee.surname,
            accountNumber: this.props.employee.accountNumber
        }
    },

    renderTable: function(){
        var self = this;
        $.ajax({
            url: "http://localhost:8080/demo/all"
        }).then(function (data) {
            self.setState({employees: data});
            ReactDOM.render(
                <EmployeeTable employees={self.state.employees}/>, document.getElementById("main")
            );

        });

    },

    componentWillMount: function() {
        const id = "modal-" + this.props.employee.id;
        this.setState({id: id, dataTarget : "#" + id});

    },
    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={this.state.dataTarget} onClick={this.updateProps}>
                    Edit
                </button>

                <div className="modal fade" id={this.state.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="false">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <EditForm employee={this.props.employee} onClick={this.props.onClick}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={this.renderTable} >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default EditModal;
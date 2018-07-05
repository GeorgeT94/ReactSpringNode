import React, { Component } from 'react';
import Employee from './Employee';

var createReactClass = require('create-react-class');
var EmployeeTable = createReactClass({


    render: function() {
        var rows = [];
        this.props.employees.forEach(function(employee) {
            rows.push(<Employee employee={employee} />);
        });
        return (

            <div className="container">
            <table className="table table-striped">
            <thead>
            <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Account Number</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
            </div>);
    },

});

export default  EmployeeTable;
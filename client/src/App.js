import React, { Component } from 'react';
import $ from 'jquery'; 
import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar.js';
import EmployeeTable from './EmployeeTable';

var createReactClass = require('create-react-class');
var App = createReactClass({
    displayName: "App",


    loadEmployeesFromServer: function loadEmployeesFromServer() {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/demo/all"
        }).then(function (data) {
            self.setState({ employees: data });
        });
    },

    getInitialState: function getInitialState() {
        return { employees: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadEmployeesFromServer();
    },
    componentWillMount: function componentWillMount() {
        this.loadEmployeesFromServer();
    },

    statics: {
        update: function update() {
            this.loadEmployeesFromServer();
            this.render();
        }
    },
    render: function render() {
        return React.createElement(EmployeeTable, { employees: this.state.employees, handler: this.handler });
    }
});

export default App;

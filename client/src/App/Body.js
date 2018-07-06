import React, { Component } from 'react';

import NavBar from '../Header/NavBar';
import AddForm from '../Forms/AddForm';

var createReactClass = require('create-react-class');
var Body = createReactClass({

    render:  function(){
        return (
            <div id="body">
                <NavBar />
                <AddForm />
            </div>);
    }
});

export default Body;
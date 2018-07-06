import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App';
import AddForm from '../Forms/AddForm';

class NavBar extends Component{
      handleAdd() {
        ReactDOM.render(
            <AddForm />, document.getElementById("main")
        );
    }

    handleClick(e){
        ReactDOM.render(
            <App />, document.getElementById("main")
        );
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">AccountApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">DashBoard <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#" onClick={this.handleAdd}>Add Account</a>
                        <a className="nav-item nav-link" href="#"  onClick={this.handleClick}>Get Accounts</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

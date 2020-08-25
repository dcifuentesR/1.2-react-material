import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

import { Login } from './components/Login.js';
import TodoApp from './components/TodoApp.js';

import { BrowserRouter as Router, Link, Route, Redirect, useLocation, useHistory, Switch } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };

        localStorage.setItem("dcifuentes", "testPassword");
        localStorage.setItem("lrodriguez", "password");

        this.handleLogin = this.handleLogin.bind(this);
    }

    

    handleLogin(username, password) {
        
        var response;
        if (localStorage.getItem(username) == null || localStorage.getItem(username) != password) {
            response = <h1>NOT ALLOWED</h1>;

        } else {
            this.setState({ isLoggedIn: true });
            response = <h1>ALLOWED</h1>;
        }


        return response;

    }

    render() {

        const PrivateRoute = ({ children, ...rest }) => {
    
            return (
                <Route
                
                    {...rest}
                    render={()=>{return this.state.isLoggedIn ? children : <Redirect to="/"/>}}
    
                />
            );
        }
        const LoginView = () => (
            <Login handleLogin={this.handleLogin} />
        );

        const TodoAppView = () => (
            <TodoApp />
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <Switch>
                    <Route exact path="/">
                    {LoginView}
                        </Route>
                        <PrivateRoute path="/todo" >
                            <TodoAppView/>
                        </PrivateRoute>
                        
                    </Switch>
                </div>
            </Router>

        );
    }



}

export default App;

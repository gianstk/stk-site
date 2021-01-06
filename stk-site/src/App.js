import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from 'react-router-dom';

import {
  Button,
  Sidebar,
  Menu,
  Segment,
  Icon,
  Header,
  Image,
} from 'semantic-ui-react';


import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About';
import LoginForm from './Login/Login';

import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {

  }


  render() {
    return (

      <Router>

        {/* <NavBar/> */}


        <nav>
          <ui>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ui>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LoginForm} />
        </Switch>

      </Router>
    );
  }

}


export default App;

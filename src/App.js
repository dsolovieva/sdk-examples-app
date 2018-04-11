import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Example from './components/Example/Example';
import Home from './components/Home/Home';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CarCode SDK Examples</h1>
        </header>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;

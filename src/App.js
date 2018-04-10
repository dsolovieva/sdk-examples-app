import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Example from './components/Example/Example';
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
        <Container fluid>
          <Router>
          <Row>
            <Col md='3' xl='2'>
            <Nav vertical>
              <Link className="nav-link" to="/getting-started">Getting started</Link>
              <Link className="nav-link" to="/sdk-buttons">SDK Buttons</Link>
            </Nav>
            </Col>
            <Col md="9" xl="8">
              <Route path="/:example" component={Example} />
            </Col>
          </Row>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import Example from '../Example/Example';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';

class Home extends Component {

  render() {  
    return (
      <Container fluid>
          <Row>
            <Col md='3' xl='2'>
            <Nav vertical>
              <Link className="nav-link" to="/getting-started">Getting started</Link>
              <Link className="nav-link" to="/sdk-buttons">SDK Buttons</Link>
            </Nav>
            </Col>
            <Col md="9" xl="8">
              {/* <Route exact path="/" render={() => (
                  <Redirect to="/getting-started"/>
              )}/> */}
              <Route path="/:example" component={Example} />
            </Col>
          </Row>
          </Container>
    );
  }
}

export default Home;

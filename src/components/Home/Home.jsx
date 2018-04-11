import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import Example from '../Example/Example';
import { Container, Row, Col, Nav } from 'reactstrap';

class Home extends Component {

  render() {  
    return (
      <Container fluid className="mt-3">
          <Row>
            <Col sm="12" md='2'>
              <h1 className="App-title">CarCode SDK Examples</h1>
              <Nav vertical className="App-nav">
                <Link className="nav-link pl-0" to="/getting-started">Getting started</Link>
                <Link className="nav-link pl-0" to="/sdk-buttons">SDK Buttons</Link>
                <Link className="nav-link pl-0" to="/spa-sdk-buttons">SPA with SDK Buttons</Link>
                <Link className="nav-link pl-0" to="/sms-form">SMS form configuration</Link>
                <Link className="nav-link pl-0" to="/theme-config">Theme configuration</Link>
                <Link className="nav-link pl-0" to="/sdk-api">Usage of public API</Link>
              </Nav>
              <hr />
              <a href="">Full sources</a>
            </Col>
            <Col sm="12" md="10">
              <Route exact path="/" render={() => (
                  <Redirect to="/getting-started"/>
              )}/>
              <Route path="/:example" component={Example} />
            </Col>
          </Row>
          </Container>
    );
  }
}

export default Home;

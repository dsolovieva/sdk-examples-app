import React, { Component } from 'react';
import ExampleResult from '../ExampleResult/ExampleResult';
import ExampleSource from '../ExampleSource/ExampleSource';
import { Button } from 'reactstrap';
import { Code } from 'react-feather';
import './Example.css';

class Example extends Component {

  render() {
    return (
      <div className="Example d-lg-flex">
        <ExampleResult src={`${process.env.PUBLIC_URL}/cc-sdk-examples/${this.props.match.params.example}/index.html`} />
        <ExampleSource url={`${process.env.PUBLIC_URL}/examples/${this.props.match.params.example}.example`} />
      </div>
    );
  }
}

export default Example;

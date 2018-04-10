import React, { Component, Fragment } from 'react';
import ExampleResult from '../ExampleResult/ExampleResult';
import ExampleSource from '../ExampleSource/ExampleSource';

class Example extends Component {
  render() {
    return (
      <Fragment>
        <ExampleResult src={`%PUBLIC_URL%/examples/${this.props.match.params.example || 'getting-started'}/index.html`} />
        <ExampleSource url={`%PUBLIC_URL%/examples/${this.props.match.params.example || 'getting-started'}/code.html`} />
      </Fragment>
    );
  }
}

export default Example;

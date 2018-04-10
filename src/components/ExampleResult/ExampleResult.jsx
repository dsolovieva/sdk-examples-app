import React, { Component } from 'react';
import './ExampleResult.css';

class ExampleResult extends Component {
  render() {  
    return (
        <iframe className="ExampleResult" frameBorder="false" src={this.props.src}>
        </iframe>
    );
  }
}

export default ExampleResult;

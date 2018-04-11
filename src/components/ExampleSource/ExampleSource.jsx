import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './ExampleSource.css';

class ExampleSource extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
		this.readTextFile(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
		this.readTextFile(nextProps.url);
  }

  readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  render() {  
    return (
        <SyntaxHighlighter className="ExampleSource m-0"  style={docco}>{this.state.text}</SyntaxHighlighter>
    );
  }
}

export default ExampleSource;

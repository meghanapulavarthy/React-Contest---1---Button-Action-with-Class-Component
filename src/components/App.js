import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTrue: false
    };
  }

  handleClick = () => {
    this.setState({ isTrue: true });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          button
        </button>
        {this.state.isTrue ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;

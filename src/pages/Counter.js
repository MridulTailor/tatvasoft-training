import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button onClick={this.clickHandler}>Increase</button>
      </div>
    );
  }
}

export default Counter;

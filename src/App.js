import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    console.log("Inside constructor");
  }

  incrementCounter = function () {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  };

  render() {
    console.log("Inside Render method");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>increase</button>
      </>
    );
  }

  componentDidMount() {
    console.log("Inside componentDidMount method");
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate method");
  }

  componentWillUnmount() {
    console.log("Inside componentWillUnmount method");
  }
}

export default App;

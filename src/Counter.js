import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter = function () {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1 style={{fontSize: '5rem'}}>{this.state.counter}</h1>
      </>
    );
  }
    
    componentDidMount() {
        setInterval( () => {
            this.setState( ( state ) => {
                return {
                    counter: state.counter + 1
                }
            })
        }, 1000);
    }

  componentDidUpdate(props, state) {
    if (state.counter === 59) {
      this.setState({
        counter: 0,
      });
    }
  }
}

export default Counter;

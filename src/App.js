import React from "react";
import Counter from "./Counter.js";
import Dummy from "./Dummy.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCounterComponent: true,
    };
  }

  render() {
    if (this.state.showCounterComponent) {
      return <Counter />;
    } else {
      return <Dummy />;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showCounterComponent: false,
      });
    }, 2000);
  }
}

export default App;

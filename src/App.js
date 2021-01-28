import React from "react";
import User from "./User.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 101,
    };
  }

  render() {
    return <User userId={this.state.userId} />;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userId: 102,
      });
    }, 3000);
  }
}

export default App;

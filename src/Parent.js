import React from "react";
import App from "./App.js";
import App2 from "./App2.js";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      isRenderingFirstApp: true,
    };
    this.setStart = this.setStart.bind(this);
  }

  setStart = function () {
    this.setState(() => {
      return {
        isRenderingFirstApp: false,
      };
    });
  };

  render() {
    if (this.state.isRenderingFirstApp) {
      return <App />;
    } else {
      return <App2 />;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setStart(false);
    }, 3000);
  }
}

export default Parent;

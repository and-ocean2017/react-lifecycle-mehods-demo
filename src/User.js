import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();

    this.state = {
      name: "No user Selected",
      experience: 0,
      gender: "Not Aplicable",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <div>{this.state.gender}</div>
        <div>{this.state.experience}</div>
      </>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "First user",
        gender: "Male",
        experience: 10,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    // Checking if props changes then sending request to user
    // Simulate request with
    if (this.props.userId !== prevProps.userId) {
      setTimeout(() => {
        this.setState({
          name: "Second user",
          gender: "Female",
          experience: 5,
        });
      }, 1000);
    }
  }
}

export default User;

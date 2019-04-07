import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password:"",
    };
  }

  handleInput = event => {
    this.setState({ 
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUserState(this.state)
  }

  render() {
    return (
      <div style={{"margin": "50px auto"}} >

        <h1 > Login: </h1>
        <form onSubmit = {this.handleSubmit}>
        <label style={{ "display": "block", "marginBottom": "15px" }}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange = {this.handleInput}
          />
        </label>

        <label style={{ "display": "block", "marginBottom": "15px" }}>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange = {this.handleInput}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Login;

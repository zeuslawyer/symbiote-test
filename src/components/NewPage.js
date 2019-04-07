import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPage(this.state);
    
    //clear state so form is blank again
    this.setState({
      title: "",
      body: ""
    })
  };

  renderNewPageForm() {
    return (
      <div style={{ margin: "50px auto" }}>
        <h1>Add New Page: </h1>
        <form onSubmit={this.handleSubmit}>
          <label style={{ display: "block", marginBottom: "15px" }}>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput}
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Body:
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleInput}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  render() {
    if (this.props.auth) {
      return this.renderNewPageForm();
    }

    //if not loggedin
    return (
      <div>
        <h3>
          You must <Link to="/">log in</Link> to add content
        </h3>
        <Login updateUserState={this.props.updateUserState} /> />
      </div>
    );
  }
}

export default NewPage;

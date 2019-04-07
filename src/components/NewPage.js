import React, { Component } from "react";

export class NewPage extends Component {
  render() {
    return this.renderForm();
  }

  renderForm() {
    if (this.props.auth) {
      return (
        <div>
          <h1>This is the new form</h1>
          <p>what do you want to say...?</p>
        </div>
      );
    }
    //if not loggedin
    return <h1>You must log in to add content</h1>;
  }
}

export default NewPage;
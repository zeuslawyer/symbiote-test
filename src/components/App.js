import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Page from "./Page";
import NewPage from "./NewPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [
        {
          name: "Hard Coded Page",
          path: "hardcodedpage",
          content: {
            title: `This is a Hard Coded Page`,
            body: "Welcome to the Hard Coded Page"
          }
        }
      ],
      user: {
        name: "",
        pwd: "",
        loggedIn: false
      },
      currentPageIndex: 0
    };
  }

  // pass this prop to <Page />
  updateUserState = ({ name, password }) => {
    let user = {
      name,
      password,
      loggedIn: !!name
    };

    this.setState({ user });
  };

  addPage = ({ title, body }) => {
    let newPage = {
      name: title,
      path: title.split(" ").join(""),
      content: {
        title,
        body
      }
    };
    let pages = this.state.pages;
    this.setState({
      pages: [...pages, newPage]
    });
  };

  renderPagesInNav() {
    return this.state.pages.map(page => {
      return (
        <li key={page.content.title}>
          <Link to={`/pages/${page.path}`}>{page.content.title}</Link>
        </li>
      );
    });
  }

  handleLogout = event => {
    event.preventDefault();
    this.updateUserState("", "");
  };

  render() {
    let loggedIn = this.state.user.loggedIn;
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {this.renderPagesInNav()}
            <li>
              <Link to="/newpage"> Add A New Page</Link>
            </li>
          </ul>

          <hr />

          {/* ROUTES FOR STATIC PAGES */}
          {/* HOME PAGE */}
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                auth={loggedIn}
                updateUserState={this.updateUserState}
              />
            )}
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            render={props => (
              <About
                {...props}
                auth={loggedIn}
                updateUserState={this.updateUserState}
              />
            )}
          />

          {/* NEW PAGE CREATION */}
          <Route
            path="/newpage"
            render={props => (
              <NewPage {...props} auth={loggedIn} addPage={this.addPage} updateUserState={this.updateUserState}/>
            )}
          />

          {/* ROUTES FOR USER PAGES */}
          {/* TODO: use the context system to pass the updateUserState() function? */}
          <Route
            exact
            path="/pages/:id"
            render={props => (
              <Page
                {...props}
                auth={loggedIn}
                pages={this.state.pages}
                updateUserState={this.updateUserState}
              />
            )}
          />
          <div>
            {loggedIn && (
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

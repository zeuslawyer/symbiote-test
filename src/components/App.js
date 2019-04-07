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
      }
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

  renderUserPagesInNav() {
    return this.state.pages.map(page => {
      return (
        <li key={page.content.title} className="nav-item">
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
      <div className="container-fluid">
        <Router>
          <div className="row">
            <div className="vertical-nav col-3">
              <ul>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                {/* render <li> elements for each page in this.state.pages  */}
                {this.renderUserPagesInNav()}
                <li className="nav-item">
                  <Link to="/newpage"> Add A New Page</Link>
                </li>

                {/* LOGOUT */}
                <li>
                  <div className="logout">
                    {loggedIn && (
                      <Link to="/" onClick={this.handleLogout}>
                        Logout
                      </Link>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            <hr />

            <div className="col-9">
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
                  <NewPage
                    {...props}
                    auth={loggedIn}
                    addPage={this.addPage}
                    updateUserState={this.updateUserState}
                  />
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
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

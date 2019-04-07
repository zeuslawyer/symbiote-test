import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Page from "./Page";
import NewPage from './NewPage'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [
        {
          name: "Boo Page",
          path: "boo",
          content: {
            title: `This is the Boo Page`,
            body: "Welcome to the BOO page"
          }
        },
        {
          name: "Test Page One",
          path: "TestPageOne",
          content: {
            title: `This is the Test Page 1 Page`,
            body: "Welcome to the Test Page 1 page"
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

  renderPagesInNav(){
    return this.state.pages.map((page)=>{
      return (
        <li key={page.content.title}>
          <Link to={`/pages/${page.path}`}>{page.content.title}</Link>
      </li>
      )
    })
  }


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
            { this.renderPagesInNav()}
            <li>
              <Link to="/newpage">New Page</Link>
            </li>
          </ul>

          <hr />

        {/* ROUTES FOR STATIC PAGES */}
          <Route exact path="/" render={(props)=><Home {...props} auth={loggedIn} updateUserState={this.updateUserState} />} />
          <Route path="/about" render={(props)=><About {...props} auth={loggedIn} updateUserState={this.updateUserState}/>}  />
          <Route path="/newpage" render={(props)=><NewPage {...props} auth={loggedIn}  />} />
          
          {/* ROUTES FOR USER PAGES */}
          <Route
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
      </Router>
    );
  }
}

export default App;

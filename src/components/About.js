import React from "react";
import Login from './Login'

function About({ match, auth, updateUserState }) {
  console.log(match);
  return (
    <div>
      <div>
        <h2>ABOUT PAGE</h2>
        <p>This is the about page.  No need to Log in to see this.</p>
      </div>
      <div>
          {!auth && <Login updateUserState={updateUserState}  />}
      </div>
    </div>
  );
}

export default About;

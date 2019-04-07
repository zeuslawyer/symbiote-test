import React from "react";
import Login from './Login'

function About({ match, auth, updateUserState }) {
  console.log(match);
  return (
    <div>
      <div>
        <h2>ABOUT PAGE</h2>
        <p>some content...</p>
      </div>
      <div>
          {!auth && <Login updateUserState={updateUserState}  />}
      </div>
    </div>
  );
}

export default About;

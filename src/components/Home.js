import React from "react";
import Login from "./Login";

function Home({ auth, updateUserState }) {
  return (
    <div>
      <div>
        <h2>HOME PAGE</h2>
        <p>This is the home page...No need to Log in to see this.</p>
      </div>

      <div>{!auth && <Login updateUserState={updateUserState} />}</div>
    </div>
  );
}

export default Home;

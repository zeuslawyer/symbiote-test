import React from "react";
import Login from './Login'



function Home({ auth, updateUserState }) {
  return (
    <div>
      <div>
        <h2>HOME PAGE</h2>
        <p>some content...</p>
      </div>

      <div>{!auth && <Login updateUserState={updateUserState} />}</div>
    </div>
  );
}

export default Home;

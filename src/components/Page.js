import React from "react";

import Login from "./Login";

function Page({ match, pages, auth, updateUserState }) {
  //   console.log(match.params.id);

  //filter to find page content
  let matchedPage = pages.filter(page => {
    // console.log(page.path, match.params.id)
    return page.path === match.params.id;
  });

  let activePage = matchedPage[0];
  if (auth) {
    return (
      <div>
        <h2>{activePage.content.title}</h2>
        <p>{activePage.content.body}</p>
      </div>
    );
  }
  //else show login form if user not logged in
  return (
    <div>
      <h3>LOG IN TO SEE THIS PAGE</h3>  
      <Login updateUserState={updateUserState} />
    </div>
  );
}

export default Page;

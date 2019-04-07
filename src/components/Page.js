import React from "react";

import Login from './Login'

function Page({match, pages, auth, updateUserState}) {
  console.log(match.params.id);
  let matchedPage = pages.filter((page)=>{
    console.log(page.path, match.params.id)  
    return page.path===(match.params.id)
  }) 
  
  let activePage = matchedPage[0]
  console.log(activePage)

  return (
    <div>
      <h2>{ activePage.content.title }</h2>
      <p>{ activePage.content.body }</p>

      {/* show login form if user not logged in */}
      {!auth && <Login updateUserState={updateUserState} />}
    </div>
  )

}

export default Page;

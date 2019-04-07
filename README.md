#NOTES
<hr>
### General summary
The app uses `react-dom-router` for routing and navigation. 

The App has the following 'static' page components:
1) Home.js
2) About.js
3) NewPage.js

The App has the following pages that are components that are dynamically rendered with data taken from App level state:
1) Page.js  (this page takes in data from this.state.pages which is an array of page objects, and has one hard coded page for demo purposes)

Dynamic page components <b>need login </b> to see the title and body of those pages.

### App level state
```
//App.js
{
    pages: [ array of objects containing page related data],
    user: { object that has username, pwd, and loggedin boolean }

}
```

### App handlers passed as props
1) `updateUserState`: is passed as prop to the `<Login />` component in all `<Page />` components. Upon login the name and password properties are updated in the App-level `state.user` object.

2) `addPage`: handles the new page creation in `<NewPage />. Takes an object with the title and body properties and constructs an object that is added to the App-level `this.state.pages` array. This handler is passed to the `<Route />` that renders `<NewPage />`


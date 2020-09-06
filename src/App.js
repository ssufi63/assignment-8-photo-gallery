import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  
  
  return (

    <div>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <Router>
        <Switch>
          <Route path = "/home">
          <Main/>
          </Route>
          <Route exact path = "/">
          <Main/>
          </Route>
          <Route path="/post/:postId">
            <PostDetails/>
          </Route>
        </Switch>
      </Router>
     



    </div>
  );
}

export default App;

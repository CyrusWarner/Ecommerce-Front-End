import React from 'react';  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/navigationBar';
function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

      <Switch>
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}}></Route> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;

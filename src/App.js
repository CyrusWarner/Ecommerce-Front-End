import React from 'react';  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm/loginForm';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SignUpForm from './Components/SignUpForm/signUpForm';
function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

      <Switch>
         {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} />  */}
        <Route path="/Signup" exact render={props => <SignUpForm {...props} />} />
        <Route path="/Login" exact render={props => <LoginForm {...props} />} />
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;

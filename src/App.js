import React, {useState, useEffect} from 'react';  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm/loginForm';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SignUpForm from './Components/SignUpForm/signUpForm';
import Home from './Components/Home/home';
import jwtDecode from 'jwt-decode';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();

  useEffect( () =>{
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      setCurrentUser({user})
    }
    catch {}
  }, [])

  const setUserToken = (token) => {
    localStorage.setItem('token', token);
    console.log(currentUser);
  }

  return (
    <Router>
      <div>
        <NavigationBar />

      <Switch>
         <Route path="/" exact render={props => <Home {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> 
        <Route path="/Signup"  render={props => <SignUpForm {...props} />} />
        <Route path="/Login"  render={props => <LoginForm {...props} setUserToken={setUserToken} />} />
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, {useState, useEffect} from 'react';  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm/loginForm';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SignUpForm from './Components/SignUpForm/signUpForm';
import ShowAllProducts from './Components/ShowAllProducts/showAllProducts';
import SellProductForm from './Components/SellProductForm/sellProductForm';
import Home from './Components/Home/home';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [token, setToken] = useState();
  const [productReviews, setProductReviews] = useState([]);

  useEffect( () =>{
    const jwt = localStorage.getItem('token');
    setToken(jwt)
    getAllProducts();
    try{
      const user = jwtDecode(jwt);
      setCurrentUser({user})
    }
    catch {}
  }, [])

  const setUserToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token)
  }

  const getAllProducts = async () => {
    let response = await axios.get("https://localhost:44394/api/product")
    if(response.data.length !== 0){
      setAllProducts(response.data)
    }
    
  }

  const getProductReviews = async (productId) => {
    let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`)
    if(response.data.length !== 0){
      setProductReviews(response.data)
      console.log(response)
    }

  }

  return (
    
    <Router>
      <div>
        <NavigationBar />
      <Switch>
        <Route path="/" exact render={props => <Home {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> 
        <Route path="/Signup"  render={props => <SignUpForm {...props} />} />
        <Route path="/Login"  render={props => <LoginForm {...props} setUserToken={setUserToken}  />} />
        <Route path="/products"  render={props => <ShowAllProducts {...props} allProducts={allProducts}/>} /> 
        <Route path="/user/createproduct" render={props => <SellProductForm {...props} currentUser={currentUser} currentToken={token} getAllProducts={getAllProducts}/>} /> 
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;

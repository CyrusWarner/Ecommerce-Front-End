import React, {useState, useEffect} from 'react';  
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginForm from './Components/LoginForm/loginForm';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SignUpForm from './Components/SignUpForm/signUpForm';
import ShowAllProducts from './Components/ShowAllProducts/showAllProducts';
import SellProductForm from './Components/SellProductForm/sellProductForm';
import ShowProduct from './Components/ShowProduct/showProduct';
import Home from './Components/Home/home';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
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
    window.location = ("/")
  }

  const getAllProducts = async () => {
    let response = await axios.get("https://localhost:44394/api/product")
    if(response.data.length !== 0){
      setAllProducts(response.data)
    }
    
  }
  const createCurrentProduct = (product) => {
    console.log(product)
    setCurrentProduct(product)
  }

  const getProductReviews = async (productId) => {
    let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`)
    if(response.data.length !== 0){
      setProductReviews(response.data)
      
    }

  }

  return (
    <Router>
      <div>
        <NavigationBar currentUser={currentUser} />
      <Switch>
        <Route path="/" exact render={props => <Home {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> 
        <Route path="/Signup"  render={props => <SignUpForm {...props} />} />
        <Route path="/Login"  render={props => <LoginForm {...props} setUserToken={setUserToken}  />} />
        <Route path="/products"  render={props => <ShowAllProducts {...props} createCurrentProduct={createCurrentProduct} allProducts={allProducts} getProductReviews={getProductReviews} />} /> 
        <Route path="/user/createproduct" render={props => {
          if(!currentUser){
            return <Redirect to="/login" />;
          } else {
            return  <SellProductForm {...props} currentUser={currentUser} currentToken={token} getAllProducts={getAllProducts}/>} 
          }
          }
        />
        <Route path="/viewproduct" render={props => <ShowProduct {...props} currentToken={token} currentUser={currentUser} currentProduct={currentProduct} productReviews={productReviews}/>} />
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;

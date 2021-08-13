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
import ShoppingCart from './Components/ShoppingCart/shoppingCart';
import axios from 'axios';
import Footer from './Components/Footer/footer';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [token, setToken] = useState();
  const [productReviews, setProductReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(1);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect( () =>{
    const jwt = localStorage.getItem('token');
    setToken(jwt)
    getAllProducts();
    getCategories();
    
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
  const createCurrentProduct = async (product) => {
    let response = await axios.get(`https://localhost:44394/api/product/${product.productId}`)
    let currentProduct = response.data
    setCurrentProduct(currentProduct)
  }

  const getProductReviews = async (productId) => {
    let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`)
    setProductReviews(response.data)
  }

  const getCategories = async () => {
    let response = await axios.get("https://localhost:44394/api/category/")
    if(response.data.length !== 0){
      setCategories(response.data)
    }
  }

  const userCurrentCategoryId = (categoryId) => {
    let intCategoryId = Number(`${categoryId}`)
    categoryId = intCategoryId
    setCurrentCategoryId(categoryId)
  }

  const setFilteredCategories = (categoryId) => {
    setCurrentCategoryId(categoryId)
  }

  const setSearchFilteredProducts = (products) => {
    setAllProducts(products)
  }

  const getUsersCart = async () => {
    let response = await axios.get("https://localhost:44394/api/shoppingcart", {headers: {Authorization: 'Bearer ' + token}})
    setShoppingCart(response.data)
  }


  return (
    <Router>
      <div>
        <NavigationBar currentUser={currentUser} />
      <Switch>
        <Route path="/" exact render={props => <Home {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> 
        <Route path="/Signup"  render={props => <SignUpForm {...props} />} />
        <Route path="/Login"  render={props => <LoginForm {...props} setUserToken={setUserToken} />} />
        <Route path="/user/shoppingcart"  render={props => <ShoppingCart {...props} shoppingCart={shoppingCart} allProducts={allProducts}/>} />
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
        <Route path="/Login"  render={props => <LoginForm {...props} setUserToken={setUserToken}  />} />
        <Route path="/products"  render={props => <ShowAllProducts {...props} createCurrentProduct={createCurrentProduct} allProducts={allProducts} getProductReviews={getProductReviews} categories={categories} setSearchFilteredProducts={setSearchFilteredProducts} getAllProducts={getAllProducts}/>} setFilteredCategories={setFilteredCategories} /> 
        <Route path="/user/createproduct" render={props => {
          if(!currentUser){
            return <Redirect to="/login" />;
          } else {
            return  <SellProductForm {...props} currentUser={currentUser} currentToken={token} getAllProducts={getAllProducts} categories={categories} userCurrentCategoryId={userCurrentCategoryId} currentCategoryId={currentCategoryId} />} 
          }
          }
        />
        <Route path="/viewproduct" render={props => <ShowProduct {...props} currentToken={token} currentUser={currentUser} currentProduct={currentProduct} productReviews={productReviews} getProductReviews={getProductReviews}/>} />
        {/* <Route path="/" exact render={props => <COMPONENTNAMEHERE {...props} PASSINFOHERE={"SOMETHING HERE"}/>} /> */}
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

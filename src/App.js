import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "./Components/LoginForm/loginForm";
import NavigationBar from "./Components/NavigationBar/navigationBar";
import SignUpForm from "./Components/SignUpForm/signUpForm";
import ShowAllProducts from "./Components/ShowAllProducts/showAllProducts";
import SellProductForm from "./Components/SellProductForm/sellProductForm";
import ShowProduct from "./Components/ShowProduct/showProduct";
import DisplayUserProducts from "./Components/DisplayUserProducts/displayUserProducts";
import Home from "./Components/Home/home";
import jwtDecode from "jwt-decode";
import ShoppingCart from "./Components/ShoppingCart/shoppingCart";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [token, setToken] = useState();
  const [productReviews, setProductReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(1);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const currentProduct = window.localStorage.getItem('saved-currentProduct')
    const savedData = JSON.parse(currentProduct)
    if (savedData !== null) {
      setCurrentProduct(savedData.savedProduct)
      setProductReviews(savedData.savedReviews)
    }
    const jwtToken = localStorage.getItem("token");
    setToken(jwtToken);
    getAllProducts();
    getCategories();

    try {
      const user = jwtDecode(jwtToken);
      const expirationTime = (user.exp * 1000) - 60000
      if (Date.now() >= expirationTime) {
        console.log('here')
        logout();
      }
      setCurrentUser({ user });
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    let savedProduct = currentProduct
    let savedReviews = productReviews
    const valuesToSave = {savedProduct, savedReviews}
    window.localStorage.setItem('saved-currentProduct', JSON.stringify(valuesToSave))
  },[productReviews, currentProduct])

  

  const addItemToCart = async (item) => {
    let itemToAdd = {
      productId: item.productId,
    }
    await axios.put("https://localhost:44394/api/shoppingcart/", itemToAdd, {headers: {Authorization: 'Bearer ' + token}} )
  }
  
  const deleteItemFromCart = async (itemId) => {
    await axios.delete(`https://localhost:44394/api/shoppingcart/${itemId}`, {headers: {Authorization: 'Bearer ' + token}} )
  }

  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    window.location = "/";
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

  const getAllProducts = async () => {
    let response = await axios.get("https://localhost:44394/api/product");
    if (response.data.length !== 0) {
      setAllProducts(response.data);
    }
  };
  const createCurrentProduct = async (product) => {
    let response = await axios.get(
      `https://localhost:44394/api/product/${product.productId}`
    );
    let currentProduct = response.data;
    console.log(currentProduct)
    setCurrentProduct(currentProduct);
  };

  const getProductReviews = async (productId) => {
    let response = await axios.get(
      `https://localhost:44394/api/reviews/${productId}`
    );
    setProductReviews(response.data);
  };

  const getCategories = async () => {
    let response = await axios.get("https://localhost:44394/api/category/");
    if (response.data.length !== 0) {
      setCategories(response.data);
    }
  };

  const userCurrentCategoryId = (categoryId) => {
    let intCategoryId = Number(`${categoryId}`);
    setCurrentCategoryId(intCategoryId);
  };

  const setFilteredCategories = (filteredProducts) => {
    setAllProducts(filteredProducts);
  };

  const setSearchFilteredProducts = (products) => {
    setAllProducts(products);
  };

  const getUsersCart = async () => {
    let response = await axios.get(`https://localhost:44394/api/shoppingcart`, {headers: {Authorization: 'Bearer ' + token}})
    setShoppingCart(response.data)
  }

  const increaseQuantity = async (quantity, shoppingCartId) => {
     await axios.patch(`https://localhost:44394/api/shoppingcart/${shoppingCartId}`, {Quantity: quantity+1} ,{headers: {Authorization: 'Bearer ' + token}})
  }
  const decreaseQuantity = async (quantity, shoppingCartId) => {
     await axios.patch(`https://localhost:44394/api/shoppingcart/${shoppingCartId}`, {Quantity: quantity-1} ,{headers: {Authorization: 'Bearer ' + token}})
  }

  const getUsersProducts = async () => {
    const userId = currentUser.user.id
    let response = await axios.get(`https://localhost:44394/api/product/userProducts/${userId}`)
    setUserProducts(response.data)
  }

  const deleteProduct = async (productId) => {
    await axios.delete(`https://localhost:44394/api/product/${productId}`)
    getUsersProducts();
    getAllProducts();
  }


  return (
    
    <Router>
      {!loading &&
      <div>
        <NavigationBar currentUser={currentUser} logout={logout} getUsersCart={getUsersCart} getUsersProducts={getUsersProducts} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props}  />
            )}
          />
          <Route path="/Signup" render={(props) => <SignUpForm {...props} />} />
          <Route
            path="/Login"
            render={(props) => (
              <LoginForm {...props} setUserToken={setUserToken} />
            )}
          />
          <Route
            path="/user/shoppingcart"
            render={(props) => {
              if (!currentUser) {
                return <Redirect to="/login" />;
              } else {
                return (

              <ShoppingCart
                {...props}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                getUsersCart={getUsersCart}
                user={currentUser}
                shoppingCart={shoppingCart}
                deleteItemFromCart={deleteItemFromCart}
              />
                );
              }
            }}
          />
          <Route
            path="/Login"
            render={(props) => (
              <LoginForm {...props} setUserToken={setUserToken} />
            )}
          />
          <Route
            path="/products"
            render={(props) => (
              <ShowAllProducts
                {...props}
                createCurrentProduct={createCurrentProduct}
                allProducts={allProducts}
                getProductReviews={getProductReviews}
                categories={categories}
                setSearchFilteredProducts={setSearchFilteredProducts}
                getAllProducts={getAllProducts}
                userCurrentCategoryId={userCurrentCategoryId}
                setFilteredCategories={setFilteredCategories}
                addItemToCart={addItemToCart}
              />
            )}
          />
          <Route
            path="/user/createproduct"
            render={(props) => {
              if (!currentUser) {
                return <Redirect to="/login" />;
              } else {
                return (
                  <SellProductForm
                    {...props}
                    currentUser={currentUser}
                    currentToken={token}
                    getAllProducts={getAllProducts}
                    categories={categories}
                    userCurrentCategoryId={userCurrentCategoryId}
                    currentCategoryId={currentCategoryId}
                  />
                );
              }
            }}
          />
          <Route
            path="/viewproduct"
            render={(props) => {
              if (!currentUser) {
                return <Redirect to="/login" />;
              } else {
                return (
                  <ShowProduct
                    {...props}
                    currentToken={token}
                    currentUser={currentUser}
                    currentProduct={currentProduct}
                    productReviews={productReviews}
                    getProductReviews={getProductReviews}
                    addItemToCart={addItemToCart}
                  />
                );
              }
            }}
          />
          <Route path="/userProducts" exact render={props => <DisplayUserProducts {...props} currentUser={currentUser} userProducts = {userProducts} getUsersProducts={getUsersProducts} getAllProducts={getAllProducts} deleteProduct={deleteProduct}/>} />
        </Switch>
      </div>
          }
    </Router>
  );   
}


export default App;

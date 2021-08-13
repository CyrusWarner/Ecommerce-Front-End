import React from 'react';
import Footer from '../Footer/footer';
import './home.css';
import { FaJediOrder } from 'react-icons/fa';

const Home = () => {
  return ( 
    <React.Fragment>
      <div className="homeMessage">
      <h1>Welcome to Star Wars eCommerce!</h1>
      <h3>In our store you can find merchandise related to Star Wars</h3>
      <br></br>
      <FaJediOrder size="35rem" color="red" />

      </div>
    <Footer />
    </React.Fragment>

   );
}
 
export default Home;

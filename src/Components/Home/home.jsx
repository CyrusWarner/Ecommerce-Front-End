import React from 'react';
import Footer from '../Footer/footer';
import './home.css';
import ParticlesBackground from '../ParticlesBackground/particlesBackground';

const Home = () => {
  return ( 
    <div  className="homeBody">
    <React.Fragment>
      
      <div id="particles-js">
      <div className="fade-out"></div>
      <section className="star-wars">
        <div className="skew-wrapper">
          <div className="title">
            <p className="title">Welcome to Star Wars eCommerce!</p>
            <h1>In our store you can find merchandise related to Star Wars</h1>
          <p>Episode IV</p>
          <p>A New Hope</p>
          </div>
          <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>     
        <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
        <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…</p>
         
        </div>
      </section>
    </div>
      

      <ParticlesBackground />
    <Footer />
    </React.Fragment>
    </div>

   );
}
 
export default Home;

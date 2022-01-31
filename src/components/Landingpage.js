import React from 'react';
import { Link } from 'react-router-dom';
import "./Landingpage.scss"
import landingImage from "../img/Magnifier.png"

const Landingpage = () => {
  return (
    <section className='landingsection'>
      <div className="container">
        <div className="container__split">
          <div className="container__split__left">
            <h1>Welcome to all in one.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet, officia ab voluptatibus enim quis ex corrupti eveniet error dicta voluptatem optio! Cupiditate, quae molestias! Itaque ad explicabo architecto? Possimus.</p>
          </div>
          <div className="container__split__right">
            <img src={landingImage} alt="" />
          </div>
        </div>
        <div className='container__buttons'>
          <Link to="/cryptotrackerapi"><button>Crypto Tracker</button></Link>
          <Link to="/randomfactsapi"><button>Press for Kanye</button></Link>
          <Link to="/recipeapi"><button>Recipe Generator</button></Link>
        </div>
      </div>
  </section>)
};

export default Landingpage;

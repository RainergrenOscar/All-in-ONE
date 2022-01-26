import React from 'react';
import { Link } from 'react-router-dom';
import "./Landingpage.scss"

const Landingpage = () => {
  return (
    <section className='landingsection'>
      <div className='landingsection__container'>
      <h1> WELCOME TO ALL IN ONE.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto consectetur, repellendus possimus harum praesentium nihil beatae necessitatibus perferendis? Aut, repellat dignissimos. Perspiciatis, illo voluptatem iusto libero consequatur numquam, dignissimos adipisci dolorem delectus architecto illum incidunt minus, soluta esse. Atque.</p>
      <div className='landingsection__container__links'>
        <Link to="/cryptotrackerapi"><button>Crypto Tracker</button></Link>
        <Link to="/randomfactsapi"><button>Random Facts</button></Link>
        <Link to="/recipeapi"><button>Recipe</button></Link>
        </div>
      </div>
  </section>)
};

export default Landingpage;

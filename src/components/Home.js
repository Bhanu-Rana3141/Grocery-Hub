import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Categories from './Categories';

export default function Home() {

  return (
    <>
      
      <div className="hero-page">
        <div className="left-section">
          <h1 id='heading'>Welcome to Apni Dukaan</h1>
          <p>Your One-Stop Solution for Daily Essentials. Shop Now and Enjoy Effortless!</p>
          <div className="inputClass">
            <div className="getStarted-btn">
              <Link to='/categories'><button>Get Started</button></Link>
            </div>
            <div className="input-block">
              <img className='search-icon' src="Images\search-icon.png"  alt="search-icon" />
              <input type="text" placeholder='Search for products'/>
            </div>
          </div>
        </div>

        <div className="right-section">
          <img src="Images\hero-img.png" alt="hero img" />
        </div>
      </div>

      <Categories/>

    </>
  );
}

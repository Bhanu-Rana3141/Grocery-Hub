import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Categories from './Categories';

export default function Home() {

  return (
    <>
      <h1>Welcome to Apni Dukaan</h1>
      <p>Your One-Stop Solution for Daily Essentials. Shop Now and Enjoy Effortless Grocery Shopping!</p>
      <div className="inputClass"><input type="text" placeholder='Search for Products' /></div>
      <Categories/>
    </>
  );
}

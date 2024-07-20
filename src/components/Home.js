import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <video src="Videos/HomePageVideo.mp4" width="100%" controls autoPlay loop muted></video>
      <h2>Shop by category</h2>

      <div className="categories">

        <div className="items">
          <Link to="/beverages">
            <img src="Images/Beverages.png" alt="beverages" />
            <p>Beverages</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Bakery.jpeg" alt="bakery" />
            <p>Bakery</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Branded food & snacks.png" alt="branded foods" />
            <p>Branded food & snacks</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/stationary.jfif" alt="stationary" />
            <p>Stationary</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Diary.jpeg" alt="diary" />
            <p>Milk & Curd</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/FoodGrains & masalas.png" alt="food grains" />
            <p>FoodGrains</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/dry fruits.jfif" alt="dry fruits" />
            <p>Dry Fruits</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/cleaning & households.png" alt="cleaning and households" />
            <p>Cleaning & households</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Tooth paste & brushes.jfif" alt="Tooth Paste & brushes" />
            <p>Tooth Pastes & brushes</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Pooja items.webp" alt="pooja items" />
            <p>Pooja items</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/slippers.jfif" alt="slippers" />
            <p>Slippers</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/mosquitos oils and coils.jfif" alt="mosquitos oils" />
            <p>Mosquitos oils & coils</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Chocolates.jfif" alt="chocolates" />
            <p>Chocolates</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/vegetables.jfif" alt="baby care" />
            <p>Vegetables</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/Maggi & ketchup.jfif" alt="maggi & ketch up" />
            <p>Maggi & Ketchup</p>
          </Link>
        </div>
        <div className="items">
          <Link to="">
            <img src="Images/skin & hair care.jfif" alt="skin & hair care" />
            <p>Skin & hair care</p>
          </Link>
        </div>

      </div>
    </>
  );
}

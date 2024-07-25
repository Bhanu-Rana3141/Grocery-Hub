import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default function Categories() {
  return (
    <>
        <h1>Shop by category</h1>

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
                    <img src="Images/Dairy.jpeg" alt="diary" />
                    <p>Dairy Products</p>
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
                    <img src="Images/Chocolates.jpg" alt="chocolates" />
                    <p>Chocolates & toffees</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images/vegetables.jpg" alt="vegetables" />
                    <p>Vegetables</p>
                </Link>
            </div>
            
            <div className="items">
                <Link to="">
                    <img src="\Images\toothBrushes.avif" alt="Tooth Paste & brushes" />
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
                    <p>Mosquitos Repellents</p>
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
                    <img src="Images/eggs.avif" alt="eggs" />
                    <p>Eggs</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images/skin care.jfif" alt="skin care" />
                    <p>Skin care</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images\hair care.webp" alt="Hair Care" />
                    <p>Hair Care</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images/Baby Care.webp" alt="cleaning and households" />
                    <p>Baby Care</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images/perfumes.jpeg" alt="perfumes" />
                    <p>Perfumes</p>
                </Link>
            </div>
            <div className="items">
                <Link to="">
                    <img src="Images/led bulbs.webp" alt="LED Bulbs" />
                    <p>LED Bulbs</p>
                </Link>
            </div>


        </div>
    </>
  )
}

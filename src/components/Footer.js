import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className="footer">

            <div className="section-1">
                <Link to="/"><img id='footer-logo'  src="Images\footerlogo.png" alt="logo" /></Link>
            </div>

            <div className="section-2">
                <h4>Quick Links</h4>
                <Link to=""><p>Home</p></Link>
                <Link to=""><p>About</p></Link>
                <Link to=""><p>Categories</p></Link>
                <Link to=""><p>Contact</p></Link>
                <Link to=""><p>Login</p></Link>
            </div>

            <div className="section-3">
                <h4>Categories</h4>
                <Link to=""><p>Beverages</p></Link>
                <Link to=""><p>Bakery</p></Link>
                <Link to=""><p>Branded foods & snacks</p></Link>
                <Link to=""><p>Stationary</p></Link>
                <Link to=""><p>Dairy Products</p></Link>
                <Link to=""><p>Food Grains</p></Link>
                <Link to=""><p>Dry Fruits</p></Link>
                <Link to=""><p>Chocolates & toffees</p></Link>
                <Link to=""><p>Pooja items</p></Link>
                <Link to=""><p>Slippers</p></Link>
            </div>

            <div className="section-4">
                <h4>More Options</h4>
                <Link to=""><p>Mosquitos Repellants</p></Link>
                <Link to=""><p>Cleaning & households</p></Link>
                <Link to=""><p>Eggs</p></Link>
                <Link to=""><p>Skin Care</p></Link>
                <Link to=""><p>Hair Care</p></Link>
                <Link to=""><p>Baby Care</p></Link>
                <Link to=""><p>Perfumes</p></Link>
                <Link to=""><p>Led bulbs</p></Link>
                <Link to=""><p>Vegetables</p></Link>
                <Link to=""><p>Tooth pastes & Brushes</p></Link>
            </div>

            <div className="section-5">
                <h4>GET IN TOUCH</h4>
                <Link to=""><img className='footer-connect-logo' src="Images\Github_logo.jpg" alt="github" /></Link>
                <Link to=""><img className='footer-connect-logo' src="Images\Linkedin_logo.png" alt="linkedin" /></Link>
                <Link to=""><img className='footer-connect-logo' src="Images\InstagramLogo.png" alt="instagram" /></Link>
            </div>

        </div>
    </>
  )
}

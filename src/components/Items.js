import React from 'react'
import './Items.css'

export default function Items() {
  return (
    <>
        <div className="items">
            <div>
                <img src="Images\Bakery&Dairy.png" alt="" />
                <p>Bakery/Diary</p>
            </div>
            <div>
                <img src="Images\Beverages.png" alt="" />   
                <p>Beverages</p>
            </div>
            <div>
                <img src="Images\Branded food & snacks.png" style={{position:'relative' , left:'40px'}} alt="" />
                <p>Foodgrains oils & masalas</p>
            </div>
            <div>
                <img src="Images\cleaning & households.png" alt="" />
                <p>Health & Beauty</p>
            </div>
            <div>
                <img src="Images\health & beauty.png" alt="" />
                <p>Cleaning & Households</p>
            </div>
            <div>
                <img src="Images\Fruits & Vegetables.png" alt="" />
                <p>Fruits & Vegetables</p>
            </div>
        </div>
    </>
  )
}

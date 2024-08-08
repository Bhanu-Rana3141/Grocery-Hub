import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <>
        <div className="body">
            <div className="heading">
                <h3>Register</h3>
            </div>
            <div className="name">
                <span>Name</span>
                <input type="text" placeholder='Enter name' />
            </div>
            <div className="email-id">
                <span>Email</span>
                <input type="email" name="" id="" placeholder='Enter Email' />
            </div>
            <div className="pass">
                <span>Password</span>
                <input type="password" name="" id="" placeholder='Enter password'/>
            </div>
            <div className="phone-no">
                <span>Phone No</span>
                <input type="number" name="" id="" placeholder='Enter phone-no'/>
            </div>
            <div className="button">
                <button>Register</button>
            </div>
        </div>
    </>
  )
}

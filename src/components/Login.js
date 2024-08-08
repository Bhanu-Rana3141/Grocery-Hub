import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
        <div className="body">
            <div className="heading">
                <h3>Login</h3>
            </div>

            <div className="email">
                <span>Email</span>
                <input type="email" placeholder='E-mail' />
            </div>

            <div className="password">
                <span>Password</span>
                <input type="password" placeholder='Password' />
            </div>

            <div className="button">
                <button>Login</button>
            </div>

            <div className="forgot-password">
                <span>Forgot Password ?</span>
            </div>
        </div>
    </>
  )
}

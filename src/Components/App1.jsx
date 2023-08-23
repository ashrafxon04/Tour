import React from 'react'
import logo from '../assets/images/logo.png'
import Home from './Home/Home'
import Footer from './Home/Footer'
import "./App.css"
function App1() {
  return (
    <>
    
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />

            </div>
            <div className="naw">
            <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Login</p>
                    <button className='btn1'>Sign Up</button>
            </div>
        </div>
        <div className="main_title">
            <div className="title_box">
                <h2>Tour Grid</h2>
                <p><span>Home</span>-Tour Grid</p>
            </div>
        </div>
        <Home/>
        <Footer/>
    </div>

    </>
  )
}

export default App1

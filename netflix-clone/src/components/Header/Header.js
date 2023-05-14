import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="showcase">
        <div className="showcase-top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo"></img>
            <Link to="/" className="btn  btn-rounded">Sign In</Link>
        </div>
        <div className="showcase-content">
            <h1 className='showcase-content h1'>Unlimited movies, TV shows and more</h1>
            <p className='showcase-content p'>Watch anywhere. Cancel anytime.</p>
            <Link to="/netflix-show" className="btn btn-xl">
                Watch Free For 30 Days
                <i className="fas fa-chevron-right btn-icon"></i>
            </Link>
        </div>

    </header>
  )
}

export default Header;

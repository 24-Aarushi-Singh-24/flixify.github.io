import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true);
            }
            else
            {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
      <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo"
        />
      </Link>
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
    </div>
  )
}

export default Navbar

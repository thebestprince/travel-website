import React, {useState} from 'react';
import {Link} from 'react-router-dom';



function Navbar() {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
      <Link>
     <img src="Travel_site_logo.png" alt="navbar-logo"/>
     </Link>
     <div className='menu-icon'></div>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>

    </nav>
    </>
  )
}

export default Navbar

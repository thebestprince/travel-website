import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Travel_logo from '../images/Travel_logo.png';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
      <Link to='/' className='navbar-logo'>
     <img src={Travel_logo} alt="logo"/>


     </Link>
     <div className='menu-icon' onClick={handleClick}>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    </div>
    </nav>
    </>
  );
}

export default Navbar

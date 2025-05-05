import React, { useState } from 'react';
import './Navbar.css';
import { icons } from '../Images/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='main-nav'>
      <div className='nav-details'>
        <div className='nav-left'>
          <Link to='./'>
            <img src={icons.Logo} alt="Logo" />
          </Link>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>

        <ul className='nav-list desktop-nav'>
          <Link className='link-nav' to='./'><li>Home</li></Link>
          <Link className='link-nav' to='./About'><li>About</li></Link>
          <Link className='link-nav' to='./Contact Us'><li>Contact Us</li></Link>
          <Link className='link-nav' to='./Menu'><li>Menu</li></Link>
          <Link className='link-nav' to='./Reservation'><li>Reservation</li></Link>
        </ul>

        <div className='nav-icons'>
          <span onClick={() => setLogin(true)} className="material-symbols-outlined">login</span>
          <Link to='./Cart'>
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </div>
      </div>
      
      {menuOpen && (
        <div className='sidebar-menu'>
          <Link className='link-nav' to='./'><li onClick={() => setMenuOpen(false)}>Home</li></Link>
          <Link className='link-nav' to='./About'><li onClick={() => setMenuOpen(false)}>About</li></Link>
          <Link className='link-nav' to='./Contact Us'><li onClick={() => setMenuOpen(false)}>Contact Us</li></Link>
          <Link className='link-nav' to='./Menu'><li onClick={() => setMenuOpen(false)}>Menu</li></Link>
          <Link className='link-nav' to='./Reservation'><li onClick={() => setMenuOpen(false)}>Reservation</li></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

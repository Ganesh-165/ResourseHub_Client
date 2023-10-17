import React from 'react';
import {Link} from "react-router-dom";
import './navbarstyles.css';

const Navbar= () =>{
  return (
      <nav className='navbar'>
        <div className='container'>
          <Link to='/'><h2>Resorce Hub</h2></Link>
          <ul className='navlinks'>
            <Link to='/sslc'>SSLC</Link>
            <Link to='/hsc'>HSC</Link>
            <Link to='/neet'>NEET</Link>
            <Link to='/jee'>JEE</Link>
          </ul>
        </div>
      </nav>
  );
}
export default Navbar;
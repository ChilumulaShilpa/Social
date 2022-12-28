import React from 'react';
import { Link } from 'react-router-dom';
import { SiFlipkart} from 'react-icons/si';
import '../index.css'
const Navbar = () => {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <p className='ic'><SiFlipkart   /></p>
     

      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/ProductsList">
              Mobiles
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/laptops">
              Laptops
            </Link>
          </li>
          <li class="nav-item1">
            <Link class="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li class="nav-item1">
            <Link class="nav-link" to="/login">
              Login
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

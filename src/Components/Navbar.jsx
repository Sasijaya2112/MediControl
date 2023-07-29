import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-light fs-4" style={{fontWeight:"bold"}} href="#">MediControl</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class={`nav-item ${location.pathname === '/home' ? 'text-dark' : ''}`}>
          <a class="nav-link text-light" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-light" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-light" href="/reports">Reports</a>
        </li>
      </ul>
      <Link to='/login'>
        <button class="btn btn-danger" type="submit">Log out</button>
        </Link>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/navbar.css'
import Toolbar from './Toolbar';

function Navbar() {

  return (
    <div class="navbar">
      <div class="mainNavbar">
        <a class="navbar-brand" href="/" >
          Music Store
        </a>
        <div>
          <Toolbar></Toolbar>
        </div>
      </div >
      <div class="menu">
        <ul class="nav nav-tabs">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Guitars</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/a_guitars">Acoustic Guitars</a></li>
              <li><a class="dropdown-item" href="/c_guitars">Classic Guitars</a></li>
              <li><a class="dropdown-item" href="/e_guitars">Electric Guitars</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Basses</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/a_basses">Acoustic Basses</a></li>
              <li><a class="dropdown-item" href="/e_basses">Electric Basses</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Drums</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/drums">Acoustic Drums</a></li>
              <li><a class="dropdown-item" href="/e_drums">E-Drums</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">ADMIN</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/add_item">Add item</a></li>
              <li><a class="dropdown-item" href="/add_customer">Add customer</a></li>
              <li><a class="dropdown-item" href="/add_admin">Add admin</a></li>
              <li><a class="dropdown-item" href="/image">Add image</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div >
  );

}
export default Navbar;
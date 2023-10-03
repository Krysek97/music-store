import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/navbar.css'
import cart from '../images/cart.svg';

function Navbar() {

  return (
    <nav class="navbar" style={{ backgroundColor: "#ffa31a" }}>
      <div class="flex-container">
        <div class="flex-child name">
          <a class="navbar-brand" href="/" >
            Music Store
          </a>
        </div>
        <div class='flex-child menu'>
        <a class='cart' href='/cart'>
          <img src={cart}></img>
        </a>
        </div>
        <div class="flex-chlid menu">
          <ul class="navbar-nav">
            <li class="btn-group dropstart">
              <button class="btn dropstart-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" style={{ position: "absolute" }}>
                <li><a class="dropdown-item" href="/login">Login</a></li>
                <li><a class="dropdown-item" href="/register">Register</a></li>
                <li><a class="dropdown-item" href="/profile">Account</a></li>
              </ul>
            </li>
          </ul>
        </div >
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
              <li><a class="dropdown-item" href="/a_drums">Acoustic Drums</a></li>
              <li><a class="dropdown-item" href="/e_drums">E-drums</a></li>
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
    </nav >
  );

}
export default Navbar;
import cart from '../images/cart.svg';
import './css/navbar.css'

function Toolbar() {


    if (window.location.href !== 'http://localhost:3000/login') {
        return (

            <div class='navbar-nav'>
                <button class='btn' href='/cart'>
                    <img src={cart} ></img>
                </button>
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
            </div>

        )
    }


}
export default Toolbar;
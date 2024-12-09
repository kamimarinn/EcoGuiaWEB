import { useState } from "react";
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function ProtectedNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container">
            <div className='logo-container'>
                <Link to='/'>
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt="Logo" />
                </Link>
            </div>

            {(location.pathname !== '/Crud' && location.pathname !== '/crud') && (
                <Link className="navbar-login-button" to="/">VOLTAR</Link>
            )}

            <Link to='/'>
            <button className="navbar-logout-button">
                Logout
            </button>
            </Link>
        </div>
    );
}
import { useState } from "react";
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const logado = localStorage.getItem('logado');

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {

        const section = document.getElementById(sectionId);

        if (section) {

            section.scrollIntoView({ behavior: "smooth" });
        }
        
        setIsMenuOpen(false);
    };

    return (
        <div className="container">
            {!logado && (
                <>
                    <div className={`container-pag ${isMenuOpen ? 'open' : ''}`}>
                        <button onClick={() => scrollToSection('funcionalidades')}>SOBRE</button>
                        <button onClick={() => scrollToSection('horarios')}>HORÁRIOS DA COLETA</button>
                        <button onClick={() => scrollToSection('artigos')}>ARTIGOS</button>
                        <button onClick={() => scrollToSection('ecopontos')}>ECOPONTOS</button>
                    </div>
    
                    <div className="navbar-mobile-buttons">
                        <Link className="navbar-login-button" to="/Login">ADMIN</Link>
    
                        <button className="menu-toggle" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>
                </>
            )}
            {logado && (
                <>
                    <div className='logo-container' onClick={() => localStorage.removeItem('logado')}>
                        <Link to='/'>
                            <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' />
                        </Link>
                    </div>

                    {(location.pathname !== '/Crud' && location.pathname !== '/crud') && (
                        <Link className="navbar-login-button" to="/crud">VOLTAR</Link>
                    )}
                </>
            )}
        </div>
    );    
}

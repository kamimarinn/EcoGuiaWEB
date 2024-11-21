import './telaTrilha.css';

import {Link} from "react-router-dom";

function TelaTrilha() {
    return (
        <div className='container-telatrilha'>
            <div className='container-logo-telatrilha'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <a href="/">SOBRE</a>
                <a href="/">HORÁRIOS DAS COLETAS</a>
                <a href="/">ARTIGOS</a>
                <a href="/">ECOPONTOS</a>
            </div>
            <div className='btn-login-telatrilha'>
                <Link className="button" to="/Login">LOGIN</Link>
            </div>
        </div>
    );
}

export default TelaTrilha;
import { Link } from 'react-router-dom';
import "./TelaDicas.css";

function TelaDicas(){
    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <Link to="/Funcionalidades">SOBRE</Link>
                <Link to="/">HORÁRIOS DAS COLETAS</Link>
                <Link to="/">ARTIGOS</Link>
                <Link to="/">ECOPONTOS</Link>
            </div>
            <div className='btn-login'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>
        </div>
    );
}

export default TelaDicas;


import { Link } from 'react-router-dom'; // Certifique-se de importar o Link
import "./telaAltIcons.css";

function TelaAltIcons() { // Mudei para iniciar com letra maiúscula
    return (
        <div className='container-catalogo'>
            <div className='container-logo'>
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
            <div className='btn-login'>
                <Link className="button" to="/Login">LOGIN</Link>
            </div>
        </div>
    );
}

export default TelaAltIcons;
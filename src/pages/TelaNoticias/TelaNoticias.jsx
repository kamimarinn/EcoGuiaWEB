import "./TelaNoticias.css";
import {Link} from "react-router-dom";

function TelaNoticias (){
    return (
        <div className="container-header">
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

    <div className="container-admin">
        <img className="engrenagem-crudtela" src ='/img/engrenagem-crudtela.svg' alt='icon'/>
        <h2>Página de <span className='highlight'>Modificação de Notícias</span></h2>
        <p>Adicione, modifique ou delete notícias do sistema<br></br>Tome cuidado, suas alterações irão valer para todos que acessam o projeto.</p>
    </div>
    
        <div className="btns-noticias">
            <Link to={'/AddArtigos'}>
                <div className="btn-adicionarNoticia">
                    <p> Adicionar Notícias</p>
                </div>
            </Link>
    
            <Link to={'/AlterarArtigos'}>
                <div className="btn-modificarNoticia"> 
                    <p> Modificar Notícias</p>
                </div>
            </Link>

            <Link to={'/RemoverArtigos'}>
                <div className="btn-removerNoticia"> 
                    <p> Deletar Notícias</p>
                </div>
            </Link>

        </div>

    </div>

    )
}

export default TelaNoticias;
import "./Crud.css";
import {Link} from "react-router-dom";

function Crud (){
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
    <div className='btn-login'>
         <Link className="button" to="/Login">LOGIN</Link>
    </div>
    
    <div className="container-admin">
        <img className="engrenagem-crudtela" src ='/img/engrenagem-crudtela.svg' alt='icon'/>
        <h2>Página de <span className='highlight'>Administrador</span></h2>
        <p>Com sua conta de acesso restrito, controle e administre funções e conteúdos do site. Tome cuidado, suas alterações irão valer para todos que<br></br> acessam o projeto.</p>
    </div>
    <div className="pai-container-icones">
        <div className="container-icon-um">
        <a href="/AddArtigos" className='botao-missoes'>
            <img className="engrenagem-crudtela" src ='/img/objt-crud.svg' alt='icon'/></a>
            <h5 className="icon-titulo">Trilha de<br></br> Objetivos</h5>
            <p className="icon-texto" >Manipule missões e<br></br> badges</p>
        </div>

        <div className="container-icon-dois">
        <Link className="btn" to="/AddArtigos">
            <img className="engrenagem-crudtela" src ='/img/not-crud.svg' alt='icon'/></Link>
            <h5 className="icon-titulo">Artigos e <br></br>Notícias</h5>
            <p className="icon-texto">Desenvolva novos<br></br>artigos</p>
        </div>

        <div className="container-icon-tres">
        <Link className="btn-alticons" to="/telaAltIcons">
            <img className="engrenagem-crudtela" src ='/img/perfil-crud.svg' alt='icon'/></Link>
            <h5 className="icon-titulo">Icons para<br></br>perfis</h5>
            <p className="icon-texto" >Adicione mais ícones <br></br>para os usuários</p>
           
        </div>
     
        
        
        
    </div>

    </div>

    )
}

export default Crud;
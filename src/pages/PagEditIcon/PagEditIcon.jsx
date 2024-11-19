import { useEffect, useState } from "react";
import "./PagEditIcon.css";
import { Link } from "react-router-dom";


function PagEditIcon() {

const [avatar,setAvatar] = useState('')
    useState(() => {
    async function img() {
    const imag = localStorage.getItem('avatar')
    setAvatar(imag);
       }
       img()
    },[])
    return (
        <div className='container-editicon'>
            <div className='container-logo-editicon'>
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
            <div className='btn-login-edicon'>
                <Link className="button" to="/Login">ADMIN</Link>

            </div>
            <div className='container-titulo-editicon'>
                <h2><span className='highlight'>Editar </span> Icon </h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-tit'/>
                <p>Edite seu icon aqui.</p>
                 </div>
            <div className="pai-container-edicao">
                
                <div className="circle-container">
                    <img src={avatar} alt='icon' className='circle-icon' />
                </div>
                
                <div className="input-container">
                <div className="file-input-container">
            <input type="file" id="file-input" className="file-input" />
            <label htmlFor="file-input" className="file-label">Procurar arquivo</label>
            <div className="btn-confirmar-action">
                        <button className="confirm-button">Confirmar</button>
                    </div>
           
                
                </div>

       
       
                <div className="drop-area">
                    Arraste e solte sua imagem aqui
                </div>

              
       
    </div>
</div>
     
        </div>
    );
}

export default PagEditIcon;
 
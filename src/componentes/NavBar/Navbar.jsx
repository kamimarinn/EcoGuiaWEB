import './NavBar.css';
// import {Link} from "react-router-dom";

export default  function NavBar() {
    return (
        <div className="container">
                    
        <div className='container-pag'>
        
        <a href="/funcionalidades">SOBRE</a>
        <a href="/horario-coleta">HORÁRIOS DA COLETA</a>
        <a href="/horario-coleta">ARTIGOS</a>
        <a href="/horario-coleta">ECOPONTOS</a>
        </div>
        
        
        <div className='container-btnlogin'>

        <button type="button">LOGIN</button>
        
        </div>
    
    </div>
    
        
    );
}


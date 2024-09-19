import './NavBar.css';

export default  function NavBar() {
    return (
        <div className="container">
                    
        <div className='container-pag'>
        {/* <nav className="topo-links">
                <Link className="topo-link" to="/Funcionalidades">SOBRE</Link>
                <Link className="topo-link" to="/HorarioColeta">Horario da coleta</Link>
                <Link className="topo-link" to="/HorarioColeta">artigos</Link>
                <Link className="topo-link" to="/HorarioColeta">ecopontos</Link>
            </nav> */}
        <a href="#sobre">SOBRE</a>
        <a href="#horario-coleta">HORÁRIOS DA COLETA</a>
        <a href="#artigos">ARTIGOS</a>
        <a href="#ecopontos">ECOPONTOS</a>
        </div>
        
        
        <div className='container-btnlogin'>
        <button type="button">
                LOGIN
        </button>
    </div>
    
    </div>
    
        
    );
}


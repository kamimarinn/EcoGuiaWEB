import { useEffect } from "react";
import NavBar from "../../componentes/NavBar/Navbar";
import Inicio from "../../componentes/Inicio/Inicio";
import Funcionalidades from "../../componentes/Funcionalidades/Funcionalidades";




export default function Home() {

    const logado = localStorage.getItem('logado');
    
    useEffect(() => {

        localStorage.removeItem('logado');
    }, [logado]);
    
    return (
        <div>
            <NavBar />
            <Inicio />
            <Funcionalidades />
        </div>
    );
}



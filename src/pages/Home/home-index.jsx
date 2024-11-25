import NavBar from "../../componentes/Navbar/Navbar";
import Inicio from "../../componentes/Inicio/Inicio";
import Missao from "../../componentes/Missao/Missao";
import Funcionalidades from "../../componentes/Funcionalidades/Funcionalidades";
import HorarioColeta from "../../componentes/HorarioColeta/HorarioColeta";
import Artigos from "../../componentes/Artigos/Artigos";
import Ecopontos from "../../componentes/Ecopontos/Ecopontos";
import Footer from "../../componentes/Footer/Footer";




export default function Home() {
    return (
        <div>
            
            <NavBar />
            <Inicio />
            <Missao/>
            <Funcionalidades />
           
            <HorarioColeta/>
            {/* <Artigos/>
            <Ecopontos/>
            <Footer/> */}
        </div>
    );
}


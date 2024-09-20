import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home-index.jsx";
import PageCatalogo from "./pages/catalogo/catalogo.jsx";
import Login from "./pages/Login/Login.jsx";
import Funcionalidades from "./componentes/Funcionalidades/Funcionalidades.jsx";
import HorarioColeta from "./componentes/HorarioColeta/HorarioColeta.jsx";
// import Footer from "./componentes/Footer/Footer.jsx";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<PageCatalogo />} />
                <Route path="/" element={<Login/>}/>
                <Route path="/Funcionalidades" element={<Funcionalidades/>}/>
                <Route path="/HorarioColeta" element={<HorarioColeta/>}/>
                {/* <Route path="/Footer" element={<Footer/>}/> */}
                
            </Routes>
        </BrowserRouter>
    );
}

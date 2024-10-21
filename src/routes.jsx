import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home-index.jsx";
import PageCatalogo from "./pages/catalogo/catalogo.jsx";
import Funcionalidades from "./componentes/Funcionalidades/Funcionalidades.jsx";
import HorarioColeta from "./componentes/HorarioColeta/HorarioColeta.jsx";
import Login from "./pages/Login/Login.jsx";
import Crud from "./pages/Tela CRUD/crud.jsx";
import AddArtigos from "./pages/telaAddArtigos/AddArtigos.jsx";
import TelaAltIcons from "./pages/telaAltIcons/telaAltIcons.jsx";
import PagEditIcon from "./pages/PagEditIcon/PagEditIcon.jsx";
import TelaTrilha from "./pages/telaTrilha/telaTrilha.jsx";
import TelaToken from "./pages/telaToken/TelaToken.jsx";
import TelaRedefinirSenha from "./pages/telaRedefinirSenha/TelaRedefinirSenha.jsx";
// import TelaEsqueciSenha from "./pages/TelaEsqueciSenha";



export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<PageCatalogo />} />
                <Route path="/" element={<Login/>}/>
                <Route path="/Funcionalidades" element={<Funcionalidades/>}/>
                <Route path="/HorarioColeta" element={<HorarioColeta/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Crud"  element={<Crud/>}/>
                <Route path="/AddArtigos" element={<AddArtigos/>}/>
                <Route path="/telaAltIcons" element={<TelaAltIcons/>}/>
                <Route path="/PagEditIcon" element={<PagEditIcon/>}/>  
                {/* <Route path="/TelaEsqueciSenha" element={<TelaEsqueciSenha/>}/> */}
                <Route path="/telaTrilha" element={<TelaTrilha/>}/>  
                <Route path="/TelaToken" element={<TelaToken/>}/>    
                <Route path="/TelaRedefinirSenha" element={<TelaRedefinirSenha/>}/>   
                
            </Routes>
        </BrowserRouter>
    );
}


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home-index.jsx";
import PageCatalogo from "./pages/catalogo/catalogo.jsx";
import Login from "./pages/Login/Login.jsx";
import Crud from "./pages/Tela CRUD/crud.jsx";
import AddArtigos from "./pages/telaAddArtigos/AddArtigos.jsx";
import TelaAltIcons from "./pages/telaAltIcons/telaAltIcons.jsx";
import PagEditIcon from "./pages/PagEditIcon/PagEditIcon.jsx";
// import TelaEsqueciSenha from "./pages/TelaEsqueciSenha/TelaEsqueciSenha.jsx";
import TelaTrilha from "./pages/TelaTrilha/telaTrilha.jsx";
import TelaAddTrilha from "./pages/TelaAddTrilha/telaAddTrilha.jsx";
import TelaToken from "./pages/telaToken/TelaToken.jsx";
import TelaRedefinirSenha from "./pages/telaRedefinirSenha/TelaRedefinirSenha.jsx";
import TelaMateriais from "./pages/TelaMateriais/TelaMateriais.jsx";
import TelaModificarLevel from "./pages/TelaModificarLevel/TelaModificarLevel.jsx";
import TelaDicas from "./pages/TelaDicas/TelaDicas.jsx";
import TelaDicasAdd from "./pages/TelaDicasAdd/TelaDicasAdd.jsx";
import TelaNoticias from "./pages/TelaNoticias/telaNoticias.jsx";
import TelaRemoverArtigos from "./pages/TelaRemoverArtigos/removerArtigos.jsx";
import TelaAlterarArtigos from "./pages/TelaAlterarArtigos/alterarArtigos.jsx";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute.jsx";
import ProtectedNavBar from "./componentes/NavBar/ProtectedNavBar.jsx";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo/:id" element={<PageCatalogo />} />
                <Route path="/Login" element={<Login/>}/>

                {/* Rotas protegidas */}
                <Route path="/Crud" element={<ProtectedRoute element={<><ProtectedNavBar /><Crud /></>} />} />
                <Route path="/AddArtigos" element={<ProtectedRoute element={<AddArtigos />} />} />
                <Route path="/telaAltIcons" element={<ProtectedRoute element={<TelaAltIcons />} />} />
                <Route path="/PagEditIcon" element={<ProtectedRoute element={<PagEditIcon />} />} />
                <Route path="/telaTrilha" element={<ProtectedRoute element={<TelaTrilha />} />} />
                <Route path="/telaAddTrilha" element={<ProtectedRoute element={<TelaAddTrilha />} />} />
                <Route path="/TelaToken" element={<ProtectedRoute element={<TelaToken />} />} />
                <Route path="/TelaRedefinirSenha" element={<ProtectedRoute element={<TelaRedefinirSenha />} />} />
                <Route path="/TelaMateriais" element={<ProtectedRoute element={<TelaMateriais />} />} />
                <Route path="/TelaModificarLevel" element={<ProtectedRoute element={<TelaModificarLevel />} />} />
                <Route path="/TelaDicas" element={<ProtectedRoute element={<TelaDicas />} />} />
                <Route path="/TelaDicasAdd" element={<ProtectedRoute element={<TelaDicasAdd />} />} />
                <Route path="/TelaNoticias" element={<ProtectedRoute element={<TelaNoticias />} />} />
                <Route path="/RemoverArtigos" element={<ProtectedRoute element={<TelaRemoverArtigos />} />} />
                <Route path="/AlterarArtigos" element={<ProtectedRoute element={<TelaAlterarArtigos />} />} />

            </Routes>
        </BrowserRouter>
    );
}

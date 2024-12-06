
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home-index.jsx";
import PageCatalogo from "./pages/catalogo/catalogo.jsx";
import Login from "./pages/Login/Login.jsx";
import Crud from "./pages/Tela CRUD/crud.jsx";
import AddArtigos from "./pages/telaAddArtigos/AddArtigos.jsx";
import TelaAltIcons from "./pages/telaAltIcons/telaAltIcons.jsx";
import PagEditIcon from "./pages/PagEditIcon/PagEditIcon.jsx";
// import TelaEsqueciSenha from "./pages/TelaEsqueciSenha/TelaEsqueciSenha.jsx";
import TelaTrilha from "./pages/telaTrilha/telaTrilha.jsx";
import TelaAddTrilha from "./pages/TelaAddTrilha/telaAddTrilha.jsx";
import TelaToken from "./pages/telaToken/TelaToken.jsx";
import TelaRedefinirSenha from "./pages/telaRedefinirSenha/TelaRedefinirSenha.jsx";
import TelaMateriais from "./pages/TelaMateriais/TelaMateriais.jsx";
import TelaModificarLevel from "./pages/TelaModificarLevel/TelaModificarLevel.jsx";
import TelaDicas from "./pages/TelaDicas/TelaDicas.jsx";
import TelaDicasAdd from "./pages/TelaDicasAdd/TelaDicasAdd.jsx";
import TelaNoticias from "./pages/TelaNoticias/TelaNoticias.jsx";
import TelaRemoverArtigos from "./pages/TelaRemoverArtigos/RemoverArtigos.jsx";
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
                <Route path="/AddArtigos" element={<ProtectedRoute element={<><ProtectedNavBar /><AddArtigos /></>} />} />
                <Route path="/telaAltIcons" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaAltIcons /></>} />} />
                <Route path="/PagEditIcon" element={<ProtectedRoute element={<><ProtectedNavBar /><PagEditIcon /></>} />} />
                <Route path="/telaTrilha" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaTrilha /></>} />} />
                <Route path="/telaAddTrilha" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaAddTrilha /></>} />} />
                <Route path="/TelaToken" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaToken /></>} />} />
                <Route path="/TelaRedefinirSenha" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaRedefinirSenha /></>} />} />
                <Route path="/TelaMateriais" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaMateriais /></>} />} />
                <Route path="/TelaModificarLevel" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaModificarLevel /></>} />} />
                <Route path="/TelaDicas" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaDicas /></>} />} />
                <Route path="/TelaDicasAdd" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaDicasAdd /></>} />} />
                <Route path="/TelaNoticias" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaNoticias /></>} />} />
                <Route path="/RemoverArtigos" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaRemoverArtigos /></>} />} />
                <Route path="/AlterarArtigos" element={<ProtectedRoute element={<><ProtectedNavBar /><TelaAlterarArtigos /></>} />} />

            </Routes>
        </BrowserRouter>
    );
}

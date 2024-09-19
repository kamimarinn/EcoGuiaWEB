import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home-index.jsx";
import PageCatalogo from "./pages/catalogo/catalogo.jsx";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<PageCatalogo />} />
            </Routes>
        </BrowserRouter>
    );
}

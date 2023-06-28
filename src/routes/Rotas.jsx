import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from "../components/Home";
import SistemaGerenciamentoFornecimento from "../components/SistemaGerenciamentoFornecimento";
// import Page2 from "./pages/Page-2";
// import Page3 from "./pages/Page-3";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";

function Rotas() {
    return (
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<SistemaGerenciamentoFornecimento/>} />
            <Route path="/fornecedor-busca"
                   element={<SistemaGerenciamentoFornecimento tela="1"/>}
            />
            <Route path="/fornecedor-cadastro" element={<SistemaGerenciamentoFornecimento tela="2" />} />
          </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
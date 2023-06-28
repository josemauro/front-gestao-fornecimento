import { BrowserRouter, Route, Routes} from "react-router-dom";
import SistemaGerenciamentoFornecimento from "../components/SistemaGerenciamentoFornecimento";


function Rotas() {
    return (
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<SistemaGerenciamentoFornecimento/>} />
            <Route path="/fornecedor-busca"
                   element={<SistemaGerenciamentoFornecimento tela="1"/>}
            />
            <Route path="/fornecedor-cadastro" element={<SistemaGerenciamentoFornecimento tela="2" />} />
            <Route path="/empresa-busca"
                   element={<SistemaGerenciamentoFornecimento tela="3"/>}
            />
            <Route path="/empresa-cadastro" element={<SistemaGerenciamentoFornecimento tela="4" />} />
          </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
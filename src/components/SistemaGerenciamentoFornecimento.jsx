/* eslint-disable react/prop-types */
import Home from "../components/Home";

import BarraLateral from "./BarraLateral";
import EmpresasBusca from "./EmpresaBusca";
import EmpresasCadastro from "./EmpresasCadastro";
import FornecedoresBusca from "./FornecedoresBusca";
import FornecedoresCadastro from "./FornecedoresCadastro";


function SistemaGerenciamentoFornecimento(props) {
  var telaEscolhida = <Home/>
  if (props.tela == "1") {
    telaEscolhida = <FornecedoresBusca/>;
  } else if (props.tela == "2") {
    telaEscolhida = <FornecedoresCadastro/>;
  } else if (props.tela == "3") {
    telaEscolhida = <EmpresasBusca/>;
  }  else if (props.tela == "4") {
    telaEscolhida = <EmpresasCadastro/>;
  }

  return (
    <div className="sb-nav-fixed">
          <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
              <a className="navbar-brand ps-3" href="index.html">SGF Accenture</a>
              <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
          </nav>
            <div id="layoutSidenav">
                <BarraLateral/>
                <div id="layoutSidenav_content">
                {telaEscolhida}
                </div>
            </div>
    </div>
    
  )
}

export default SistemaGerenciamentoFornecimento;
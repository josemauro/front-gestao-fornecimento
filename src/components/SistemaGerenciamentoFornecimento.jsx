// import BarraLateral from "./BarraLateral";
// import BarraSuperior from "./BarraSuperior";
// import Home from "./Home";

import { Accordion, Nav } from "react-bootstrap";
import BarraLateral from "./BarraLateral";
import Home from "./Home";

function SistemaGerenciamentoFornecimento() {

  return (
    <div className="sb-nav-fixed">
    
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="index.html">SGF Accenture</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
        </nav>
        <div id="layoutSidenav">
            <BarraLateral/>
            <div id="layoutSidenav_content">
                <Home/>
            </div>
        </div>
        
    </div>
    
  )
}

export default SistemaGerenciamentoFornecimento;
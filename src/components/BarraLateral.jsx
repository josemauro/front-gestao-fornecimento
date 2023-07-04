import { Accordion, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BarraLateral() {
    const navigate = useNavigate();

    return (
        <div id="layoutSidenav_nav">
            <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Empty</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                   <Accordion.Item eventKey="1">
                        <Accordion.Header>Fornecedores</Accordion.Header>
                        <Accordion.Body>
                            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                                activeKey="/home"
                                onSelect={selectedKey => navigate(selectedKey)}
                                >
                                <Nav.Item>
                                    <Nav.Link eventKey="/fornecedor-busca">Pesquisar</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="/fornecedor-cadastro">Cadastrar</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Empresas</Accordion.Header>
                        <Accordion.Body>
                        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                        activeKey="/home"
                        onSelect={selectedKey => navigate(selectedKey)}
                        >
                        <Nav.Item>
                            <Nav.Link eventKey="/empresa-busca">Pesquisar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/empresa-cadastro">Cadastrar</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion> 
            </div>
        
    )
  }
  
  export default BarraLateral;
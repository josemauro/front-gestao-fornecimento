import { useState } from "react";
import ResultadoBusca from "./ResultadoBusca";

function FornecedoresBusca() {
    // eslint-disable-next-line no-unused-vars
    const [resultados, setResultados] = useState([{id:"123", nome: "jose"}]);


    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Buscar um fornecedor</h1>
            <div className="card mt-5">
                <div className="card-body">
                    <div style={{width: "350px", marginLeft: "200px", marginRight: "200px", textAlign: "left"}}>    

                    <label className="fs-4">
                        Selecione um filtro de busca:
                    </label>
               
                    <div className="form-check mt-3 fs-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Nome
                        </label>
                    </div>

                    <div className="form-check fs-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Identificador (CPF/CNPJ)
                        </label>
                    </div>
                </div>
                <form className="form-inline my-2 my-lg-0" style={{marginLeft: "200px", marginRight: "200px"}}>
                    <input className="form-control mt-4 mb-5 mr-sm-2" type="search" placeholder="Busca" aria-label="Search"/>
                    <button className="btn btn-primary btn-lg" type="submit">Buscar</button>
                    </form>
                </div>
            </div>

            <ul className="list-group my-4">
                {resultados ? resultados.map(fornecedor => (<ResultadoBusca key={fornecedor.id} nome={fornecedor.nome} />)) : ""}
            </ul>
            
        </div>        
    )
  }
  
  export default FornecedoresBusca;

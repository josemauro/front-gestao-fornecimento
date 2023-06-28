import axios from "axios";
import { useState } from "react";
import ResultadoBusca from "./ResultadoBusca";

function FornecedoresBusca() {
    // eslint-disable-next-line no-unused-vars
    const [resultados, setResultados] = useState([]);
    const [filtro, setFiltro] = useState("nome");
    const [valor, setValor] = useState("");


    const handleSubmit = async e => {

        e.preventDefault();
        
        try {
            await axios.get("http://localhost:8181/fornecedores/listar/" + filtro + "?valor=" + valor)
                        .then((response) => {

                                                if (response.status == 200){
                                                    
                                                    if (response.data == null) {
                                                        setResultados([]);
                                                        return;
                                                    }
                                                    
                                                    if (filtro == 'nome'){
                                                        setResultados(response.data);    
                                                    } else {
                                                        setResultados([response.data]);
                                                    }
                                                    
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            if (err.response.status == 404){
                alert("Nenhum fornecedor encontrado!");
            } else alert("Erro ao buscar fornecedor!");
        }
        
      };

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Buscar um fornecedor</h1>
            <div className="card mt-5">
                <div className="card-body">
                <form  onSubmit={handleSubmit}>
                    <div style={{width: "350px", marginLeft: "200px", marginRight: "200px", textAlign: "left"}}>    
                        <label className="fs-4">
                            Selecione um filtro de busca:
                        </label>
                
                        <div className="form-check mt-3 fs-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   value="nome" 
                                   id="flexRadioDefault1"
                                   onChange={e => setFiltro(e.target.value)}
                                   checked/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Nome
                            </label>
                        </div>

                        <div className="form-check fs-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   value="id" 
                                   onChange={e => setFiltro(e.target.value)}
                                   id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Identificador (CPF/CNPJ)
                            </label>
                        </div>
                    </div>
                    <div className="form-inline my-2 my-lg-0" style={{marginLeft: "200px", marginRight: "200px"}}>
                        <input className="form-control mt-4 mb-5 mr-sm-2" type="search"
                               onChange={e => setValor(e.target.value)}
                               placeholder="Busca"
                               aria-label="Search"
                               required/>
                        <button className="btn btn-primary btn-lg" type="submit">Buscar</button>
                    </div>
                </form>
                </div>
            </div>

            <ul className="list-group my-4">
                {resultados ? resultados.map(fornecedor => (<ResultadoBusca key={fornecedor.id} nome={fornecedor.nome} id={fornecedor.id} />)) : ""}
            </ul>
            
        </div>        
    )
  }
  
  export default FornecedoresBusca;

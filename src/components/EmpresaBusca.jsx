import axios from "axios";
import { useState } from "react";
import ResultadoBusca from "./ResultadoBusca";

function EmpresasBusca() {
    // eslint-disable-next-line no-unused-vars
    const [resultados, setResultados] = useState([]);
    const [valor, setValor] = useState("");

    const removerEmpresa = async e => {

        e.preventDefault();

        
        try {
            await axios.post("http://localhost:8181/empresas/apagar?cnpj="+e.target.id)
                        .then((response) => {
                                                if (response.status == 200){
                                                    alert("Empresa removida com sucesso!");
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            alert("Erro ao remover empresa!");

        }
        
      };
    const handleSubmitEmpresa = async e => {

        e.preventDefault();
        
        try {
            await axios.get("http://localhost:8181/empresas/listar" + "?nome=" + valor)
                        .then((response) => {

                                                if (response.status == 200){
                                                    
                                                    if (response.data == null) {
                                                        setResultados([]);
                                                        return;
                                                    }
                                                    
                                                    setResultados(response.data);    
                                                    
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            if (err.response.status == 404){
                alert("Nenhuma empresa encontrado!");
            } else alert("Erro ao buscar empresa!");
        }
        
      };

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Buscar uma empresa</h1>
            <div className="card mt-5">
                <div className="card-body">
                <form  onSubmit={handleSubmitEmpresa}>
                    
                    <div className="form-inline my-2 my-lg-0" style={{marginLeft: "200px", marginRight: "200px" }}>
                        <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                Busca pelo nome da empresa:
                        </label>
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
                {resultados ? resultados.map(empresa => (<ResultadoBusca key={empresa.cnpj} nome={empresa.nomeFantasia} id={empresa.cnpj} funcaoRemover={removerEmpresa} />)) : ""}
            </ul>
            
        </div>        
    )
  }
  
  export default EmpresasBusca;

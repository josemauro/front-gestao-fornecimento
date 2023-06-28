/* eslint-disable react/prop-types */

import axios from "axios";

function ResultadoBusca(props) {
    const apagarFornecedor = async e => {

        e.preventDefault();

        
        try {
            await axios.post("http://localhost:8181/fornecedores/apagar?id="+e.target.id)
                        .then((response) => {
                                                if (response.status == 200){
                                                    alert("Fornecedor removido com sucesso!");
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            alert("Erro ao deletar fornecedor!");

        }
        
      };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.nome}
            <div className="align-items-right">
                <button type="button" className="btn btn-info mx-2">Editar</button>
                <button id={props.id} type="button" className="btn btn-danger mx-2" onClick={apagarFornecedor}>Excluir</button>
            </div>
        </li>  
    )
  }
  
  export default ResultadoBusca;

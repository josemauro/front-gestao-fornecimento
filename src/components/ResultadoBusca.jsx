/* eslint-disable react/prop-types */

// import axios from "axios";

function ResultadoBusca(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.nome}
            <div className="align-items-right">
                <button type="button" className="btn btn-info mx-2">Editar</button>
                <button id={props.id} type="button" className="btn btn-danger mx-2" onClick={props.funcaoRemover}>Excluir</button>
            </div>
        </li>  
    )
  }
  
  export default ResultadoBusca;

/* eslint-disable react/prop-types */

function ResultadoBusca(props) {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.nome}
            <div className="align-items-right">
                <button type="button" className="btn btn-info mx-2">Editar</button>
                <button type="button" className="btn btn-danger mx-2">Excluir</button>
            </div>
        </li>  
    )
  }
  
  export default ResultadoBusca;

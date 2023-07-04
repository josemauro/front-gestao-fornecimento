/* eslint-disable react/prop-types */
import BotaoInfo from './Botoes/BotaoInfo';

function ResultadoBusca(props) {

    return (
        <>

            <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.info.nome}
                <div className="align-items-right">
                    <BotaoInfo fornecedorInfo={props.info}/>
                    <button type="button" className="btn btn-success mx-2">Parcerias</button>
                    <button type="button" className="btn btn-info mx-2">Editar</button>
                <button id={props.info.id} type="button" className="btn btn-danger mx-2" onClick={props.funcaoRemover}>Excluir</button>
            </div>
            </li>
        </>
          
    )
  }
  
  export default ResultadoBusca;


function FornecedoresCadastro() {

    return (
        <div className="container-fluid px-4 fs-5">
            <h1 className="mt-4">Cadastro de fornecedores</h1>
            <div className="card mt-5">
                <div className="card-body">
                <form style={{marginLeft: "200px", marginRight: "200px"}}>
                    <div className="form-group mt-4 mb-4">
                        <label htmlFor="formGroupExampleInput">Nome</label>
                        <input type="text" className="form-control mt-4" id="formGroupExampleInput" placeholder="Nome completo"/>
                    </div>
                    <div className="form-group mt-4 mb-4">
                        <label htmlFor="formGroupExampleInput2">Identificador</label>
                        <input type="text" className="form-control mt-4" id="formGroupExampleInput2" placeholder="CNPJ/CPF"/>
                    </div>
                    <div className="form-group mt-4 mb-4">
                        <label htmlFor="formGroupExampleInput3">E-mail</label>
                        <input type="text" className="form-control mt-4" id="formGroupExampleInput3" placeholder="e-mail"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Cadastrar</button>
                </form>
                </div>
            </div>
        </div>        
    )
  }
  
  export default FornecedoresCadastro;

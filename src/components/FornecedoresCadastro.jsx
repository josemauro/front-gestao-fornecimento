import axios from "axios";
import { useState } from "react";

function FornecedoresCadastro() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async e => {

        e.preventDefault();

        
        try {
            await axios.post("http://localhost:8181/fornecedores/salvar?id="+id+"&nome="+nome+"&email="+email, )
                        .then((response) => {

                                                console.log("teste", response);
                                                if (response.status == 200){
                                                    alert("Salvo com sucesso!");
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            if (err.response.status == 409){
                alert("Erro ao salvar, fornecedor já existe!");
            } else alert("Erro ao cadastrar fornecedor!");
        }
        
      };

    return (
        <div className="container-fluid px-4 fs-5">
            <h1 className="mt-4">Cadastro de fornecedores</h1>
            <div className="card mt-5">
                <div className="card-body">
                    <form style={{marginLeft: "200px", marginRight: "200px"}} onSubmit={handleSubmit}>
                        <div className="form-group mt-4 mb-4">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control mt-4"
                                   placeholder="Nome completo"
                                   onChange={e => setNome(e.target.value)}
                                   required/>
                            <div className="invalid-feedback">
                                Por favor informe um nome.
                            </div>
                        </div>
                        <div className="form-group mt-4 mb-4">
                            <label>Identificador</label>
                            <input type="text" className="form-control mt-4"
                                   placeholder="CNPJ/CPF"
                                   onChange={e => setId(e.target.value)}
                                   required/>
                        </div>
                        <div className="form-group mt-4 mb-4">
                            <label>E-mail</label>
                            <input type="text" className="form-control mt-4"
                                   placeholder="e-mail"
                                   onChange={e => setEmail(e.target.value)}
                                   required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>        
    )
  }
  
  export default FornecedoresCadastro;

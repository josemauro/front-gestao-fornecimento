import axios from "axios";
import { useState } from "react";

function EmpresasCadastro() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');
    const [cep, setCep] = useState('');
    const [cepValido, setCepValido] = useState(false);

    const validarCEP = async (cep) => {
        
        try {
            await axios.get("http://cep.la/"+cep,{headers: { 'Accept': 'application/json' }})
                        .then((response) => {

                                                if (response.status == 200 && response.data.length != null){
                                                    setCepValido(false);
                                                } else {
                                                    setCepValido(true);
                                                }
                                            })
        } catch (err) {
            console.log(err);
        }
        
      };

    const handleCEP = (event) => {
        let input = event.target;
        let cep = event.target.value
        validarCEP(cep.replace('-',''));
        input.value = mascaraCEP(input.value)
      }
      
    const mascaraCEP = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{5})(\d)/,'$1-$2')
        return value
    }
    
   

    const handleSubmit = async () => {

        if (!cepValido) {
            alert("Insira um CEP válido!");
            return;
        }
        try {
            await axios.post("http://localhost:8181/empresas/salvar?cnpj="+id+"&nomeFantasia="+nome+"&cep="+cep, )
                        .then((response) => {

                                                if (response.status == 200){
                                                    alert("Salvo com sucesso!");
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            if (err.response.status == 409){
                alert("Erro ao salvar, empresa já existe!");
            } else alert("Erro ao cadastrar empresa!");
        }
        
      };

    return (
        <div className="container-fluid px-4 fs-5">
            <h1 className="mt-4">Cadastro de empresas</h1>
            <div className="card mt-5">
                <div className="card-body">
                    <form style={{marginLeft: "200px", marginRight: "200px"}} onSubmit={handleSubmit}>
                        <div className="form-group mt-4 mb-4">
                            <label className="form-label">Nome fantasia</label>
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
                                   placeholder="CNPJ"
                                   onChange={e => setId(e.target.value)}
                                   required/>
                        </div>
                        <div className="form-group mt-4 mb-4">
                            <label>CEP</label>
                            <input type="text" className="form-control mt-4"
                                   maxLength="9" onKeyUp={e => handleCEP(e)}
                                   placeholder="CEP"
                                   onChange={e => setCep(e.target.value)}
                                   required/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-lg">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>        
    )
  }
  
  export default EmpresasCadastro;

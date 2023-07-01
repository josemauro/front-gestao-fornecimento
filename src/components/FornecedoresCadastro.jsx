import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function FornecedoresCadastro() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [pessoaFisica, setPessoaFisica] = useState(false);
    const [rg, setRg] = useState(false);
    const [dataNascimento, setDataNascimento] = useState(new Date());
    //inicializa

    const handleSubmit = async e => {
        
        e.preventDefault();

        var parametros = id+"&nome="+nome+"&email="+email;
        parametros = parametros + '&pessoaFisica=' + pessoaFisica;
        var data = moment(dataNascimento).format('DD/MM/YYYY');
        console.log(data);
        if (pessoaFisica){
            parametros = parametros + '&rg=' + rg;
            parametros = parametros + '&dataNascimento=' + data;
        }

        try {
            await axios.post("http://localhost:8181/fornecedores/salvar?id="+parametros )
                        .then((response) => {

                                                console.log("teste", response);
                                                if (response.status == 200){
                                                    alert("Salvo com sucesso!");
                                                } else {
                                                throw response.data;
                                                }
                                            })
        } catch (err) {
            console.log(err);
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
                        <div style={{width: "350px", marginLeft: "200px", marginRight: "200px", textAlign: "left"}}>    
                            <label >
                                É pessoa física?
                            </label>
                    
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    value={true}
                                    id="flexRadioDefault1"
                                    onChange={e => setPessoaFisica(e.target.value == 'true')}
                                    checked={pessoaFisica}
                                    />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Sim
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    value={false}
                                    onChange={e => setPessoaFisica(e.target.value == 'true')}
                                    id="flexRadioDefault2"
                                    checked={!pessoaFisica}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Não
                                </label>
                            </div>
                        </div>
                        
                        {pessoaFisica && (
                            <>
                            <div className="form-group mt-4 mb-4">
                                <label>RG</label>
                                <input type="text" className="form-control mt-4"
                                    placeholder="RG"
                                    onChange={e => setRg(e.target.value)}
                                    required/>
                                <DatePicker className="form-control mt-4"
                                            selected={dataNascimento}
                                            onChange={(date)=> setDataNascimento(date)}
                                            dateFormat="dd/MM/yyyy"/>
                            </div>
                            
                            </>)}
                        
                        
                        
                        <button type="submit" className="btn btn-primary btn-lg mt-4">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>        
    )
  }
  
  export default FornecedoresCadastro;

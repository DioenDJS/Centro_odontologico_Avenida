import React , {useState} from 'react';
function App() {
    
  //variaveis que iram manipular os campos e listar do jsx
  const [nome, setNome] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [pacienteAtendendo, setPacienteAtendendo] = useState("")

 


  /** function e chamada quando o campo  do input e alterado e seta a 
   * variavel nome que assume o value do que esta sendo digitado no campo 
   */
  const handleNome = event =>{
    setNome(event.target.value);
  }

  /**function que ira adicionar um novo paciente a uma lista de pacientes [] array */
  const handleAdd = event =>{
    event.preventDefault();

    //verifica se o nome informado tem menos de dois digitos e lança um alerta e retorna pro campo input  
    if(nome.trim().length <= 2){
      alert("Por favor, informe o nome do paciente");
      return ;
    }
    /** se passar pela verificação seta o novo paciente mas pra isso fazemos um 
     * spread operator(SPREAD OPERATOR) que vai passar novamente todos os valores do array ja existente e 
     * passa o novo nome */
    setPacientes([...pacientes, nome]);

    // limpando o campo do input value
    setNome("");
    console.log(pacientes)
  }

 
  /** function que seleciona o paciente ha ser atendido verificando se exist algum paciente
   * na primeira posição a posição 0 do array isso sendo verdade seta uma variavel que determina o 
   * paciente que esta sendo atendido e tira o este paciente da dila de espera o array original e
   * sinaliza a uma variavel boolean pra mostra o nome do paciente que esta sendo atendido
   */
  const handleAtend = () =>{
    if(pacientes[0]){
      console.log(pacientes[0])
      setPacienteAtendendo(pacientes[0])
      setIsTrue(true);
      setPacientes(pacientes)
      pacientes.shift()
    }else if(!pacientes[0]){
      setIsTrue(false);
    }
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-sm-4">
          <img 
            src="dentista.jpg"
            alt="imagens_dentista"
            className="img-fluid" 
          />
        </div>
        <div className="col-sm-8">
          <h3>Crento Odontológico Avenida</h3>
          <form onSubmit={handleAdd}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Paciente:</label>
              <input 
                type="text" 
                className="form-control" 
                id="nome" 
                value={nome}
                onChange={handleNome}
              />
            </div>
            <input 
              type="submit" 
              className="btn btn-primary" 
              value="Adicionar"
            />

            <button type="button" className="ml-1 btn btn-success" onClick={handleAtend}>Atender</button>
          </form>

          <h4 className="mt-3">Pacientes na Fila de Espera: </h4>
          <ol className="mt-3 text-primary font-weight-bold">
              {
                pacientes.map(element =>{
                  return(
                  <li key={element}>{element}</li>
                  )
                })
              }
          </ol>
          {
            isTrue && (
              <>
               <h4 className="mt-3">Paciente sendo atendido : </h4>
               <p className="mt-3 text-success font-weight-bold">{pacienteAtendendo}</p>
              </>
            )
          }
        </div>
      </div> 
    </div>//fim div container
  );
}

export default App;

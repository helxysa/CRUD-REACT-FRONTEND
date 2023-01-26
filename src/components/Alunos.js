import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

  /*
    Como criar um construtor pra receber os dados da API

    - Criando um construtor
  
  */


 class Alunos extends React.Component{

  constructor(props){
    super(props);  
    
    this.state = {
      alunos : []
    }
  }

    componentDidMount(){
      this.buscarAluno();
    }

    componentWillUnmount(){
        
    }

    buscarAluno = () => {
      fetch('http://localhost:3030/api/users/aluno').then(resposta => resposta.json()).then(dados => {
        this.setState({ alunos: dados})
      })
    }

    deletarAluno = (id) => {
      fetch('http://localhost:3030/'+id, {
        method: 'DELETE'
      }).then(resposta => {
        if(resposta.ok){
          this.buscarAluno();
        }
      })
    }

  
    renderTabela() {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Prioridade</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.email}</td>
                <td>
                  <div>
                    <Button variant="link" onClick={() => this.abrirModalAtualizar(aluno.id)}>Atualizar</Button>
                    <Button variant="link" onClick={() => this.excluirAluno(aluno.id)}>Excluir</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
  
  
 
    render() {
      return (
        <div>
          <br />
          {this.renderModal()}
        </div>
      );
    }
  }
  

 export default Alunos;
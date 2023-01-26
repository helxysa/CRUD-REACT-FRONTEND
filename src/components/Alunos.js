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
              <th>Nome</th>
              <th>Email</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.name}</td>
                <td>{aluno.email}</td>
                <td>
                  <div>
                    <Button variant="">Atualizar</Button>
                    <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button>
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
          {this.renderTabela()}
        </div>
      );
    }
  }
  

 export default Alunos;
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

  /*
    Como criar um construtor pra receber os dados da API

    - Criando um construtor
  
  */


  
 class TabelaAlunos extends React.Component{

  constructor(props){
    super(props);  
    
    this.state = {
      alunos : [
       
      ]
    }
  }

    componentDidMount(){
      fetch(" ")
    }
    componentWillUnmount(){
        
    }

  render(){
    return(
      <Table striped bordered hover>
<thead>
  <tr>
    <th>Nome</th>
    <th>Email</th>
    <th>Opções</th>
  </tr>
</thead>
<tbody>
  {
    this.state.alunos.map((aluno) => 
  <tr>
      <td> {aluno.nome} </td>
      <td> {aluno.email} </td>
      <td>Atualizar Excluir</td>
  </tr>

    )
  }
</tbody>
      </Table>
    )
  }
 };
 export default TabelaAlunos;
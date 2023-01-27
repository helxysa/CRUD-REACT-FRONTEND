import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
  /*
    Como criar um construtor pra receber os dados da API

    - Criando um construtor
  
  */


 class Alunos extends React.Component{

  //CONSTRUCTOR DO JSON
  constructor(props){
    super(props);  
    
    this.state = {
      id: 0,
      name: "",
      email: "",
      course: "",
      alunos : []
    }
  }

//COMPONENTDIDMOUNT QUE SERVE PRA QUANDO A ABA DO MENU É APERTA
    componentDidMount(){
      this.buscarAluno();
    }



    //Get
    buscarAluno = () => {
      fetch('http://localhost:3030/aluno').then(resposta => resposta.json()).then(aluno => {
        this.setState({ alunos: aluno})
      })
    }

    //DELETE
    deletarAluno = (id) => {
      fetch('http://localhost:3030/'+id, {
        method: 'DELETE'
      }).then(resposta => {
        if(resposta.ok){
          this.buscarAluno();
        }else{
          alert('Não foi possivel adicionar o aluno')
        }
      })
    }

    //GET (ALUNO COM UM ID)
    carregarDados = (id) => {
      fetch('http://localhost:3030/aluno/' +id, {
        method: 'GET'
      }).then(resposta => resposta.json()).then(aluno => {
        this.setState({ 
          aluno: aluno.id,
          name: aluno.name,
          email: aluno.email
        })
      })
    }

    // POST ALUNO
    cadastraAluno = (aluno) => {
      fetch('http://localhost:3030/cadastro', {
        method: 'POST'
      , headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(aluno)
    }
      ).then(resposta => {
        if(resposta.ok){
          this.buscarAluno();
        }
      })
    }

    //PUT
    atualizarAluno = (aluno) => {
      fetch('http://localhost:3030/atualizar'+aluno.id, {
        method: 'PUT'
      , headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(aluno)
    }
      ).then(resposta => {
        if(resposta.ok){
          this.buscarAluno();
        } else{
          alert(JSON.stringify(resposta))
        }
      })
    }


    // ENVIANDO OS DADOS PRO POST

    atualizaNome = (e) => {
      this.setState(
        {
           name: e.target.value,
        }
      )
    }
    
    atualizaEmail = (e) => {
      this.setState(
        {
           email: e.target.value,
        }
      )
    }
    
    atualizaCurso = (e) => {
      this.setState(
        {
           course: e.target.value,
        }
      )
    }

    //

    // SUBMIT PRO POST
    submit = () => {
      if(this.state.id === 0){
        const aluno = {
          name: this.state.name,
          email: this.state.email,
          course: this.state.course,
        }
        this.cadastraAluno(aluno)
      
      } else {
        const aluno = {
          id: this.state.id,
          email: this.state.email,
          course: this.state.course,
        }
        this.atualizarAluno(aluno)
      }
    }
    

    

    // RENDERS

    renderModal(){
      return(
        <Modal>
        <Form>
        <Form.Group className="m-3" >
          <Form.Label>ID</Form.Label>
          <Form.Control  value={this.state.id} readOnly={true}/>
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Label>Nome</Form.Label>
          <Form.Control  value={this.state.name} readOnly={true}/>
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Insira seu email" value={this.state.email} onChange={this.atualizaEmail} />
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Insira seu curso" value={this.state.course}  onChange={this.atualizaCurso} />
        </Form.Group>
        <Button variant="primary" type="submit" className='m-3' onClick={this.submit} >
          Salvar
        </Button>
      </Form>
      </Modal>
      )  
    }

    renderFormulario(){
      return(
        <Form>
        <Form.Group className="m-3" >
          <Form.Label>Nome</Form.Label>
          <Form.Control type="name" placeholder="Insira seu nome" value={this.state.name} onChange={this.atualizaNome}/>
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Insira seu email" value={this.state.email} onChange={this.atualizaEmail} />
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Insira seu curso" value={this.state.course}  onChange={this.atualizaCurso} />
        </Form.Group>
        <Button variant="primary" type="submit" className='m-3' onClick={this.submit} >
          Cadastrar
        </Button>
      </Form>

      );
    }
    
  
    renderTabela() {
      return (
        <Table striped bordered hover className='m-3'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Curso</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.name}</td>
                <td>{aluno.email}</td>
                <td>{aluno.course}</td>
                <td>
                  <div>
                  <Button variant="secondary" onClick={() => this.carregarDados(aluno.id)}>Atualizar</Button>
                    <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
  

  
 
    // RENDER PRINCIPAL
    render() {
      return (
        <div>
          <br />
          {this.renderModal()}
          {this.renderFormulario()}
          {this.renderTabela()}
        </div>
      );
    }
  }
  

 export default Alunos;
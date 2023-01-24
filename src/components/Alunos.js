import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Alunos(){
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log(name)
    }
    setValidated(true);
  }


  return(
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='m-1'>Nome</Form.Label>
          <Form.Control type='text' placeholder='Insira seu nome'
          className='m-1' required></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className='m-1'>Email</Form.Label>
          <Form.Control type='email' placeholder='Insira seu email' className='m-1' required></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className='m-1' >Curso</Form.Label>
          <Form.Control type='text' placeholder='Insira seu curso' className='m-1' required></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit' className='m-1'>
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}
export default Alunos;
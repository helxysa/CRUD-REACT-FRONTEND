// // import React, {useState} from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';

// function Cadastro(){
//   return(
//     <p>Sobre</p>
//   )
// }

function Sobre(){
  return(
    <div>
      <p>Sobre</p>
    </div>
  )
}
export default Sobre;



// export default Sobre;
// function Alunos(){ 
//   const cont = 0;
//   const [validated, setValidated] = useState(false)
//   const [id, setId] = useState(cont+1)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [course, setCourse] = useState('')
 

//   const Info = [
//     {
//       id:1,
//       name: 'João',
//       email: 'joao@mail.com',
//       course: 'Artes'
//     },
//     {
//       id:2,
//       name: 'marcos',
//       email: 'marcos@mail.com',
//       course: 'Direito'
//     }
//   ]
//   const [lists, setList] = useState(Info);
  


//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if(form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
       
//     }
//     setValidated(true);
//     name = event.target.elements.name.value;
    


//     alert('Cadastro de Usuario Feito')
//   }
  
//   const Cadastrado = (event) => {
   
//   }

//   return(
//     <div>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label className='m-1'>Nome</Form.Label>
//           <Form.Control type='text' placeholder='Insira seu nome'
//           className='m-1' required></Form.Control>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label className='m-1'>Email</Form.Label>
//           <Form.Control type='email' placeholder='Insira seu email' className='m-1' required></Form.Control>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label className='m-1' >Curso</Form.Label>
//           <Form.Control type='text' placeholder='Insira seu curso' className='m-1' required></Form.Control>
//         </Form.Group>
//         <Button variant='primary' type='submit' className='m-1'
//        > Enviar
//         </Button>
//       </Form>
//     </div>
//   )
// }
// export default Alunos;
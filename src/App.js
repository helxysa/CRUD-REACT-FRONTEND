import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import { BrowserRouter, Link, Route, Routes} from  'react-router-dom'
import { Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1 >Cadastro de Alunos</h1>
        <BrowserRouter>
       <Nav variant='tabs'>
          <Nav.Link as={Link} to='/' > Pagina Inicial </Nav.Link>
          <Nav.Link as={Link} to='/alunos' > Cadastro de Alunos </Nav.Link>
          <Nav.Link as={Link} to='/sobre' > Alunos </Nav.Link>
       </Nav>
      <Routes>
        <Route path='/'  element={<Home/>} ></Route>
        <Route path='/alunos' element={<Alunos/>} ></Route>
        <Route path='/sobre' element={<Sobre/>} ></Route>
      </Routes>
        </BrowserRouter>
      
    </div>  
  );
}

export default App;

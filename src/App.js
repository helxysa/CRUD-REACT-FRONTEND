import Home from './components/Home';
import TabelaAlunos from './components/TabelaAlunos';
import { BrowserRouter, Link, Route, Routes} from  'react-router-dom'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alunos from './components/Alunos';

function App() {
  return (
    <div className="App">
      <h1 >Cadastro de Alunos</h1>
        <BrowserRouter>
       <Nav variant='tabs'>
          <Nav.Link as={Link} to='/' > Pagina Inicial </Nav.Link>
          <Nav.Link as={Link} to='/alunos' > Cadastro de Alunos </Nav.Link>
          <Nav.Link as={Link} to='/tabela' > Alunos </Nav.Link>
       </Nav>
      <Routes>
        <Route path='/'  element={<Home/>} ></Route>
        <Route path='/alunos' element={<Alunos/>} ></Route>
        <Route path='/tabela' element={<TabelaAlunos/>} ></Route>
      </Routes>
        </BrowserRouter>
      
    </div>  
  );
}

export default App;

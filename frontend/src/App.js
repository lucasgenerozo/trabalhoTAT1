import { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { Container } from 'react-bootstrap';


function App() {
  const [logado, setLogado] = useState(false);
  
  return (
    <Container className='App pt-2 my-5 mx-auto w-75'>
      {
        logado
        ? <HomePage setLogado={setLogado} />
        : <LoginPage setLogado={setLogado} />
      }
    </Container>
  );
}

export default App;

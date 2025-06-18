import React, { useState } from 'react';
import { Button, Form, Alert, Spinner } from 'react-bootstrap';
import api from '../utils/api';

function LoginPage({ setLogado }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Impede o envio do form

    setLoading(true);
    setError('');

    try {
      const payload = {
        email: email.trim(),
        password: password
      };

      const response = await api.post('/login', payload);
      
      localStorage.setItem('token', response.data.data.token);
      
      setLogado(true);
      
    } catch (err) {
      setError('Credenciais inválidas ou erro ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-5 mx-auto' style={{ maxWidth: '400px' }}>
      <h2 className='mb-4'>Login</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin} autoComplete="off">
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Digite seu email"
          />
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Digite sua senha"
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          disabled={loading} 
          className='w-100'
        >
          {loading ? <Spinner animation="border" size="sm" /> : 'Entrar'}
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;

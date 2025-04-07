import './App.css';
import { Button, Container, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import InvoicesList from './Invoice/InvoiceList';
import CreateInvoiceModal from './Invoice/Modals/CreateInvoiceModal';
import api from './utils/api';

function App() {

  let [invoices, setInvoices] = useState(null);

  const getInvoices = async () => {
    try {
      const invoicesData = await api.get('/invoices');
      setInvoices(invoicesData.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInvoices()
  }, [])

  const EmptyInvoicesMessage = () => {
    return (
      <tr>
        <td colSpan={5}>
          <p>Não foram encontrados registros</p>
        </td>
      </tr>
    );
  }

  const [showCreate, setShowCreate] = useState(false);

  const toggleCreateInvoiceModal = () => setShowCreate(!showCreate);

  return (
      <Container className='App my-5 mx-3'>
        <div className='d-flex flex-row justify-content-between'>
          <h1 className='mb-5'>Controle financeiro pessoal</h1>
          <span>
            <Button variant='primary' onClick={toggleCreateInvoiceModal}>Novo registro</Button>
          </span>
        </div>
        <Table hover bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Descricao</th>
              <th>Valor</th>
              <th align='right'>Menu</th>
            </tr>
          </thead>
          <tbody>
            { 
              (invoices == null)
              ? <EmptyInvoicesMessage />  
              : <InvoicesList invoices={invoices} callback={getInvoices} />
            }
          </tbody>
        </Table>

        <CreateInvoiceModal show={showCreate} hideCreateInvoiceModel={toggleCreateInvoiceModal} callback={getInvoices} />
      </Container>
  );
}

export default App;

import './App.css';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import InvoicesList from './Invoice/InvoiceList';
import CreateInvoiceModal from './Invoice/Modals/CreateInvoiceModal';
import api from './utils/api';

function App() {

  let [invoices, setInvoices] = useState(null);
  let [loading, setLoading] = useState(true);

  const getInvoices = async () => {
    try {
      const invoicesData = await api.get('/invoices');
      setLoading(true);
      setInvoices(invoicesData.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInvoices()
  }, [])

  const EmptyInvoicesMessage = () => (
    <tr>
      <td colSpan={5}>
        <p>Não foram encontrados registros</p>
      </td>
    </tr>
  );

  const Loading = () => (
    <tr>
      <td colSpan={5}>
        <div className='w-100 d-flex justify-content-center align-content-center'>
          <Spinner />
        </div>
      </td>
    </tr>
  );

  const [showCreate, setShowCreate] = useState(false);

  const toggleCreateInvoiceModal = () => setShowCreate(!showCreate);

  return (
      <Container className='App my-5 mx-auto w-75'>
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
              loading
              ? <Loading />
              : (
                invoices === null || invoices.length === 0
                ? <EmptyInvoicesMessage />  
                : <InvoicesList invoices={invoices} callback={getInvoices} />
              )
            }
          </tbody>
        </Table>

        <CreateInvoiceModal show={showCreate} hideCreateInvoiceModel={toggleCreateInvoiceModal} callback={getInvoices} />
      </Container>
  );
}

export default App;

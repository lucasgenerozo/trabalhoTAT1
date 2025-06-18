import { Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import InvoicesList from '../Invoice/InvoiceList';
import CreateInvoiceModal from '../Invoice/Modals/CreateInvoiceModal';
import api from '../utils/api';
import Loading from '../Components/Loading';

function HomePage({ setLogado })
{
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);

  const getInvoices = async () => {
    try {
      const invoicesData = await api.get('/invoices');
      setLoading(true);
      setBalance(invoicesData.data.balance)
      setInvoices(invoicesData.data.data); // data do atributo do js e data do retorno
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

  const LoadingRow = () => (
    <tr>
      <td colSpan={5}>
        <Loading />
      </td>
    </tr>
  );

  const [showCreate, setShowCreate] = useState(false);

  const toggleCreateInvoiceModal = () => setShowCreate(!showCreate);

  const handleClick = () => {
    setLogado(false);
  }

  return (
      <>
        <div className='d-flex flex-row justify-content-end mb-5'>
          <Button role='button' 
                  onClick={handleClick} 
                  variant='outline-dark'>
            Sair
          </Button>
        </div>
        <div className='d-flex flex-row justify-content-between'>
          <h1 className='mb-5 fs-2'>Controle financeiro pessoal</h1>
          <span>
            <Button variant='primary' onClick={toggleCreateInvoiceModal}>Novo registro</Button>
          </span>
        </div>
        <h2 className='my-3 fs-5'>
          Saldo:&nbsp;
          <span className={`text-${balance > 0 ? 'success' : 'danger'}`}>R${balance}</span>
        </h2>
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
              ? <LoadingRow />
              : (
                invoices === null || invoices.length === 0
                ? <EmptyInvoicesMessage />  
                : <InvoicesList invoices={invoices} callback={getInvoices} />
              )
            }
          </tbody>
        </Table>

        <CreateInvoiceModal show={showCreate} hideCreateInvoiceModel={toggleCreateInvoiceModal} callback={getInvoices} />
      </>
  );
}

export default HomePage;
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Pencil, ThreeDots, XCircle } from "react-bootstrap-icons";
import DestroyInvoiceModal from "./Modals/DestroyInvoiceModal";
import UpdateInvoiceModal from "./Modals/UpdateInvoiceModal";

function InvoiceListMenu({ invoice, callback }) {

  const [showDestroy, setShowDestroy] = useState(false);
  const [showUpdate, setshowUpdete] = useState(false);

  const toggleDestroyInvoiceModal = () => setShowDestroy(!showDestroy);
  const toggleUpdateInvoiceModal = () => setshowUpdete(!showUpdate);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="outlined-success" id="dropdown-basic">
          <ThreeDots />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="" onClick={toggleUpdateInvoiceModal}>
            <div className='d-flex flex-row align-items-center'>
              <Pencil size="14" className='me-3' />
              <span>Alterar</span> 
            </div>
          </Dropdown.Item>
          <Dropdown.Item href='' onClick={toggleDestroyInvoiceModal}>
            <div className='d-flex flex-row align-items-center'>
              <XCircle size="14" className='me-3' />
              <span>Excluir</span> 
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <DestroyInvoiceModal show={showDestroy} 
                           hideDestroyInvoiceModal={toggleDestroyInvoiceModal} 
                           invoice={invoice} 
                           callback={callback} />

      <UpdateInvoiceModal show={showUpdate} 
                          hideUpdateInvoiceModal={toggleUpdateInvoiceModal} 
                          invoice={invoice} 
                          callback={callback} />
    </>
  );
}

export default InvoiceListMenu;
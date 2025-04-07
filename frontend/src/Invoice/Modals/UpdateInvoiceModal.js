import { Button, Modal } from "react-bootstrap";
import InvoiceForm from "../InvoiceForm";
import api from '../../utils/api';

function UpdateInvoiceModal ({ show, hideUpdateInvoiceModal, callback, invoice }) {

    const sendForm = async () => {
        try {
            await api.put(`/invoices/${invoice.id}`)
            callback();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Alterar registro financeiro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InvoiceForm id="formUpdate" invoice={invoice} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideUpdateInvoiceModal}>
                Cancelar
                </Button>
                <Button variant="primary" onClick={sendForm}>Gravar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateInvoiceModal;
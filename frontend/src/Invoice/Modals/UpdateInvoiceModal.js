import { Button, Modal } from "react-bootstrap";
import InvoiceForm from "../InvoiceForm";

function UpdateInvoiceModal ({ show, hideUpdateInvoiceModal, invoice }) {
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
                <Button variant="primary">Gravar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateInvoiceModal;
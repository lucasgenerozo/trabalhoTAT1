import { Button, Modal } from "react-bootstrap";
import InvoiceForm from "../InvoiceForm";

function CreateInvoiceModal ({ show, hideCreateInvoiceModel, callback }) {
    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Criar registro financeiro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InvoiceForm id="formUpdate" invoice={null} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideCreateInvoiceModel}>
                Cancelar
                </Button>
                <Button variant="primary">Gravar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateInvoiceModal;
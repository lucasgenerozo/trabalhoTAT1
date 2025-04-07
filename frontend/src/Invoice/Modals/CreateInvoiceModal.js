import { Button, Modal } from "react-bootstrap";
import InvoiceForm from "../InvoiceForm";
import api from '../../utils/api';

function CreateInvoiceModal ({ show, hideCreateInvoiceModel, callback }) {

    const sendForm = async () => {
        try {
            const invoice = {};
            await api.post('/invoices', invoice);
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
                <Modal.Title>Criar registro financeiro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InvoiceForm id="formUpdate" invoice={null} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideCreateInvoiceModel}>
                Cancelar
                </Button>
                <Button variant="primary" onClick={sendForm}>Gravar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateInvoiceModal;
import { Button, Modal } from "react-bootstrap";
import api from '../../utils/api';

function DestroyInvoiceModal ({ show, hideDestroyInvoiceModal, invoice, callback }) {

    const sendForm = async () => {
        try {
            await api.delete(`/invoices/${invoice.id}`);
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
                <Modal.Title>Confirme a exclusão do registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Você tem certeza que deseja excluir esse registro financeiro? Não será possivel recupera-lo após a exclusão.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideDestroyInvoiceModal}>
                Cancelar
                </Button>
                <Button variant="primary" onClick={sendForm}>Confirmar</Button>
            </Modal.Footer>
    </Modal>
    );
}

export default DestroyInvoiceModal;
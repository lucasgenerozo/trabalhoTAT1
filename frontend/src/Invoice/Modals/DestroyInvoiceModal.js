import { Button, Modal } from "react-bootstrap";

function DestroyInvoiceModal ({ show, hideDestroyInvoiceModal }) {

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
                <Button variant="primary">Confirmar</Button>
            </Modal.Footer>
    </Modal>
    );
}

export default DestroyInvoiceModal;
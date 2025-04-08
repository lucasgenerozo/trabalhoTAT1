import { Modal } from "react-bootstrap";
import api from '../../utils/api';
import { useState } from "react";
import InvoiceForm from "../InvoiceForm";

function CreateInvoiceModal ({ show, hideCreateInvoiceModel, callback }) {

    const initialInvoice = {
        type: '',
        description: '',
        amount: ''
    };

    const [invoice, setInvoice] = useState(initialInvoice);

    const handleClick = () => {
        setInvoice(initialInvoice);     
        hideCreateInvoiceModel();
    }

    const  handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/invoices`, invoice);
        } catch (e) {
            console.log(e);
        } finally {
            callback();
            hideCreateInvoiceModel();
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
                <InvoiceForm invoice={invoice} 
                             handleChange={handleChange}
                             handleSubmit={handleSubmit} 
                             handleClick={handleClick}
                />
            </Modal.Body>
        </Modal>
    );
}

export default CreateInvoiceModal;
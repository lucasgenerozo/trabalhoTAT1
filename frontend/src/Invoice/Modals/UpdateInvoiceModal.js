import { Modal } from "react-bootstrap";
import api from '../../utils/api';
import InvoiceForm from "../InvoiceForm";
import { useState } from "react";

function UpdateInvoiceModal ({ show, hideUpdateInvoiceModal, callback, invoiceJSON }) {

    const [invoice, setInvoice] = useState({
        id: invoiceJSON.id,
        type: invoiceJSON.type,
        description: invoiceJSON.description,
        amount: invoiceJSON.amount
    });

    const handleClick = () => {
        hideUpdateInvoiceModal();
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
            await api.put(`/invoices/${invoice.id}`, invoice);
        } catch (e) {
            console.log(e);
        } finally {
            callback();
            hideUpdateInvoiceModal();
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
                <InvoiceForm invoice={invoice} 
                             handleChange={handleChange}
                             handleSubmit={handleSubmit} 
                             handleClick={handleClick}
                />
            </Modal.Body>
        </Modal>
    );
}

export default UpdateInvoiceModal;
import { Button, Form } from "react-bootstrap";

function InvoiceForm({ invoice, handleChange, handleSubmit, handleClick }) {

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Group className="mb-3">
                <Form.Label>Digite o tipo da movimentação: </Form.Label>
                <Form.Select id="type" name="type" value={invoice.type} onChange={handleChange} required>
                    <option value="">Selecione...</option>
                    <option value="C">Entrada</option>
                    <option value="D">Saída</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Digite a descrição da movimentação: </Form.Label>
                <Form.Control id="description" name="description" value={invoice.description} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Digite o valor: </Form.Label>
                <Form.Control type="number" id="amount" name="amount" value={invoice.amount} onChange={handleChange} required/>
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button variant="secondary" type="reset" className="me-3" onClick={handleClick}>Cancelar</Button>
                <Button variant="primary" type="submit">Gravar</Button>
            </div>
        </Form>
    );
}

export default InvoiceForm;
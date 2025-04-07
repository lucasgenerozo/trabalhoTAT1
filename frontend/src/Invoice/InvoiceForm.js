import { Form } from "react-bootstrap";

function InvoiceForm({ invoice }) {

    let initialId   = '';
    let initialType = '';
    let initialDescription = '';
    let initialValue = '';

    if (invoice != null) {
        initialId   = invoice.id;
        initialType = invoice.type;
        initialDescription = invoice.description;
        initialValue = invoice.value;
    }

    return (
        <Form>
            <input type="hidden" id="id" name="id" defaultValue={initialId} />
            <Form.Group className="mb-3">
                <Form.Label>Digite o tipo da movimentação: </Form.Label>
                <Form.Select id="type" name="type" defaultValue={initialType}>
                    <option defaultChecked value="C">Entrada</option>
                    <option value="C">Saída</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Digite a descrição da movimentação: </Form.Label>
                <Form.Control id="description" name="description" defaultValue={initialDescription} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Digite o valor: </Form.Label>
                <Form.Control type="number" id="value" name="value" defaultValue={initialValue} required/>
            </Form.Group>
        </Form>
    );
}

export default InvoiceForm;
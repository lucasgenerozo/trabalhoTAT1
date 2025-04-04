import { Form, Button } from "bootstrap";

function Form() {
    return (
        <form>
            <div>
                <Form.Label>Digite a descrição da movimentação: </Form.Label>
                <Form.Control id="description" required/>
            </div>
            <Button variant="primary">Gravar</Button>
        </form>
    );
}

export default form;
import InvoiceListMenu from "./InvoiceListMenu";

function InvoicesList({ invoices, callback }) {
  return invoices.map(invoice => (
        <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.type}</td>
            <td>{invoice.description}</td>
            <td>{invoice.value}</td>
            <td>
                <InvoiceListMenu invoice={invoice} callback={callback} />
            </td>
        </tr>
    ));
}

export default InvoicesList; 
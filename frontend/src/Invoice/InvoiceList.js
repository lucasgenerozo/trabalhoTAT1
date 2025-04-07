import InvoiceListMenu from "./InvoiceListMenu";

function InvoicesList({ invoices }) {
  return invoices.map(invoice => (
        <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.type}</td>
            <td>{invoice.description}</td>
            <td>{invoice.value}</td>
            <td>
                <InvoiceListMenu invoice={invoice} />
            </td>
        </tr>
    ));
}

export default InvoicesList; 
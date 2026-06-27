import { useState } from "react";

const defaultInvoiceData = {
  companyName: "Vivek Kitchen Studio",
  address: "12, Garden Lane, Jaipur, Rajasthan",
  phone: "+91 98765 43210",
  email: "vivek@kitchenstudio.com",
  gst: "08ABCDE1234F1Z5",
  invoiceNo: "111",
  invoiceDate: "27/06/2026",
  dueDate: "27/07/2026",
  billedTo: "Vivek Sir",
  customerAddress: "Client Address, Jaipur",
  customerPhone: "+91 90000 00000",
  project: "Premium Modular Kitchen Installation",
  items: [
    { description: "Kitchen design consultation", qty: 1, rate: 25000 },
    { description: "Cabinet materials & fittings", qty: 1, rate: 120000 },
    { description: "Installation & finishing work", qty: 1, rate: 35000 },
  ],
  notes: "Payment can be made by bank transfer or UPI. Thank you for choosing our services.",
};

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function Invoice({ onBack }) {
  const [invoiceData, setInvoiceData] = useState(defaultInvoiceData);

  const updateField = (field) => (event) => {
    setInvoiceData({
      ...invoiceData,
      [field]: event.target.value,
    });
  };

  const updateItem = (index, field) => (event) => {
    const newItems = invoiceData.items.map((item, itemIndex) =>
      itemIndex === index
        ? { ...item, [field]: field === "qty" || field === "rate" ? Number(event.target.value) : event.target.value }
        : item
    );
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: "", qty: 1, rate: 0 }],
    });
  };

  const removeItem = (index) => {
    setInvoiceData({
      ...invoiceData,
      items: invoiceData.items.filter((_, itemIndex) => itemIndex !== index),
    });
  };

  const subtotal = invoiceData.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="invoice-page">
      <style>{`
        .invoice-page {
          min-height: 100vh;
          padding: 24px;
          background: #f5f7fb;
          font-family: Inter, Arial, sans-serif;
          color: #1f2937;
        }

        .invoice-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .back-button,
        .print-btn,
        .secondary-btn {
          border: none;
          cursor: pointer;
          border-radius: 999px;
          font-weight: 600;
        }

        .back-button {
          background: #111827;
          color: white;
          padding: 12px 20px;
        }

        .print-btn {
          background: #0f766e;
          color: white;
          padding: 12px 20px;
        }

        .invoice-body {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 24px;
        }

        .invoice-form,
        .invoice-preview {
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .invoice-form h2,
        .invoice-preview h2 {
          margin-top: 0;
          font-size: 22px;
          color: #0f172a;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group input,
        .form-group textarea {
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
        }

        .form-group textarea {
          min-height: 96px;
          resize: vertical;
        }

        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
        }

        .items-table th,
        .items-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 10px;
          text-align: left;
        }

        .items-table th {
          color: #475569;
          background: #f8fafc;
        }

        .item-controls {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .secondary-btn {
          padding: 10px 16px;
          color: #0f172a;
          background: #e2e8f0;
        }

        .invoice-preview {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .invoice-card {
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          padding: 26px;
        }

        .invoice-card .invoice-header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .brand-block h1 {
          margin: 0 0 10px;
          font-size: 26px;
          color: #0f172a;
        }

        .brand-block p,
        .meta-card p,
        .notes-box p {
          margin: 4px 0;
          color: #475569;
          line-height: 1.6;
        }

        .invoice-title h2 {
          margin: 0 0 10px;
          font-size: 24px;
          color: #0f766e;
        }

        .invoice-meta {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          margin-bottom: 20px;
        }

        .meta-card {
          background: #f8fafc;
          padding: 16px;
          border-radius: 14px;
        }

        .totals {
          display: flex;
          justify-content: flex-end;
        }

        .totals-box {
          min-width: 260px;
          background: #f8fafc;
          border-radius: 12px;
          padding: 18px;
        }

        .totals-row {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }

        .notes-box {
          border-top: 1px solid #e2e8f0;
          padding-top: 16px;
        }

        @media (max-width: 1024px) {
          .invoice-body {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          body {
            background: white;
          }

          .invoice-page {
            padding: 0;
            background: white;
          }

          .invoice-header-row,
          .invoice-form,
          .secondary-btn {
            display: none;
          }

          .invoice-card {
            border: none;
            box-shadow: none;
            padding: 0;
          }
        }
      `}</style>

      <div className="invoice-header-row">
        <button className="back-button" onClick={onBack}>
          Back to Website
        </button>
        <div>
          <button className="print-btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="invoice-body">
        <div className="invoice-form">
          <h2>Invoice Form</h2>

          <div className="form-grid">
            <div className="form-group">
              <label>Company Name</label>
              <input value={invoiceData.companyName} onChange={updateField("companyName")} />
            </div>
            <div className="form-group">
              <label>Invoice No</label>
              <input value={invoiceData.invoiceNo} onChange={updateField("invoiceNo")} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea value={invoiceData.address} onChange={updateField("address")} />
            </div>
            <div className="form-group">
              <label>Invoice Date</label>
              <input value={invoiceData.invoiceDate} onChange={updateField("invoiceDate")} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value={invoiceData.phone} onChange={updateField("phone")} />
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input value={invoiceData.dueDate} onChange={updateField("dueDate")} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input value={invoiceData.email} onChange={updateField("email")} />
            </div>
            <div className="form-group">
              <label>GST Number</label>
              <input value={invoiceData.gst} onChange={updateField("gst")} />
            </div>
            <div className="form-group">
              <label>Billed To</label>
              <input value={invoiceData.billedTo} onChange={updateField("billedTo")} />
            </div>
            <div className="form-group">
              <label>Project</label>
              <input value={invoiceData.project} onChange={updateField("project")} />
            </div>
            <div className="form-group">
              <label>Customer Address</label>
              <textarea value={invoiceData.customerAddress} onChange={updateField("customerAddress")} />
            </div>
            <div className="form-group">
              <label>Customer Phone</label>
              <input value={invoiceData.customerPhone} onChange={updateField("customerPhone")} />
            </div>
          </div>

          <div className="items-table-container">
            <h3 className="mt-6">Items</h3>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        value={item.description}
                        onChange={updateItem(index, "description")}
                        className="w-full border-none bg-transparent p-0"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={updateItem(index, "qty")}
                        className="w-full border-none bg-transparent p-0"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={item.rate}
                        onChange={updateItem(index, "rate")}
                        className="w-full border-none bg-transparent p-0"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="secondary-btn"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="item-controls">
              <button type="button" className="secondary-btn" onClick={addItem}>
                Add Item
              </button>
            </div>
          </div>

          <div className="form-group mt-6">
            <label>Notes</label>
            <textarea value={invoiceData.notes} onChange={updateField("notes")} />
          </div>
        </div>

        <div className="invoice-preview">
          <h2>Invoice Preview</h2>
          <div className="invoice-card">
            <div className="invoice-header">
              <div className="brand-block">
                <h1>{invoiceData.companyName}</h1>
                <p>{invoiceData.address}</p>
                <p>Phone: {invoiceData.phone}</p>
                <p>Email: {invoiceData.email}</p>
                <p>GST: {invoiceData.gst}</p>
              </div>

              <div className="invoice-title">
                <h2>Sales Invoice</h2>
                <p>Invoice No: {invoiceData.invoiceNo}</p>
                <p>Date: {invoiceData.invoiceDate}</p>
                <p>Due Date: {invoiceData.dueDate}</p>
              </div>
            </div>

            <div className="invoice-meta">
              <div className="meta-card">
                <h3>Billed To</h3>
                <p>{invoiceData.billedTo}</p>
                <p>{invoiceData.customerAddress}</p>
                <p>Phone: {invoiceData.customerPhone}</p>
              </div>

              <div className="meta-card">
                <h3>Project Details</h3>
                <p>{invoiceData.project}</p>
                <p>Payment Terms: Due on receipt</p>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>{item.qty}</td>
                    <td>{currency.format(item.rate)}</td>
                    <td>{currency.format(item.qty * item.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="totals">
              <div className="totals-box">
                <div className="totals-row">
                  <span>Subtotal</span>
                  <span>{currency.format(subtotal)}</span>
                </div>
                <div className="totals-row">
                  <span>Tax (10%)</span>
                  <span>{currency.format(tax)}</span>
                </div>
                <div className="totals-row">
                  <strong>Total</strong>
                  <strong>{currency.format(total)}</strong>
                </div>
              </div>
            </div>

            <div className="notes-box">
              <h3>Notes</h3>
              <p>{invoiceData.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

import { useEffect, useMemo, useState } from "react";
import companyLogo from "../assets/hero.png";

const companyInfo = {
  companyName: "Vivek Kitchen Studio",
  address: "12, Garden Lane, Jaipur, Rajasthan",
  phone: "+91 98765 43210",
  email: "vivek@kitchenstudio.com",
  gst: "08ABCDE1234F1Z5",
};

const adminCredentials = {
  email: "admin@kitchenstudio.com",
  password: "admin123",
};

const storageKey = "kitchen-invoice-system";
const emptyItem = { name: "", qty: 1, rate: 0 };

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function Invoice({ onBack }) {
  const [auth, setAuth] = useState({ email: "", password: "", error: "", loggedIn: false });
  const [invoiceForm, setInvoiceForm] = useState({
    customerName: "",
    customerAddress: "",
    customerMobile: "",
    tax: 0,
    discount: 0,
    notes: "",
    items: [{ ...emptyItem }],
  });
  const [invoices, setInvoices] = useState([]);
  const [activeInvoiceId, setActiveInvoiceId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedSession = window.localStorage.getItem("kitchen-invoice-session");
    if (storedSession === "active") {
      setAuth((prev) => ({ ...prev, loggedIn: true }));
    }

    const storedInvoices = window.localStorage.getItem(storageKey);
    if (storedInvoices) {
      try {
        const parsed = JSON.parse(storedInvoices);
        if (Array.isArray(parsed)) {
          setInvoices(parsed);
          if (parsed[0]) {
            setActiveInvoiceId(parsed[0].id);
          }
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(invoices));
    }
  }, [invoices]);

  const previewInvoice = useMemo(() => {
    const subtotal = invoiceForm.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
    const taxAmount = subtotal * (invoiceForm.tax / 100);
    const discountAmount = subtotal * (invoiceForm.discount / 100);
    const total = subtotal + taxAmount - discountAmount;

    return {
      ...companyInfo,
      invoiceNo: "PENDING",
      invoiceDate: new Date().toLocaleDateString("en-IN"),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN"),
      customerName: invoiceForm.customerName || "Customer Name",
      customerAddress: invoiceForm.customerAddress || "Customer Address",
      customerMobile: invoiceForm.customerMobile || "Mobile Number",
      items: invoiceForm.items,
      tax: invoiceForm.tax,
      discount: invoiceForm.discount,
      notes: invoiceForm.notes || "Payment due on receipt.",
      subtotal,
      taxAmount,
      discountAmount,
      total,
    };
  }, [invoiceForm]);

  const activeInvoice = invoices.find((invoice) => invoice.id === activeInvoiceId) || previewInvoice;

  const updateField = (field) => (event) => {
    const value = ["tax", "discount"].includes(field) ? Number(event.target.value) : event.target.value;
    setInvoiceForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateItem = (index, field) => (event) => {
    const value = field === "qty" || field === "rate" ? Number(event.target.value) : event.target.value;

    setInvoiceForm((prev) => ({
      ...prev,
      items: prev.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = () => {
    setInvoiceForm((prev) => ({ ...prev, items: [...prev.items, { ...emptyItem }] }));
  };

  const removeItem = (index) => {
    setInvoiceForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (auth.email === adminCredentials.email && auth.password === adminCredentials.password) {
      setAuth({ ...auth, loggedIn: true, error: "" });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("kitchen-invoice-session", "active");
      }
    } else {
      setAuth({ ...auth, error: "Invalid admin credentials. Try admin@kitchenstudio.com / admin123" });
    }
  };

  const handleLogout = () => {
    setAuth({ email: "", password: "", error: "", loggedIn: false });
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("kitchen-invoice-session");
    }
  };

  const handleGenerateInvoice = (event) => {
    event.preventDefault();

    if (!invoiceForm.customerName.trim()) {
      setAuth((prev) => ({ ...prev, error: "Please enter the customer name before generating the invoice." }));
      return;
    }

    if (!invoiceForm.items.some((item) => item.name.trim())) {
      setAuth((prev) => ({ ...prev, error: "Please add at least one item with a name." }));
      return;
    }

    const subtotal = invoiceForm.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
    const taxAmount = subtotal * (invoiceForm.tax / 100);
    const discountAmount = subtotal * (invoiceForm.discount / 100);
    const total = subtotal + taxAmount - discountAmount;

    const newInvoice = {
      id: Date.now(),
      invoiceNo: `INV-${String(Date.now()).slice(-6)}`,
      invoiceDate: new Date().toLocaleDateString("en-IN"),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN"),
      customerName: invoiceForm.customerName,
      customerAddress: invoiceForm.customerAddress,
      customerMobile: invoiceForm.customerMobile,
      items: invoiceForm.items,
      tax: invoiceForm.tax,
      discount: invoiceForm.discount,
      notes: invoiceForm.notes || "Payment due on receipt.",
      subtotal,
      taxAmount,
      discountAmount,
      total,
    };

    setInvoices((prev) => [newInvoice, ...prev]);
    setActiveInvoiceId(newInvoice.id);
    setInvoiceForm({
      customerName: "",
      customerAddress: "",
      customerMobile: "",
      tax: 0,
      discount: 0,
      notes: "",
      items: [{ ...emptyItem }],
    });
    setAuth((prev) => ({ ...prev, error: "" }));
  };

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
        .secondary-btn,
        .ghost-btn {
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

        .ghost-btn {
          background: #f3f4f6;
          color: #111827;
          padding: 10px 16px;
        }

        .login-card,
        .invoice-form,
        .invoice-preview {
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .login-card {
          max-width: 560px;
          margin: 36px auto;
        }

        .login-card h2,
        .invoice-form h2,
        .invoice-preview h2 {
          margin-top: 0;
          font-size: 22px;
          color: #0f172a;
        }

        .invoice-body {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 24px;
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

        .brand-block {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .brand-logo {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          padding: 6px;
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

        .invoice-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .invoice-list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px 14px;
          background: #f8fafc;
        }

        .invoice-list-item strong {
          display: block;
          margin-bottom: 4px;
        }

        .error-text {
          color: #b91c1c;
          margin-top: 8px;
          font-size: 14px;
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
          .secondary-btn,
          .ghost-btn,
          .invoice-list {
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
          {auth.loggedIn && (
            <button className="ghost-btn" onClick={handleLogout}>
              Logout Admin
            </button>
          )}
        </div>
      </div>

      {!auth.loggedIn ? (
        <div className="login-card">
          <h2>Admin Login</h2>
          <p>Access the invoice system to create and manage customer invoices.</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                value={auth.email}
                onChange={(event) => setAuth({ ...auth, email: event.target.value })}
                placeholder="admin@kitchenstudio.com"
              />
            </div>
            <div className="form-group" style={{ marginTop: 12 }}>
              <label>Password</label>
              <input
                type="password"
                value={auth.password}
                onChange={(event) => setAuth({ ...auth, password: event.target.value })}
                placeholder="admin123"
              />
            </div>
            {auth.error ? <div className="error-text">{auth.error}</div> : null}
            <div className="item-controls" style={{ marginTop: 16 }}>
              <button className="print-btn" type="submit">
                Login to Dashboard
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="invoice-body">
          <div className="invoice-form">
            <h2>Create Billing Invoice</h2>
            <p>Generate a professional invoice for your client from the admin dashboard.</p>

            <form onSubmit={handleGenerateInvoice}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input value={invoiceForm.customerName} onChange={updateField("customerName")} />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input value={invoiceForm.customerMobile} onChange={updateField("customerMobile")} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea value={invoiceForm.customerAddress} onChange={updateField("customerAddress")} />
                </div>
                <div className="form-group">
                  <label>Tax (%)</label>
                  <input type="number" min="0" value={invoiceForm.tax} onChange={updateField("tax")} />
                </div>
                <div className="form-group">
                  <label>Discount (%)</label>
                  <input type="number" min="0" value={invoiceForm.discount} onChange={updateField("discount")} />
                </div>
                <div className="form-group">
                  <label>Notes</label>
                  <textarea value={invoiceForm.notes} onChange={updateField("notes")} />
                </div>
              </div>

              <div className="items-table-container">
                <h3 style={{ marginTop: 20 }}>Items</h3>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceForm.items.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.name}
                            onChange={updateItem(index, "name")}
                            placeholder="Item Name"
                          />
                        </td>
                        <td>
                          <input type="number" min="1" value={item.qty} onChange={updateItem(index, "qty")} />
                        </td>
                        <td>
                          <input type="number" min="0" value={item.rate} onChange={updateItem(index, "rate")} />
                        </td>
                        <td>
                          <button type="button" className="secondary-btn" onClick={() => removeItem(index)}>
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
                  <button className="print-btn" type="submit">
                    Generate Invoice
                  </button>
                </div>
              </div>

              {auth.error ? <div className="error-text">{auth.error}</div> : null}
            </form>
          </div>

          <div className="invoice-preview">
            <h2>Invoice Preview</h2>
            <div className="invoice-card">
              <div className="invoice-header">
                <div className="brand-block">
                  <img className="brand-logo" src={companyLogo} alt="Company logo" />
                  <div>
                    <h1>{companyInfo.companyName}</h1>
                    <p>{companyInfo.address}</p>
                    <p>Phone: {companyInfo.phone}</p>
                    <p>Email: {companyInfo.email}</p>
                    <p>GST: {companyInfo.gst}</p>
                  </div>
                </div>

                <div className="invoice-title">
                  <h2>Tax Invoice</h2>
                  <p>Invoice No: {activeInvoice.invoiceNo}</p>
                  <p>Date: {activeInvoice.invoiceDate}</p>
                  <p>Due Date: {activeInvoice.dueDate}</p>
                </div>
              </div>

              <div className="invoice-meta">
                <div className="meta-card">
                  <h3>Billed To</h3>
                  <p>{activeInvoice.customerName}</p>
                  <p>{activeInvoice.customerAddress}</p>
                  <p>Phone: {activeInvoice.customerMobile}</p>
                </div>

                <div className="meta-card">
                  <h3>Project Details</h3>
                  <p>Kitchen project / service billing</p>
                  <p>Payment Terms: Due on receipt</p>
                </div>
              </div>

              <table className="items-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {activeInvoice.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name || "Item"}</td>
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
                    <span>{currency.format(activeInvoice.subtotal || 0)}</span>
                  </div>
                  <div className="totals-row">
                    <span>Tax ({activeInvoice.tax || 0}%)</span>
                    <span>{currency.format(activeInvoice.taxAmount || 0)}</span>
                  </div>
                  <div className="totals-row">
                    <span>Discount ({activeInvoice.discount || 0}%)</span>
                    <span>{currency.format(activeInvoice.discountAmount || 0)}</span>
                  </div>
                  <div className="totals-row">
                    <strong>Total</strong>
                    <strong>{currency.format(activeInvoice.total || 0)}</strong>
                  </div>
                </div>
              </div>

              <div className="notes-box">
                <h3>Notes</h3>
                <p>{activeInvoice.notes}</p>
              </div>

              <div className="item-controls">
                <button className="print-btn" onClick={() => window.print()}>
                  Print / Save PDF
                </button>
              </div>
            </div>

            <div className="invoice-list">
              <h3>Saved Invoices</h3>
              {invoices.length === 0 ? (
                <p>No invoices generated yet.</p>
              ) : (
                invoices.map((invoice) => (
                  <div key={invoice.id} className="invoice-list-item">
                    <div>
                      <strong>{invoice.customerName}</strong>
                      <div>{invoice.invoiceNo}</div>
                      <div>{currency.format(invoice.total || 0)}</div>
                    </div>
                    <button className="ghost-btn" onClick={() => setActiveInvoiceId(invoice.id)}>
                      View
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Invoice;

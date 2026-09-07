import { useEffect, useMemo, useState } from "react";
const companyLogo = "/logo.jpeg";

const companyInfo = {
  companyName: "STANDARD KITCHEN SOLUTIONS",
  address: "office no 30, Nityapriya building, nityanand nagar, station road, andheri east ,mumbai ,maharashtra 400069",
  phone: "+91 93263 89896",
  email: "standardkitchensolution@gmail.com",
  //gst: "08ABCDE1234F1Z5",
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
          --ink: #29231f;
          --muted: #766b61;
          --walnut: #3a2920;
          --walnut-deep: #251914;
          --brass: #b7833d;
          --cream: #f7f1e8;
          --paper: #fffdfa;
          min-height: 100vh;
          padding: 34px clamp(18px, 4vw, 64px) 64px;
          background: radial-gradient(circle at 8% 0%, rgba(183, 131, 61, 0.17), transparent 28%), linear-gradient(135deg, #efe7da 0%, #f8f5ef 48%, #e8dfd2 100%);
          color: var(--ink);
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
        }

        .invoice-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image: repeating-linear-gradient(115deg, transparent 0 8px, rgba(58, 41, 32, 0.035) 9px 10px);
        }

        .invoice-header-row,
        .invoice-body,
        .login-card {
          position: relative;
          z-index: 1;
          max-width: 1440px;
          margin-left: auto;
          margin-right: auto;
        }

        .invoice-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(58, 41, 32, 0.2);
          flex-wrap: wrap;
        }

        .invoice-header-row::after {
          content: "STANDARD KITCHEN SOLUTIONS  /  ADMIN STUDIO";
          color: var(--walnut);
          font: 700 11px/1.2 Georgia, serif;
          letter-spacing: 0.18em;
          order: -1;
        }

        .back-button,
        .print-btn,
        .secondary-btn,
        .ghost-btn {
          border: 1px solid transparent;
          cursor: pointer;
          border-radius: 6px;
          font: 700 12px/1 "Trebuchet MS", sans-serif;
          letter-spacing: 0.04em;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }

        .back-button:hover,
        .print-btn:hover,
        .secondary-btn:hover,
        .ghost-btn:hover { transform: translateY(-2px); }

        .back-button { background: var(--walnut-deep); color: #fffaf2; padding: 13px 18px; box-shadow: 0 8px 18px rgba(37, 25, 20, 0.16); }
        .print-btn { background: var(--brass); color: #fffdf8; padding: 13px 18px; box-shadow: 0 8px 18px rgba(139, 91, 32, 0.2); }
        .ghost-btn { background: rgba(255, 253, 250, 0.7); color: var(--walnut); border-color: rgba(58, 41, 32, 0.18); padding: 11px 16px; }

        .login-card,
        .invoice-form,
        .invoice-preview {
          background: rgba(255, 253, 250, 0.94);
          border: 1px solid rgba(58, 41, 32, 0.14);
          border-radius: 10px;
          padding: clamp(22px, 3vw, 34px);
          box-shadow: 0 20px 50px rgba(58, 41, 32, 0.12);
        }

        .login-card { max-width: 560px; margin-top: 56px; }
        .login-card h2,
        .invoice-form h2,
        .invoice-preview > h2 { margin: 0 0 8px; font: 700 27px/1.15 Georgia, serif; color: var(--walnut-deep); }
        .login-card p,
        .invoice-form > p { color: var(--muted); margin: 0 0 24px; line-height: 1.6; }

        .invoice-body { display: grid; grid-template-columns: minmax(360px, 0.92fr) minmax(0, 1.12fr); gap: 26px; }
        .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 17px; }
        .form-group { display: flex; flex-direction: column; gap: 7px; }
        .form-group label { color: var(--walnut); font: 700 11px/1.2 "Trebuchet MS", sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
        .form-group input,
        .form-group textarea,
        .items-table input { border: 1px solid #d8cbbb; border-radius: 5px; padding: 12px 13px; font: 14px "Trebuchet MS", sans-serif; color: var(--ink); background: #fcf8f1; outline: none; }
        .form-group input:focus,
        .form-group textarea:focus,
        .items-table input:focus { border-color: var(--brass); box-shadow: 0 0 0 3px rgba(183, 131, 61, 0.14); }
        .form-group textarea { min-height: 96px; resize: vertical; }

        .items-table-container { overflow-x: auto; }
        .items-table-container h3 { color: var(--walnut); font: 700 18px Georgia, serif; }
        .items-table { width: 100%; border-collapse: collapse; margin-top: 16px; min-width: 440px; }
        .items-table th,
        .items-table td { border-bottom: 1px solid #e4d9cc; padding: 12px 9px; text-align: left; }
        .items-table th { color: #806b58; background: #f3eadf; font: 700 11px "Trebuchet MS", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }
        .items-table input { width: 100%; box-sizing: border-box; padding: 9px 10px; }
        .item-controls { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
        .secondary-btn { padding: 10px 14px; color: var(--walnut); background: #eadfD1; }

        .invoice-preview { display: flex; flex-direction: column; gap: 18px; }
        .invoice-card { border: 1px solid #d8cbbb; border-radius: 5px; padding: clamp(20px, 3vw, 34px); background: var(--paper); box-shadow: 0 12px 30px rgba(58, 41, 32, 0.08); }
        .invoice-card .invoice-header { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; padding-bottom: 22px; border-bottom: 3px solid var(--brass); }
        .brand-block { display: flex; align-items: flex-start; gap: 16px; max-width: 620px; }
        .brand-logo { width: 94px; height: 94px; object-fit: cover; border-radius: 4px; border: 5px solid #f0e3d0; background: #f8efe3; padding: 4px; }
        .brand-block h1 { margin: 0 0 9px; font: 700 25px/1.1 Georgia, serif; color: var(--walnut-deep); }
        .brand-block p, .meta-card p, .notes-box p { margin: 4px 0; color: var(--muted); line-height: 1.55; font-size: 13px; }
        .invoice-title { text-align: right; }
        .invoice-title h2 { margin: 0 0 12px; font: 700 26px Georgia, serif; color: var(--brass); }
        .invoice-title p { margin: 5px 0; color: var(--muted); font-size: 13px; }
        .invoice-meta { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 18px; }
        .meta-card { background: var(--cream); padding: 16px; border-left: 4px solid var(--brass); border-radius: 2px; }
        .meta-card h3, .notes-box h3 { margin: 0 0 8px; color: var(--walnut); font: 700 13px "Trebuchet MS", sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
        .totals { display: flex; justify-content: flex-end; }
        .totals-box { min-width: 270px; background: var(--walnut); color: #fffaf2; border-radius: 3px; padding: 17px 20px; }
        .totals-row { display: flex; justify-content: space-between; gap: 30px; margin: 9px 0; font-size: 13px; }
        .totals-row:last-child { border-top: 1px solid rgba(255, 250, 242, 0.3); padding-top: 13px; margin-top: 14px; font-size: 16px; }
        .notes-box { border-top: 1px solid #e4d9cc; padding-top: 16px; }
        .invoice-list { display: flex; flex-direction: column; gap: 10px; }
        .invoice-list h3 { margin: 0 0 3px; color: var(--walnut); font: 700 18px Georgia, serif; }
        .invoice-list-item { display: flex; justify-content: space-between; align-items: center; gap: 12px; border: 1px solid #d8cbbb; border-radius: 5px; padding: 13px 15px; background: rgba(255, 253, 250, 0.68); }
        .invoice-list-item strong { display: block; margin-bottom: 4px; color: var(--walnut-deep); }
        .error-text { color: #a33e2c; margin-top: 10px; font-size: 13px; }

        @media (max-width: 1024px) { .invoice-body { grid-template-columns: 1fr; } }
        @media (max-width: 600px) {
          .invoice-page { padding: 22px 14px 42px; }
          .invoice-header-row::after { width: 100%; }
          .form-grid { grid-template-columns: 1fr; }
          .brand-block { flex-direction: column; }
          .invoice-title { text-align: left; }
          .invoice-card { padding: 18px 14px; }
          .totals-box { min-width: 0; width: 100%; box-sizing: border-box; }
        }

        @media print {
          body { background: white; }
          .invoice-page { padding: 0; background: white; }
          .invoice-page::before, .invoice-header-row, .invoice-form, .secondary-btn, .ghost-btn, .invoice-list { display: none; }
          .invoice-preview { display: block; padding: 0; border: none; box-shadow: none; }
          .invoice-preview > h2 { display: none; }
          .invoice-card { border: none; box-shadow: none; padding: 0; }
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
            <h2>Invoice </h2>
            <div className="invoice-card">
              <div className="invoice-header">
                <div className="brand-block">
                  <img className="brand-logo" src={companyLogo} alt="Company logo" />
                  <div>
                    <h1>{companyInfo.companyName}</h1>
                    <p>{companyInfo.address}</p>
                    <p>Phone: {companyInfo.phone}</p>
                    <p>Email: {companyInfo.email}</p>
                    {/* <p>GST: {companyInfo.gst}</p> */}
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
                  <h3>Bill To</h3>
                  <p>{activeInvoice.customerName}</p>
                  <p>{activeInvoice.customerAddress}</p>
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
                  {activeInvoice.discount > 0 && (
                    <div className="totals-row">
                      <span>Discount ({activeInvoice.discount}%)</span>
                      <span>{currency.format(activeInvoice.discountAmount || 0)}</span>
                    </div>
                  )}
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

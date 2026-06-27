import { useState } from "react";
import Home from "./pages/Home";
import Invoice from "./components/Invoice";

function App() {
  const [page, setPage] = useState("home");

  return page === "home" ? (
    <Home onOpenInvoice={() => setPage("invoice")} />
  ) : (
    <Invoice onBack={() => setPage("home")} />
  );
}

export default App;

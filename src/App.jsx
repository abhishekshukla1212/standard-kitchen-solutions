import { useState } from "react";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Invoice from "./components/Invoice";

function App() {
  const [page, setPage] = useState("home");

  if (page === "invoice") {
    return <Invoice onBack={() => setPage("home")} />;
  }

  if (page === "about") {
    return <AboutPage onBack={() => setPage("home")} />;
  }

  return (
    <Home
      onOpenInvoice={() => setPage("invoice")}
      onOpenAbout={() => setPage("about")}
    />
  );
}

export default App;

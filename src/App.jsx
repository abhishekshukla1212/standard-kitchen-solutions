import { useState } from "react";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Invoice from "./components/Invoice";

function App() {
  const [page, setPage] = useState(
    window.location.pathname === "/admin" ? "admin" : "home"
  );

  // Admin page
  if (page === "admin") {
    return (
      <Invoice
        onBack={() => {
          window.history.pushState({}, "", "/");
          setPage("home");
        }}
      />
    );
  }

  // About page
  if (page === "about") {
    return <AboutPage onBack={() => setPage("home")} />;
  }

  // Public website
  return (
    <Home
      onOpenAbout={() => setPage("about")}
    />
  );
}

export default App;
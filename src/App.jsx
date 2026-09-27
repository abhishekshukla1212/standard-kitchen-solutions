import { useState, Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const KitchenServicesPage = lazy(() => import("./pages/KitchenServicesPage"));
const CarpentryServicesPage = lazy(() => import("./pages/CarpentryServicesPage"));
const Invoice = lazy(() => import("./components/Invoice"));

// Loading spinner component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
    <div className="w-12 h-12 border-4 border-olive border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [page, setPage] = useState(
    window.location.pathname === "/admin" ? "admin" : "home"
  );

  // Admin page
  if (page === "admin") {
    return (
      <Suspense fallback={<PageLoader />}>
        <Invoice
          onBack={() => {
            window.history.pushState({}, "", "/");
            setPage("home");
          }}
        />
      </Suspense>
    );
  }

  if (page === "about") {
    return (
      <Suspense fallback={<PageLoader />}>
        <AboutPage 
          onBack={() => setPage("home")} 
          onOpenContact={() => setPage("contact")}
          onOpenKitchen={() => setPage("kitchen")}
          onOpenCarpentry={() => setPage("carpentry")}
        />
      </Suspense>
    );
  }

  // Contact page
  if (page === "contact") {
    return (
      <Suspense fallback={<PageLoader />}>
        <ContactPage 
          onBack={() => setPage("home")} 
          onOpenAbout={() => setPage("about")} 
          onOpenKitchen={() => setPage("kitchen")}
          onOpenCarpentry={() => setPage("carpentry")}
        />
      </Suspense>
    );
  }

  if (page === "kitchen") {
    return (
      <Suspense fallback={<PageLoader />}>
        <KitchenServicesPage
          onBack={() => setPage("home")}
          onOpenAbout={() => setPage("about")}
          onOpenContact={() => setPage("contact")}
          onOpenCarpentry={() => setPage("carpentry")}
        />
      </Suspense>
    );
  }

  if (page === "carpentry") {
    return (
      <Suspense fallback={<PageLoader />}>
        <CarpentryServicesPage
          onBack={() => setPage("home")}
          onOpenAbout={() => setPage("about")}
          onOpenContact={() => setPage("contact")}
          onOpenKitchen={() => setPage("kitchen")}
        />
      </Suspense>
    );
  }

  // Public website
  return (
    <Suspense fallback={<PageLoader />}>
      <Home
        onOpenAbout={() => setPage("about")}
        onOpenContact={() => setPage("contact")}
        onOpenKitchen={() => setPage("kitchen")}
        onOpenCarpentry={() => setPage("carpentry")}
      />
    </Suspense>
  );
}

export default App;
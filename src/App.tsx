import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import { lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Basics = lazy(() => import("./pages/Basics"));
const Banking = lazy(() => import("./pages/Banking"));
const PersonalFinance = lazy(() => import("./pages/PersonalFinance"));
const Investments = lazy(() => import("./pages/Investments"));
const Trading = lazy(() => import("./pages/Trading"));
const Trading2 = lazy(() => import("./pages/Trading2"));
const Taxes = lazy(() => import("./pages/Taxes"));
const Resources = lazy(() => import("./pages/Resources"));
const Cryptos = lazy(() => import("./pages/Cryptos"));
const CompoundInterest = lazy(() => import("./pages/CompoundInterest"));
const LoanCalculator = lazy(() => import("./pages/LoanCalculator"));
const Contact = lazy(() => import("./pages/Contact"));
const Strategy = lazy(() => import("./pages/Strategy"));
const Accounts = lazy(() => import("./pages/Accounts"));
const HowToInvest = lazy(() => import("./pages/HowToInvest"));
const NotFound = lazy(() => import("./pages/NotFound"));

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={basename}>
      <SidebarProvider>
        <Sidebar />
        <ErrorBoundary>
          <Suspense
            fallback={<div className="loading-spinner">Chargement...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basics/*" element={<Basics />} />
              <Route path="/personal-finance/*" element={<PersonalFinance />} />
              <Route path="/banking/*" element={<Banking />} />
              <Route path="/accounts/*" element={<Accounts />} />
              <Route path="/investments/*" element={<Investments />} />
              <Route path="/cryptos/*" element={<Cryptos />} />
              <Route path="/investments2/*" element={<HowToInvest />} />
              <Route path="/trading/*" element={<Trading />} />
              <Route path="/trading2/*" element={<Trading2 />} />
              <Route path="/taxes/*" element={<Taxes />} />
              <Route path="/resources/*" element={<Resources />} />
              <Route path="/strategy/*" element={<Strategy />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route
                path="/compound-interest/*"
                element={<CompoundInterest />}
              />
              <Route path="/loan/*" element={<LoanCalculator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;

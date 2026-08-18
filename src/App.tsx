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
const Taxes = lazy(() => import("./pages/Taxes"));
const Resources = lazy(() => import("./pages/Resources"));
const Affiliation = lazy(() => import("./pages/Affiliation"));
const Cryptos = lazy(() => import("./pages/Cryptos"));
const CompoundInterest = lazy(() => import("./pages/CompoundInterest"));
const LoanCalculator = lazy(() => import("./pages/LoanCalculator"));
const Contact = lazy(() => import("./pages/Contact"));
const Strategy = lazy(() => import("./pages/Strategy"));
const Accounts = lazy(() => import("./pages/Accounts"));
const ComparativeStudies = lazy(() => import("./pages/ComparativeStudies"));
const InvestmentDecisionTree = lazy(
  () => import("./pages/InvestmentDecisionTree"),
);
const RentVsBuy = lazy(() => import("./pages/RentVsBuy"));
const TaxWrapperComparator = lazy(
  () => import("./pages/TaxWrapperComparator"),
);
const Tools = lazy(() => import("./pages/Tools"));
const RiskProfile = lazy(() => import("./pages/RiskProfile"));
const Legal = lazy(() => import("./pages/Legal"));
const Licenses = lazy(() => import("./pages/Licenses"));
const NotFound = lazy(() => import("./pages/NotFound"));

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={basename}>
        <SidebarProvider>
          <Sidebar />
          <Suspense
            fallback={<div className="loading-spinner">Chargement...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fondamentaux/*" element={<Basics />} />
              <Route
                path="/finance-personnelle/*"
                element={<PersonalFinance />}
              />
              <Route path="/systeme-bancaire/*" element={<Banking />} />
              <Route path="/types-de-comptes/*" element={<Accounts />} />
              <Route path="/investissements/*" element={<Investments />} />
              <Route path="/cryptomonnaies/*" element={<Cryptos />} />
              <Route
                path="/comparatifs-et-etudes/*"
                element={<ComparativeStudies />}
              />
              <Route path="/trading/*" element={<Trading />} />
              <Route path="/impots/*" element={<Taxes />} />
              <Route path="/outils/*" element={<Tools />} />
              <Route path="/ressources/*" element={<Resources />} />
              <Route path="/affiliation/*" element={<Affiliation />} />
              <Route path="/strategie/*" element={<Strategy />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/licences" element={<Licenses />} />
              <Route
                path="/interets-composes/*"
                element={<CompoundInterest />}
              />
              <Route path="/simulateur-pret/*" element={<LoanCalculator />} />
              <Route path="/louer-ou-acheter/*" element={<RentVsBuy />} />
              <Route
                path="/comparateur-enveloppes/*"
                element={<TaxWrapperComparator />}
              />
              <Route path="/profil-de-risque/*" element={<RiskProfile />} />
              <Route
                path="/organigramme-investissement/*"
                element={<InvestmentDecisionTree />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SidebarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

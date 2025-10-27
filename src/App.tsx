import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Banking from "./pages/Banking";
import PersonalFinance from "./pages/PersonalFinance";
import Investments from "./pages/Investments";
import Trading from "./pages/Trading";
import Taxes from "./pages/Taxes";
import Psychology from "./pages/Psychology";
import Resources from "./pages/Resources";
import Cryptos from "./pages/Cryptos";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import BuyVsRent from "./pages/BuyVsRent";
import CompoundInterest from "./pages/CompoundInterest";
import LoanCalculator from "./pages/LoanCalculator";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SidebarProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics/*" element={<Basics />} />
          <Route path="/personal-finance/*" element={<PersonalFinance />} />
          <Route path="/banking/*" element={<Banking />} />
          <Route path="/investments/*" element={<Investments />} />
          <Route path="/cryptos/*" element={<Cryptos />} />
          <Route path="/trading/*" element={<Trading />} />
          <Route path="/taxes/*" element={<Taxes />} />
          <Route path="/psychology/*" element={<Psychology />} />
          <Route path="/resources/*" element={<Resources />} />
          <Route path="/compound-interest/*" element={<CompoundInterest />} />
          <Route path="/loan/*" element={<LoanCalculator />} />
          <Route path="/buy-vs-rent/*" element={<BuyVsRent />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;

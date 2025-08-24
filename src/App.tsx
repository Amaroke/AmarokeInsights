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

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basics/*" element={<Basics />} />
        <Route path="/banking/*" element={<Banking />} />
        <Route path="/personal-finance/*" element={<PersonalFinance />} />
        <Route path="/investments/*" element={<Investments />} />
        <Route path="/trading/*" element={<Trading />} />
        <Route path="/cryptos/*" element={<Cryptos />} />
        <Route path="/taxes/*" element={<Taxes />} />
        <Route path="/psychology/*" element={<Psychology />} />
        <Route path="/resources/*" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hakkimizda from "./components/Hakkimizda";
import Anasayfa from "./components/Anasayfa";
import Footer from "./components/Footer";
import Hizmetlerimiz from "./components/Hizmetlerimiz";
import Kadromuz from "./components/Kadromuz";
import KadroDetail from "./components/Kadromuz";
import İletişim from "./components/İletişim";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
        <Route path="/kadromuz" element={<Kadromuz />} />
        <Route path="/kadromuz/:id" element={<KadroDetail />} />
        <Route path="/iletisim" element={<İletişim />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

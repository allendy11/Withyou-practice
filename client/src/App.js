import "./App.css";
import react, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editpage from "./pages/Editpage";
import Landingpage from "./pages/Landingpage";
import Mypage from "./pages/Mypage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/editpage" element={<Editpage />} />
        <Route path="/mypage" element={<Editpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

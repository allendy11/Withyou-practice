import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editpage from "./pages/Editpage";
import Landingpage from "./pages/Landingpage";
import Mypage from "./pages/Mypage";
import Nav from "./components/Nav";
import Login from "./components/auth/Login";
import Footer from "./components/Footer";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [signupBtn, setSignupBtn] = useState(false);
  return (
    <Router>
      <Nav
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        loginBtn={loginBtn}
        setLoginBtn={setLoginBtn}
        signupBtn={signupBtn}
        setSignupBtn={setSignupBtn}
      />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/editpage" element={<Editpage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {loginBtn ? (
        <Login
          loginBtn={loginBtn}
          setLoginBtn={setLoginBtn}
          signupBtn={signupBtn}
          setSignupBtn={setSignupBtn}
        />
      ) : null}
    </Router>
  );
}

export default App;

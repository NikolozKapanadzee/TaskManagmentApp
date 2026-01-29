import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./index.css";
import Register from "./(pages)/register/Register";
import Login from "./(pages)/login/Login";
import Dashboard from "./(pages)/dashboard/Dashboard";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

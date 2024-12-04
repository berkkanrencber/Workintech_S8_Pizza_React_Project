import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import Success from "./pages/Success";

function App() {
  const [successFormData, setSuccessFormData] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm setSuccessFormData={setSuccessFormData} />} />
        <Route path="/success" element={<Success successFormData={successFormData} />} />
      </Routes>
    </Router>
  );
}

export default App;

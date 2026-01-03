import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import AdminReviews from "./pages/AdminReviews";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin/review" element={<AdminReviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

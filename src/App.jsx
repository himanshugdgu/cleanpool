import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Service from "./components/Service";
import Error from "./components/Error";
import Conventional from "./components/Conventional";
import Advance from "./components/Advance";
import Page from "./components/Buy";
import ThankYouPage from "./components/Thanks";
import ContactUsPage from "./components/Contact";
// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={[<Home />]} />
          <Route path="/service" element={[<Service />]} />
          <Route path="/conventional" element={[<Conventional />]} />
          <Route path="/advance" element={[<Advance />]} />
          <Route path="buy" element={[<Page />]} />
          <Route path="thanks" element={[<ThankYouPage />]} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

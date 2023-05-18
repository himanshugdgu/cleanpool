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
          <Route path="/cleanpool" element={<Hero />} />
          <Route path="/cleanpool/home" element={[<Home />]} />
          <Route path="/cleanpool/service" element={[<Service />]} />
          <Route path="/cleanpool/conventional" element={[<Conventional />]} />
          <Route path="/cleanpool/advance" element={[<Advance />]} />
          <Route path="/cleanpool/buy" element={[<Page />]} />
          <Route path="/cleanpool/thanks" element={[<ThankYouPage />]} />
          <Route path="/cleanpool/contact" element={<ContactUsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

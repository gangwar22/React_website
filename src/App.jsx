import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from "./Component/Navbar";
// import About from "./Component/About";
import Contact from './Component/Contact';
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<p>404 Page not found</p>} />
      </Routes>
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;

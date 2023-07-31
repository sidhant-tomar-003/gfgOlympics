import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <>
      <Navbar/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/data" element={<Data/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
    </Router>
  );
}

export default App;


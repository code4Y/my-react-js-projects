import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    // Use Router to enable routing
    <Router>
      {/* // Use Link to create navigation links */}
      <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* // Use Routes to render only one route at a time */}
      <Routes>
        {/* // Use Route to define the paths and element for each page */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
    </Router>
  );
}

export default App;
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Projects from "./pages/Projects"
import Project1 from "./pages/Project1"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project1" element={<Project1 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
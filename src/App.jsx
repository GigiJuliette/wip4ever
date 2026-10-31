import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";

function App() {
  console.log(
    `%c
coucou
`,
    `
color: #FF0AB5;

`,
  );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;

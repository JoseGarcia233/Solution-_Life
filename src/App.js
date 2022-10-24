import "./App.css";
import "./css/navB.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavB from "./components/navB";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ListJobs from "./pages/ListJobs";
import AboutJobs from "./pages/AboutJobs";
import AddJobs from "./pages/AddJobs";

function App() {
  return (
    <Router>
      <NavB />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/List-jobs" element={<ListJobs />} />
        <Route path="/about-jobs/:id" element={<AboutJobs />} />
        <Route path="/add-jobs/" element={<AddJobs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

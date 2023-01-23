import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Recordings from './pages/Recordings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Home />} />
        <Route path="/Lessons" element={<Home />} />
        <Route path="/Listen" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Recordings" element={<Recordings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

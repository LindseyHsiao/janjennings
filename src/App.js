import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Recordings from './pages/Recordings';
import Events from './pages/Events';
import About from './pages/About';
import Lessons from './pages/Lessons';
import Listen from './pages/Listen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Listen" element={<Listen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recordings" element={<Recordings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

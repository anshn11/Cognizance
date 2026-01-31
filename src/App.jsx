import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="font-['Inter'] min-h-screen text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Events />
              <Speakers />
              <Team />
              <Timeline />
            </>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

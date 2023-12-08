import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home-Page/Home';
import AboutPage from './Pages/About-Page/AboutPage';
import NotFound from './Pages/Not-Found/NotFound';
import AccommodationDetails from './components/Accomodation-Details/AccommodationDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

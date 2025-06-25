import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './Homepage';
import Bookings from './Bookings';
import Pricing from './Pricing';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {

  return (
    <>
    {/* change this basename */}
      <Router basename='/websitetemplate2'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

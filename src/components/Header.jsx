// Header.jsx
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* Hamburger button */}
      {/* <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button> */}

      {/* Sidebar */}
      <div className={`navBar ${isOpen ? 'open' : ''}`}>
        <h1 class="logo">E</h1>
        <div id="spaceing"></div>
        <Link to="/" className="navBtn" onClick={toggleSidebar}>Home</Link>
        <Link to="/gallery" className="navBtn" onClick={toggleSidebar}>Gallery</Link>
        <Link to="/bookings" className="navBtn" onClick={toggleSidebar}>Bookings</Link>
        <Link to="/pricing" className="navBtn" onClick={toggleSidebar}>Pricing</Link>
        <Link to="/contact" className="navBtn" onClick={toggleSidebar}>Contact</Link>
      
        <div className="navInfo">
            <strong>Booking Hours:</strong><br />
            Mon–Fri: 10am–5pm<br />
            Sat: 10am–4pm<br />
            Sun: Closed<br />
            Public Holidays: Closed
        </div>

        {/* <div className="navInfo">
            10% off for first-time clients!
        </div> */}
      
      </div>

      
    </>
  );
};

export default Header;

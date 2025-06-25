import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Contact() {
  return (
    <>
    
      <div className="container">
        <div className="menu"><Header /></div>
        
        <div className="content">
        <Title titleName="Contact" />
        <main className="contact-container">
          

          <p className="contact-subtitle">
            For bookings, availability, or questions, please get in touch via the details below.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> elisasbusinessemail@gmail.com</p>
            {/* <p><strong>Phone:</strong> 021 </p> */}
            <p><strong>Instagram:</strong>
              <a 
                href="https://instagram.com/elisasnails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="insta-link"
              >
                @elisasnails
              </a>
            </p>
            <p><strong>Location:</strong> Manukau, Auckland, NZ</p>
          </div>
        </main>
            <div className='footer'><Footer /></div>
        </div>
        </div>
    </>
  );
}

export default Contact;

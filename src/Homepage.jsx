import './Homepage.css';
import PhotoCarousel from './components/PhotoCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
// import vanessaImg from './assets/vanessa.jpeg';
import Title from './components/Title';

function Homepage() {
  return (
    <>
    
    <div className="container">
      <div className="menu"><Header /></div>
      {/* <div className="content"> */}
      <div className="content">
      {/* <Title titleName="Elisaquise's Nails"/> */}
      <h1 className="Heading">Elisa's Nails</h1>
      <section className="intro">
      
        {/* <img src={vanessaImg} className="headshotImg" alt="Vanessa" /> */}

        <div className="bio">
          <h2 className="name">About Me</h2>
          <p className="description">
            Nail tech based in Manukau, Auckland. I’m a dedicated nail artist who loves bringing creativity and elegance to every set of nails. From timeless classics to bold, custom designs, I’ll work with you to create nails that express your unique style.
          </p>
          <p className="description">
            Every appointment is about more than just beautiful nails — it’s about quality, comfort, and self-care. I’m committed to maintaining high standards of hygiene and detail, and I can’t wait to help you fall in love with your nails.
          </p>

        </div>
      </section>
      </div>  
      {/* </div> */}
      <div className='footer'><Footer /></div>
    </div>
    </>
  );
}

export default Homepage;

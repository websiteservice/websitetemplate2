import './Pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Pricing() {
  return (
    <>
    <div className="container">
      
    <div className="menu"><Header /></div>
      <div className="content">
      <Title titleName="Pricing" />
        <main className="pricing-container">
          <p className="pricing-subtitle">Quality nail care for every style and budget.</p>

          {/* Section: Manicures */}
          <h2 className="section-heading">Manicures</h2>
          <div className="pricing-cards">
            <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & base and top coat polish application." />
            <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & base and top coat polish application." />
            <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & base and top coat polish application." />
            {/* <p className='service'>Natural Nail Manicure</p>
            <p className='service-desc'>Includes nail shaping, cuticle care & base and top coat polish application.</p>
            <p className='service-price'>$40</p> */}
            

          </div>

        </main>
      </div>
      <div className='footer'><Footer /></div>
      </div>
    </>
  );
}

// Reusable card component
function ServiceCard({ title, price, desc }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Pricing;

import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title';
import img1 from '/src/assets/nailsImages/3.png';


function Location() {
    return(
        <>
        <div className="container">
        <div className="menu"><Header /></div>
        <div className="content">
            
            <Title titleName="Gallery"/>

                <section className="carousel-section">
                    {/* <h2 className="gallery-heading">Gallery</h2> */}
                    
                    {/* <PhotoCarousel /> */}
                    <div id="photos">
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    <img src={img1} alt="Nail design" width="500" height="600"/>
                    </div>
                </section>
            <div className='footer'><Footer /></div>
        </div>
        </div>
        </>
    );
}

export default Location;
import React from 'react';
import Slider from 'react-slick';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderStyles.css'; // Custom CSS for text overlays and styles
import BookingForm from './BookingForm'; // Import BookingForm
import FAQ from './FAQ';

function Home() {
  // Slider settings for responsiveness
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet or smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
         {/* Banner Slider Section */}
         <section className="banner-slider">
        <AwesomeSlider animation="scaleOutAnimation">
          <div data-src={require('./images/banner1.jpg')}>
            <div className="slider-text">
              <h1>Welcome to Our Website</h1>
              <p>Discover amazing content and features!</p>
            </div>
          </div>
          <div data-src={require('./images/banner2.jpg')}>
            <div className="slider-text">
              <h1>Explore Our Services</h1>
              <p>We provide top-notch services tailored for you.</p>
            </div>
          </div>
          <div data-src={require('./images/banner3.jpg')}>
            <div className="slider-text">
              <h1>Contact Us Today</h1>
              <p>Reach out for more information and support.</p>
            </div>
          </div>
        </AwesomeSlider>
      </section>
 {/* Booking Form Section */}
 <section className="booking-section">
        {/* <h2>Book a Table</h2> */}
        <BookingForm />
      </section>
      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
        At [Restaurant Name], we specialize in creating memorable dining experiences with seamless table booking services. Whether you’re planning a romantic evening, a family gathering, or a business lunch, we’re committed to making every occasion unforgettable with our premium hospitality, carefully crafted menus, and exceptional ambiance. Book your table today and experience fine dining with personalized service that’s second to none.
        </p>
        <a className='abt_more' href='#'>Read More</a>
      </section>

      {/* Services Slider */}
      <section className="services-slider">
        <h2>Our Services</h2>
        <Slider {...sliderSettings}>
          <div>
            <img src={require('./images/restaurant1.jpg')} alt="Gourmet Delights" />
            <div className="slider-text">
              <h3>Gourmet Delights</h3>
              <p>A fusion of flavors to tantalize your taste buds.</p>
            </div>
          </div>
          <div>
            <img src={require('./images/restaurant2.jpg')} alt="Family Dining" />
            <div className="slider-text">
              <h3>Family Dining</h3>
              <p>Perfect ambiance for family gatherings and celebrations.</p>
            </div>
          </div>
          <div>
            <img src={require('./images/restaurant3.jpg')} alt="Elegant Evenings" />
            <div className="slider-text">
              <h3>Elegant Evenings</h3>
              <p>An exquisite setting for memorable dinners.</p>
            </div>
          </div>
        </Slider>
      </section>
 {/* FAQ Form Section */}
 <section className="faq-section">
        {/* <h2>FAQ a Table</h2> */}
        <FAQ />
      </section>
     
    </div>
  );
}

export default Home;

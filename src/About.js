import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      
      {/* Who We Are Section with Text and Image in Columns */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              We are a dedicated team passionate about providing the best dining experience.
              Our restaurant offers a unique blend of ambiance, service, and culinary excellence
              to make every visit unforgettable.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={require('./images/banner3.jpg')} alt="Elegant Evenings" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-5 text-center">
      <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={require('./images/mission.webp')} alt="Elegant Evenings" className="img-fluid rounded" />
          </div>

        <div className="col-md-6">
        <h2>Our Mission</h2>
        <p className="lead">
          Our mission is to create memorable dining experiences for our guests by offering
          high-quality food and exceptional service in a welcoming environment.
        </p>
          </div>
          </div>
      </section>

      {/* Vision Section */}
      <section className="mb-5 text-center">
      <div className="row align-items-center">
          <div className="col-md-6">
          <h2>Our Vision</h2>
        <p className="lead">
          We envision a world where dining is more than just a meal; it’s a way to connect,
          celebrate, and savor life’s moments.
        </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={require('./images/vision.webp')} alt="Elegant Evenings" className="img-fluid rounded" />
          </div>
        </div>

      </section>

      {/* Values Section */}
      <section className="mb-5 text-center">
        <h2>Our Values</h2>
        <ul className="list-unstyled">
          <li><strong>Excellence:</strong> High-quality food and service.</li>
          <li><strong>Integrity:</strong> Operating with honesty and transparency.</li>
          <li><strong>Community:</strong> Supporting our local community.</li>
        </ul>
        <img src={require('./images/value.jpg')} alt="Elegant Evenings" className="img-fluid rounded" />

      </section>
    </div>
  );
}

export default About;

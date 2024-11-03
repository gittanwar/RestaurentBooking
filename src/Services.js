// TwoColumnLayout.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TwoColumnLayout = () => {
  return (
    <div>
      {/* Banner Slider Section */}
      <section className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Service</h1>
        <p>Your journey to excellence starts here.</p>
      </div>
    </section>
      {/* services Us Section */}
      <section className="services">
    <div className="container">
      <h2>Special Menu</h2>
      <h4>Special Offers</h4>
      <div className="row">
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-1.jpg')} alt="Elegant Evenings" />
            {/* Content for the first column */}
            <h2>Column 1</h2>
            <p>This is the first column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-2.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-3.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-4.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-5.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-6.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-7.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-8.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
          <img src={require('./images/product-9.jpg')} alt="Elegant Evenings" />
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};

export default TwoColumnLayout;

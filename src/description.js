import React from 'react';
import './product.css'; // Import CSS file for styling

class ProductDescription extends React.Component {
    render() {
  return (
    <div className="product-description-container">
      <h3 className="product-title">JBL Clip 4 Portable Bluetooth Speaker</h3>
      <p className="product-intro">
        The JBL Clip 4 is a compact and portable Bluetooth speaker that delivers powerful sound quality in a small package. It is perfect for outdoor activities, travel, and everyday use.
      </p>
      <h4 className="feature-heading">Key Features:</h4>
      <ul className="feature-list">
        <li><strong>Waterproof:</strong> IP67 rated for water and dust resistance.</li>
        <li><strong>Bluetooth:</strong> Version 5.1 for seamless wireless connectivity.</li>
        <li><strong>Battery Life:</strong> Up to 10 hours of playtime on a single charge.</li>
        <li><strong>Compact Design:</strong> Easily portable with a built-in carabiner for on-the-go convenience.</li>
      </ul>
      <h5 className="pricing-heading">Price:</h5>
      <p className="pricing-info">$69.99</p>
    </div>
  );
};
}

export  {ProductDescription};

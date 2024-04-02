
import React, { Component} from 'react';
import './product.css'
class PricingTable extends React.Component {

    render() { 
      return (
        <div>
          <h2>JBL Clip 4 Product Overview</h2>
          <table border="1" className='productTable'>
            <thead>
              <tr style={{backgroundColor: 'pink'}}>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>JBL</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>Clip 4</td>
              </tr>
              <tr>
                <td>Speaker Type</td>
                <td>Portable Bluetooth Speaker</td>
              </tr>
              <tr>
                <td>Waterproof</td>
                <td>Yes (IP67 rated)</td>
              </tr>
              <tr>
                <td>Bluetooth Version</td>
                <td>5.1</td>
              </tr>
              <tr>
                <td>Battery Life</td>
                <td>Up to 10 hours</td>
              </tr>
              <tr>
                <td>Wireless Range</td>
                <td>Up to 30 feet (10 meters)</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>3.4 x 5.5 x 1.8 inches</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>0.49 lbs (0.22 kg)</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };
}
export {PricingTable}
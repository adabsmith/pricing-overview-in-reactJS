// import React, { Component } from 'react';
// import './product.css';

// class PricingTableTwo extends Component {
//   renderRow([feature, description]) {
//     return (
//       <tr key={feature}>
//         <td>{feature}</td>
//         <td>{description}</td>
//       </tr>
//     );
//   }

//   render() {
//     return (
//       <table className='productTable'>
//         <thead>
//           <tr style={{ backgroundColor: 'pink' }}>
//             <th>Feature</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.productData.map(this.renderRow.bind(this))}
//         </tbody>
//       </table>
//     );
//   }
// }

// class Article extends Component {
//   render() {
//     const productData = [
//       ['Brand', 'JBL'],
//       ['Model', 'Clip 4'],
//       ['Speaker Type', 'Portable Bluetooth Speaker'],
//       ['Waterproof', 'Yes (IP67 rated)'],
//       ['Bluetooth Version', '5.1'],
//       ['Battery Life', 'Up to 10 hours'],
//       ['Wireless Range', 'Up to 30 feet (10 meters)'],
//       ['Dimensions', '3.4 x 5.5 x 1.8 inches'],
//       ['Weight', '0.49 lbs (0.22 kg)'],
//     ];

//     return (
//       <div>
//         <h1>JBL Clip 4 Product Overview</h1>
//         <PricingTableTwo productData={productData} />
//       </div>
//     );
//   }
// }

// export { PricingTableTwo };
import React, {Component} from 'react'
import './product.css'

//Props - allow us to pass params into the component 

class DataTable extends Component {

    renderRow([pk, data1, data2]) 
    {
        return (
            //Render a row for a table 
            <tr key={pk}>
                <td>{data1}</td>
                <td>{data2}</td>
            </tr>
        )
    }

    render() {
        return (
            <table border="1" className='productTable'>
                <thead>
                    <tr style={{backgroundColor: 'pink'}}>
                        <th>Feature</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tabledata.map(this.renderRow.bind(this))}
                </tbody>
            </table>
        )
    }
}


class Article extends Component {

   

    render() {
        var somedata = 
        [//[1, "Features", "Description" ],
        [2, 'Brand', 'JBL'],
      [3, 'Model', 'Clip 4'],
      [4, 'Speaker Type', 'Portable Bluetooth Speaker'],
      [5, 'Waterproof', 'Yes (IP67 rated)'],
      [6, 'Bluetooth Version', '5.1'],
      [7, 'Battery Life', 'Up to 10 hours'],
      [8, 'Wireless Range', 'Up to 30 feet (10 meters)'],
      [9, 'Dimensions', '3.4 x 5.5 x 1.8 inches'],
      [10, 'Weight', '0.49 lbs (0.22 kg)'],
    ];

        return (
            <div>
             <DataTable tabledata={somedata}/>
            </div>
           
        )
    }
}

export {Article}

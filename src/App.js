import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {Image} from './image';
import './product.css';
import {ProductDescription} from './description';
import { Article } from './tableTwo';

class App extends Component {
render() {
  return (
    <div className="App" style={{display:'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', maxHeight: 'auto', justifySelf: 'center', flexDirection: 'column'}}>
      <h1 className="Title">JBL Product Overview</h1>
      <Image/>
      <ProductDescription/>
    <Article className="article"/>
      <button style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#e95d16',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease'
      }}>Buy Now</button>
      
      
    </div>
  );
}
}

export default App;

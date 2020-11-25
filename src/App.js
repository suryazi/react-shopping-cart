import React, { Component } from 'react'
import Products from './components/Products';
import data from "./data.json";
//feature1

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>
        <footer>
          All right is reserverd.
        </footer>
      </div>
    );
  }
}

export default App;

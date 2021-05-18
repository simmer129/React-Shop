import React from 'react'
import './App.css';
import Products from './components/Products.js'
import data from './data.json';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
        size:"",
        sort:""
    };
  }
  render(){
  return (
    <div className="gird-container">
      <header>
        <a href="/">React Shoping Card</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Products products={this.state.products}></Products>
          </div>
          <div className='sidebar'>
            Card Items
          </div>
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
  }
}

export default App;

import React from 'react';
import ProductGallery from './components/ProductGallery';
import './App.css'; 

const products = [
  {
    _id: '1',
    name: 'Headphones',
    description: 'Comfortable and stylish headphones for everyday activity.',
    price: 2999,
    image: '/images/headphones.jpg'
  },
  {
    _id: '2',
    name: 'Mouse',
    description: 'Precise Mouse Control, ensuring usability for daily tasks or extended game session',
    price: 500,
    image: '/images/mouse.jpg'
  },
  {
    _id: '3',
    name: 'Keyboard',
    description: 'The compact size leaves more room on the desk for books or other things',
    price: 1500,
    image: '/images/key.jpg'
  }
];

function App() {
  return (
    <div className="app-container">
      <h1 className="page-title">💻 Laptop Accessories</h1>
      <ProductGallery products={products} />
    </div>
  );
}

export default App;
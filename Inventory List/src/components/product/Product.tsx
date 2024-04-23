import React, { useState } from 'react';
import './Product.css';

type ProductProps = {
  name: string;
  imageSrc: string;
  initialQuantity: number;
};

const Product: React.FC<ProductProps> = ({ name, imageSrc, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const buyProduct = () => {
    if (quantity > 0) {
      alert(`You bought ${quantity} item(s) of ${name}!`);
      setQuantity(0);
    } else {
      alert('Please select quantity before buying.');
    }
  };

  return (
    <div className="product">
      <img src={imageSrc} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <div className="quantity-controls">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <span className="current-quantity">{quantity}</span>
          <button className="quantity-button"><span className="plus-symbol">+</span></button>
        </div>
        <button className="changeTheStatus-button" onClick={buyProduct}>Change the Status</button>
      </div>
    </div>
  );
};

export default Product;

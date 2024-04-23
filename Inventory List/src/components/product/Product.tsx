import React, { useState } from 'react';
import questionmark from '../pictures/questionmark.png'; // Adjust the path based on your project structure
import './Product.css';

type ProductProps = {
  name: string;
  imageSrc: string;
  initialQuantity: number;
};

const Product: React.FC<ProductProps> = ({ name, imageSrc, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [productName, setProductName] = useState(name);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  return (
    <div className="product">
      <img src={imageSrc} alt={productName} className="product-image" />
      <div className="product-info">
        {imageSrc === questionmark ? (
          <input
            type="text"
            className="product-name"
            value={productName}
            onChange={handleNameChange}
          />
        ) : (
          <h2 className="product-name">{productName}</h2>
        )}
        <div className="quantity-controls">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <span className="current-quantity">{quantity}</span>
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>
        {imageSrc === questionmark && (
          <button className="buy-button" onClick={() => alert(`Name changed to: ${productName}`)}>Add</button>
        )}
      </div>
    </div>
  );
};

export default Product;

import React from "react";

function Product({ product }) {
  return (
    <div className="product-card">
      {/* Optional: Add an image if available */}
      {/* <img src={product.imageUrl} alt={product.name} className="product-image" /> */}
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn btn-outline-secondary">Wishlist</button>
      </div>
    </div>
  );
}

export default Product;

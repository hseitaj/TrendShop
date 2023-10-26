// src/components/ProductList.jsx
import React from 'react';

function ProductList({ products }) {
  return (
    <div className="container mb-5">  {/* Added margin-bottom (mb-5) */}
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>  {/* Added margin-bottom (mb-4) */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // Accessing the productId from the route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/"><i className="fa fa-home"></i> Home</a>
                <a href="#">Products</a>
                <span>{product.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <img className="product__big__img" src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{product.title}</h3>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span>({product.rating?.count} reviews)</span>
                </div>
                <div className="product__details__price">${product.price}</div>
                <p>{product.description}</p>
                <div className="product__details__button">
                  <button className="cart-btn">
                    <span className="icon_bag_alt"></span> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

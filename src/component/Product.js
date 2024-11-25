import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from the FakeStore API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New Products</h4>
            </div>
          </div>
         
        </div>
        <div className="row property__gallery">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mix"
              key={product.id}
            >
              <div className="product__item">
                <div
                  className="product__item__pic"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <ul className="product__hover">
                    <li>
                      <a href={product.image} className="image-popup">
                        <span className="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">{product.title}</a>
                  </h6>
                  <div className="rating">
                    {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                      <i className="fa fa-star" key={i}></i>
                    ))}
                  </div>
                  <div className="product__price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

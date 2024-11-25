// src/Shop.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

// Dummy categories, you can replace it with dynamic data if required
const categories = ['Women', 'Men', 'Kids', 'Accessories', 'Cosmetic'];

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Fetch products from the API when the component mounts
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Initially display all products
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []); 

    // Handle category filter
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);

        if (category === '') {
            setFilteredProducts(products); // No filter, show all products
        } else {
            const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="shop spad">
            <div className="container">
                <div className="row">
                    {/* Sidebar with category filter */}
                    <div className="col-lg-3 col-md-3">
                        <div className="shop__sidebar">
                            <div className="sidebar__categories">
                                <div className="section-title">
                                    <h4>Categories</h4>
                                </div>
                                <div className="categories__accordion">
                                    <div className="accordion">
                                        {categories.map((category) => (
                                            <div className="card" key={category}>
                                                <div className={`card-heading ${selectedCategory === category ? 'active' : ''}`}>
                                                    <Link to="#" onClick={() => handleCategoryChange(category)}>{category}</Link> {/* Replaced <a> with <Link> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product listing */}
                    <div className="col-lg-9 col-md-9">
                        <div className="row">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div className="col-lg-4 col-md-6" key={product.id}>
                                        <div className="product__item">
                                            <div className="product__item__pic" style={{ backgroundImage: `url(${product.image})` }}>
                                                <div className="label new">New</div>
                                                <ul className="product__hover">
                                                    <li><Link to={`/shop/${product.id}`} className="image-popup"><span className="arrow_expand"></span></Link></li> {/* Replaced <a> with <Link> */}
                                                    <li><Link to="#"><span className="icon_heart_alt"></span></Link></li> {/* Replaced <a> with <Link> */}
                                                    <li><Link to="#"><span className="icon_bag_alt"></span></Link></li> {/* Replaced <a> with <Link> */}
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><Link to="#">{product.title}</Link></h6> {/* Replaced <a> with <Link> */}
                                                <div className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product__price">${product.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products found for this category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;

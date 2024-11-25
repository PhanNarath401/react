import React from 'react'
import Categories from '../component/Categories';
import Product from '../component/Product';
import Discount from '../component/Discount';
import SearchModel from '../component/SearchModel';

export const Home = () => {
  return (
    <div><div>
     
    <Categories />
    <Product />
    <Discount />
    <SearchModel />
  </div>
</div>
  )
}

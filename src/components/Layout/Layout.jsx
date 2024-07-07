import React from 'react';
import './Layout.scss'; 
import Sidebar from '../Sidebar/sidebar';
import CardList from '../Cart/BestSell/CardList';
import ActuallyCardList from '../Cart/ActuallyCard/ActuallyCardList';
import ProductGrid from '../Cart/filterCard/product1/ProductGrid/ProductGrid';
import ParentComponent from '../Cart/filterCard/product1/fiveProduct/ParentComponent';
const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar/>
      <ProductGrid/>
      <ParentComponent/>
      
      
    </div>
  );
}

export default Layout;
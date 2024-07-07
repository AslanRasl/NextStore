import React from 'react';
import Header from '../../headerr/header';
import Carousel from '../../Carousels/Large/Carousel';
import SmallCarousel from "../../Carousels/Small/Carousel"
import Footer from '../../Footer/footer';
import CardList from '../../Cart/BestSell/CardList'
import ActuallyCardList from '../../Cart/ActuallyCard/ActuallyCardList';
import CategoryCardList from "../../Cart/CategoryCard/CategoryCardList"
import BrandsList from '../../Cart/Brands/brandslist';
import StoreList from '../../Cart/Store/storelist';
const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <CategoryCardList />
      <CardList/>
      <SmallCarousel/>
      <ActuallyCardList/>
      <BrandsList/>  
      <SmallCarousel/>
      <StoreList/>
      <Footer/>
    </div>
  );
}

export default Home;

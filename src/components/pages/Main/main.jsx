import React from 'react';
import Header from '../../headerr/header';
import Carousel from '../../Carousels/Large/Carousel';
import PcList from '../../Cart/pc/pclist';
import Footer from '../../Footer/footer';
import CardList from '../../Cart/BestSell/CardList'

const Main = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <PcList />
      <CardList/>
      <Footer/>
    </div>
  );
}

export default Main;

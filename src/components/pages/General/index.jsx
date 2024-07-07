import React from 'react';
import Header from '../../headerr/header';
import Carousel from '../../Carousels/Large/Carousel';
import Footer from '../../Footer/footer';
import Layout from '../../Layout/Layout';
import Sidebar from '../../Sidebar/sidebar';

const General = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default General;

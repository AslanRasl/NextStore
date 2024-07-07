import React from 'react';
import FiveProductGrid from './FiveProductGrid';
import image from "../../../../assets/pc.png";
import "./ProductGrid.scss"
const products = [
    {
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: true,
        image: image,
    },
    {
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: false,
        image: image,
    }, 
    {
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: true,
        image: image,
    },
    {
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: true,
        image: image,
    }, 
    {
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: false,
        image: image,
    },
];

const ParentComponent = () => {
  return (
    <div>
      <h1 className='title'>Eng ko’p sotilgan</h1>
      <FiveProductGrid products={products} />
    </div>
  );
};

export default ParentComponent;

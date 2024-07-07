import React from 'react';
import Product from '../product/Product';
import './ProductGrid.scss';
import image from "../../../../assets/pc.png"

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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }
    ,{
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: false,
        image: image,
    }
    ,{
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: false,
        image: image,
    }
    ,{
        price: '16 114 285',
        name: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB',
        orderCount: 230,
        topSale: false,
        image: image,
    }
    ,{
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
        topSale: false,
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
        topSale: false,
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

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;

import React from 'react';
import './ProductDetails.scss';
import ProductDetails2 from './productdetails2';
const ProductDetails = () => {
  const details = [
    {
      manufacturerCode: 'MJDPLO1YL',
      productCode: '600001825482',
    },
    {
      manufacturerCode: 'MJDPLO1YL',
      productCode: '600001825482',
    },
    {
      manufacturerCode: 'MJDPLO1YL',
      productCode: '600001825482',
    },
    {
      manufacturerCode: 'MJDPLO1YL',
      productCode: '600001825482',
    },
  ];

  return (
    <div className="product-details">
      <h2>Mahsulot xususiyatlari</h2>
      {details.map((detail, index) => (
        <div className="factory-details" key={index}>
          <div className="factory-details-section">
            <span className="label">Zavod mahsuloti ma'lumotlari</span>
            <div className="detail">
              <span className="label">Ishlab chiqaruvchining kodi</span>
              <span className="value">{detail.manufacturerCode}</span>
            </div>
            <div className="detail">
              <span className="label">Mahsulot kodi</span>
              <span className="value">{detail.productCode}</span>
            </div>
            <div className="detail">
              <span className="label">Ishlab chiqaruvchining kodi</span>
              <span className="value">{detail.manufacturerCode}</span>
            </div>
            <div className="detail">
              <span className="label">Ishlab chiqaruvchining kodi</span>
              <span className="value">{detail.manufacturerCode}</span> 
            </div>
          </div>
        </div>
      ))}
      <div className="">
        <ProductDetails2/>
      </div>
    </div>
  );
};

export default ProductDetails;

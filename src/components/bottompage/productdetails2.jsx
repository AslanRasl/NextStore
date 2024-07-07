import React from 'react';
import './ProductDetails.scss';

const ProductDetails2 = () => {
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
    <div className="product-details2">
      <div className="second__display">
      {details.map((detail, index) => (
        <div className="factory-details" key={index}>
          <div className="factory-details-section">
            <div className="detail">
              <span className="label">Ishlab chiqaruvchining kodi</span>
              <span className="value">{detail.manufacturerCode}</span>
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
      </div>
    </div>
  );
};

export default ProductDetails2;

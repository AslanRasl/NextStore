import React, { useContext } from 'react';
import './Product.scss';
import basket from "../../../../assets/basket.svg";
import favourite from "../../../../assets/favourite.svg";
import { CartContext } from '../../../../CartContext'; 
const Product = ({ product }) => {
  const { price, name, orderCount, image, topSale } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
      addToCart({image, name, price, orderCount });
  };
  return (
    <div className="Card-wrapper">
      {topSale && <div className="top-sale">Top sale</div>}
      <button className="like-btn"><img src={favourite} alt="Favourite" /></button>
      <img className="product-img" src={image} alt={name} />
      <h2>{price}</h2>
      <p>{name}</p>
      <span>{orderCount} ta buyurtma</span>
      <div className="card-bottom"> 
    <button className="buy-product">Sotib olish</button> 
    <button className="card__btn" onClick={handleAddToCart}><img src={basket} alt="" /></button> 
</div>
    </div>
  );
};

export default Product;

import React, { useContext } from 'react';
import favourite from '../../assets/heart.svg'
import basket from "../../assets/basket.svg"  
import { CartContext } from '../../CartContext';


const XiaCard = ({ id, img, name, price, pieces }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, img, name, price, pieces });
    };
  return(
  <div className="Xia-wrapper">
        <button className="like-btn"><img src={favourite} alt="" /></button> 
        <img className="product-img" src={img} alt={name} />
        <h2 className='xia__name'>{price}</h2>
        <p>{name}</p>
        <span>{pieces} ta buyurtma</span>
        <div className="card-bottom"> 
    <button className="buy-product">Sotib olish</button> 
    <button className="card__btn" onClick={handleAddToCart}><img src={basket} alt="" /></button> 
</div> 
    </div>
)};

export default XiaCard;

import React, { useContext } from 'react';
import './Card.scss' 
import basket from "../../assets/basket.svg" 
import favourite from "../../assets/favourite.svg" 
import { useEffect, useState } from "react"; 
import { CardData } from '../../data/data' 
import { CartContext } from '../../CartContext'; 
const Card = ({ id, img, name, price, pieces }) => { 
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, img, name, price, pieces });
    };

    return (
        <div className="Card-wrapper"> 
<button className="like-btn"><img src={favourite} alt="" /></button> 
<img className="product-img" src={img} alt="" /> 
<h2>{price}</h2> 
<p>{name}</p> 
<span>{pieces} ta buyurtma</span> 
<div className="card-bottom"> 
    <button className="buy-product">Sotib olish</button> 
    <button className="card__btn" onClick={handleAddToCart}><img src={basket} alt="" /></button> 
</div> 
</div> 
    )}
export default Card
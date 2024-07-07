import React from "react"; 
import "./CategoryCard.scss"
import { useEffect, useState } from "react"; 
import { CardData } from '../../data/categorydata' 
 
const CategoryCard = ({ id, img, name}) => { 
    return ( 
        <div className="CategoryCard-wrapper"> 
            <img className="product-img" src={img} alt="" /> 
            <p>{name}</p> 
        </div> 
    ) 
} 
 
export default CategoryCard
import React from "react"; 
import './brands.scss' 
import { useEffect, useState } from "react"; 
import { CardData } from '../../data/brands' 
 
const Brands = ({ id, img }) => { 
    return ( 
        <div className="brands-wrapper"> 
            <img className="brand-img" src={img} alt="" /> 
        </div> 
    ) 
} 
export default Brands
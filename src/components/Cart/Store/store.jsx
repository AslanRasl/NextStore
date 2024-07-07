import React from "react"; 
import './store.scss' 
import { useEffect, useState } from "react"; 
import { CardData } from '../../data/brands' 
 
const Store = ({ id, img }) => { 
    return ( 
        <div className="store-wrapper"> 
            <img className="store-img" src={img} alt="" /> 
        </div> 
    ) 
} 
export default Store
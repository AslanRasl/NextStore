import React from "react";
import './brands.scss'
import { CardData } from '../../data/brands' 
import Brands from "./brands";

const BrandsList = () => {
    return (
        <div className="container">
            <h2 className="title">Brendlar bo’yicha</h2>
            <div className="brands-inner">
                {CardData.map((item) => (
                    <Brands
                        key={item.id}
                        id={item.id}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandsList
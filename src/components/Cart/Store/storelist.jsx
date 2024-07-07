import React from "react";
import './store.scss'
import { CardData } from '../../data/brands' 
import Store from "./store";

const StoreList = () => {
    const limitedCardData = CardData.slice(0, 12);

    return (
        <div className="container">
            <h2 className="title">Do’konlarimiz</h2>
            <div className="store-inner">
                {limitedCardData.map((item) => (
                    <Store
                        key={item.id}
                        id={item.id}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default StoreList

import React, { useState } from "react";
import './Card.scss';
import { CardData } from '../../data/data'; 
import ActuallyCard from './ActuallyCard';

const ActuallyCardList = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        setCart((prevCart) => [...prevCart, id]);
    };

    return (
        <div className="container">
            <h2 className="title">Eng ommabop</h2>
            <div className="CardList-inner">
                {CardData.map((item) => (
                    <ActuallyCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        pieces={item.pieces}
                        addToCart={addToCart}
                    />
                ))}
                <a className="Ahref" href="General">
                <button className="more">Ko’proq ko’rish</button>
                </a>
            </div>
        </div>
    );
};

export default ActuallyCardList;

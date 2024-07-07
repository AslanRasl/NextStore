import React from "react";
import './CategoryCard.scss'
import { CardData } from '../../data/categorydata'
import Card from './CategoryCard'

const CategoryCardList = () => {
    return (
        <div className="container">
            <h2 className="category-title">Kategoriyalar</h2>
            <div className="CategoryCardList-inner">
                {CardData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                    />
                ))}
            </div>
            <button className="detailed">Batafsil</button>
        </div>

    )
}

export default CategoryCardList
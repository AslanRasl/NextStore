import React from "react";
import './pc.scss'
import { CardData } from './pc' 
import PcCard from './pc-card'

const PcList = () => {
    return (
        <div className="container">
            <h2 className="title">Nextstore / Kompyuterlar va notebooklar</h2>
            <div className="PcList-inner"> 
                {CardData.map((item) => (
                    <PcCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        pieces={item.pieces}
                    />
                ))}
            </div>
        </div>
    )
}

export default PcList
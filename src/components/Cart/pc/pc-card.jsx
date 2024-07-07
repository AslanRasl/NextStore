import React from "react";
import './pc.scss'
import { useEffect, useState } from "react";
import { CardData } from './pc'

const PcCard = ({ id, img, name, pieces }) => {
    return (
        <div className="Pc-wrapper">
            <a href="General">
            <img className="pc-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{pieces} ta maxsulot</p>
            </a>
        </div>
    )
}
export default PcCard
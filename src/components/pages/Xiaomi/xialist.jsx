
import React, { useState } from "react";
import './xia.scss';
import { CardData } from './CardData';
import XiaCard from './XiaCard';

const ITEMS_PER_PAGE = 15;

const XiaList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(CardData.length / ITEMS_PER_PAGE);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentItems = CardData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className="containerr">
            <h2 className="title">“ Xiaomi “ so’rovi uchun topildi : 1242 ta mahsulot</h2>
            <div className="XiaList-inner">
                {currentItems.map((item) => (
                    <XiaCard
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        img={item.img}
                        name={item.name}
                        pieces={item.pieces}
                    />
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default XiaList;

// LogPg3.js
import React from "react";
import Cross from "../../assets/cross.svg";
import "./page3.scss";

const LogPg3 = ({ onClose, setLoginModalStep }) => {
    const handleClose = () => {
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };

    const handleOpenLogPg4 = () => {
        setLoginModalStep("logpg4");
    };

    return (
        <div className='overlay' onClick={handleOverlayClick}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <div className="cross">
                    <button className="crosss" onClick={handleClose}>
                        <img src={Cross} alt="Close" />
                    </button>
                </div>
                <div className="hero__page">
                    <h1 className="pg__title">Telefon raqamini kiriting </h1>
                    <input type="tel" className="pg__inp" placeholder="+ 998 9* *** ** **" />
                    <button className="login" onClick={handleOpenLogPg4}>Kodni qabul qilish</button>
                </div>
            </div>
        </div>
    );
};

export default LogPg3;

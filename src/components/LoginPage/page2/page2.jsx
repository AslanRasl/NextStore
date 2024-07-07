// LogPg2.js
import React from "react";
import Cross from "../../assets/cross.svg";
import "./page2.scss";

const LogPg2 = ({ onClose, setLoginModalStep }) => {
    const handleClose = () => {
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
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
                    <h1 className="pg__title">Telefon raqam orqali kirish</h1>
                    <input className="pg__inp" type="tel" placeholder="Telefon raqam " />
                    <input className="pg__inp" type="password" placeholder="Parol" />
                    <button className="login2">Kirish</button>
                    <p className="end__text">Parolni unutdingizmi ?</p>
                </div>
            </div>
        </div>
    );
};

export default LogPg2;

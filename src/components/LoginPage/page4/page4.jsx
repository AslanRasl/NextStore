// LogPg4.js
import React from "react";
import Cross from "../../assets/cross.svg";
import "./page4.scss";

const LogPg4 = ({ onClose, setLoginModalStep }) => {
    const handleClose = () => {
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };

    const handleResetPasswordClick = () => {
        setLoginModalStep("logpg5");
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
                    <h1 className="pg__title">Parolni tiklash</h1>
                    <input type="tel" className="pg__inp" placeholder="Telefon raqami " />
                    <button className="login" onClick={handleResetPasswordClick}>Parolni tiklash</button>
                    <button className="loginn2">Qayta jo’natish</button>
                </div>
            </div>
        </div>
    );
};

export default LogPg4;

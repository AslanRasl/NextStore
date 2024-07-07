// LogPg5.js
import React from "react";
import Cross from "../../assets/cross.svg";
import "./page5.scss";

const LogPg5 = ({ onClose }) => {
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
                    <h1 className="pg__title">Kirishni tasdiqlash</h1>
                    <p className="subtitle__pg">+ 998 9* *** ** ** raqamga kod yubordik</p>
                    <input type="password" className="pg__inp" placeholder="Bir martalik kodni kiriting" />
                    <button className="login2">Kirish</button>
                    <button className="loginn2">Parol kelmadimi?</button>
                </div>
            </div>
        </div>
    );
};

export default LogPg5;

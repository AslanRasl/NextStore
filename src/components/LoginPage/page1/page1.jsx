// LogPg1.js
import React, { useState } from "react";
import Cross from "../../assets/cross.svg";
import "./page1.scss";

const LogPg1 = ({ onClose, setLoginModalStep }) => {
    const [fadeState, setFadeState] = useState("fadeIn");

    const handleClose = () => {
        setFadeState("fadeOut");
        const timer = setTimeout(() => {
            onClose();
        }, 300);
        return () => clearTimeout(timer);
    };

    const handleNext = () => {
        setFadeState("fadeOut");
        const timer = setTimeout(() => {
            setLoginModalStep("logpg2");
        }, 300);
        return () => clearTimeout(timer);
    };

    const handleRegister = () => {
        setFadeState("fadeOut");
        const timer = setTimeout(() => {
            setLoginModalStep("logpg3");
        }, 300);
        return () => clearTimeout(timer);
    };

    return (
        <div className={`overlay ${fadeState}`} onClick={handleClose}>
            <div className={`modal ${fadeState}`} onClick={(e) => e.stopPropagation()}>
                <div className="cross">
                    <button className="crosss" onClick={handleClose}>
                        <img src={Cross} alt="Close" />
                    </button>
                </div>
                <div className="hero__page">
                    <h1 className="pg__title">Hisobga kirish uchun</h1>
                    <button className="login" onClick={handleNext}>Kirish</button>
                    <p>Yoki</p>
                    <button className="btn2" onClick={handleRegister}>Ro’yxatdan o’tish</button>
                </div>
            </div>
        </div>
    );
};

export default LogPg1;

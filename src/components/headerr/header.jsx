import React, { useContext, useState, useEffect } from 'react';
import './header.scss';
import Fire from "../assets/fire.png";
import msg from '../assets/aloqa.svg';
import Logo from '../assets/Logo.svg';
import burger from '../assets/burgerbtn.svg';
import closeIcon from '../assets/close.png';
import search from '../assets/searchbtn.svg';
import heart from '../assets/heart.svg';
import shop from '../assets/shop.svg';
import { CartContext } from '../CartContext';
import LogPg1 from '../LoginPage/page1/page1';
import LogPg2 from '../LoginPage/page2/page2';
import LogPg3 from '../LoginPage/page3/page3';
import LogPg4 from '../LoginPage/page4/page4';
import LogPg5 from '../LoginPage/page5/page5';
import Cart from './cartkr'; 

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [loginModalStep, setLoginModalStep] = useState(null);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, [setCart]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleLoginClick = () => {
        setLoginModalStep("logpg1");
    };

    const closeLoginModal = () => {
        setLoginModalStep(null);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__top">
                        <div className="aloqa">
                            <img src={msg} alt="email icon" />
                            <p className="aloqa__text">Aloqa uchun</p>
                        </div>
                        <select className="langgggg">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                    <nav>
                        <div className="text-content">
                            <a href="/"><img src={Logo} alt="Logo" /></a>
                            <ul className="nav-items">
                                <li className="item">
                                    <button className="catalog" onClick={toggleMenuVisibility}>
                                        <img className="burger" src={isMenuVisible ? closeIcon : burger} alt="burger icon" />
                                        <h4 className="bur__text">KATALOG</h4>
                                    </button>
                                                                        {isMenuVisible && ( 
                                         <div className="dropdown-menu"> 
                                             <div className="dropdown-category"> 
                                                 <ul className="category-list"> 
                                                     <li><a className="aks" href="#"><img src={Fire} alt="fire icon" /> Aksiya</a></li> 
                                                     <li><a href="/Main">Kompyuterlar va notebooklar</a></li> 
                                                     <li><a href="#">Telefonlar</a></li> 
                                                     <li><a href="#">Maishiy texnika</a></li> 
                                                     <li><a href="#">Erkaklar uchun kiyim</a></li> 
                                                     <li><a href="#">Ayollar uchun kiyimlar</a></li> 
                                                     <li><a href="#">Bolalar uchun </a></li> 
                                                     <li><a href="#">Avtomobil mahsulotlari</a></li> 
                                                     <li><a href="#">Go'zallik va so'glik</a></li> 
                                                     <li><a href="#">Sport va o'yin-kulgi</a></li> 
                                                     <li><a href="#">Uy hayvonlari uchun tovarlar</a></li> 
                                                     <li><a href="#">Xobbi va ijodkorlik</a></li> 
                                                     <li><a href="#">Kantselyariya buyumlari</a></li> 
                                                     <li><a href="#">Maishiy kimyo</a></li> 
                                                     <li><a href="#">Sport va o'yin-kulgilar</a></li> 
                                                     <li><a href="#">Uy hayvonlari uchun tovarlar</a></li> 
                                                     <li><a href="#">Aksesuarlar</a></li> 
                                                 </ul> 
                                             </div> 
                                             <div className="category-inner"> 
                                                 <ul className="left-item"> 
                                                     <span className="brands"><h4>Brendlar</h4></span> 
                                                     <li><a href="#">Samsung</a></li> 
                                                     <li><a href="#">Vivo</a></li> 
                                                     <li><a href="#">Tecno</a></li> 
                                                     <li><a href="#">Realme</a></li> 
                                                     <li><a href="Xiaomi">Xiaomi</a></li> 
                                                     <li><a href="#">Apple</a></li> 
                                                     <li><a href="#">Artel</a></li> 
                                                     <li><a href="#">Nokia</a></li> 
                                                     <li><a href="#">OnePlus</a></li> 
                                                     <li><a href="#">ZTE</a></li> 
                                                     <li><a href="#">Blackview</a></li> 
                                                     <li><a href="#">Oppo</a></li> 
                                                     <li><a href="#">Ergo</a></li> 
                                                     <li><a href="#">BQ</a></li> 
                                                     <li><a href="#">Huawei</a></li> 
                                                     <li><a href="#">Alcatel</a></li> 
                                                     <li><a href="#">TCL</a></li> 
                                                     <li><a href="#">Inoi</a></li> 
                                                     <li><a href="#" className="active-link">Ko’proq</a></li> 
                                                 </ul> 
                                                 <div className="grid-container"> 
                                                     <ul> <span className="brands"><h4>Samsung Brendi</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li></ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Redmi & Xiaomi</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Apple brendi</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Huawei</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Eng ommabop</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Eng arzonlari</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Huawei mobile</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Huawei mobile</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                     <ul> 
                                                         <span className="brands"><h4>Huawei mobile</h4></span> 
                                                         <li><a href="#">S serialar</a></li> 
                                                         <li><a href="#">A serialar</a></li> 
                                                         <li><a href="#">Note serilar</a></li> 
                                                         <li><a href="#">M serialar</a></li> 
                                                     </ul> 
                                                 </div> 
                                             </div> 
                                         </div> 
                                     )}
                                 </li>
                                 <div className="srch">
                                <input className="search" type="text" placeholder="Maxsulotlarni izlash" />
                                <button className="srch__btn"><img src={search} alt="search button" /></button>
                            </div>
                            <button className="heart">
                                <img src={heart} alt="wishlist icon" />
                            </button>

                                <li className="nav-icon-item">
                                    <button className="shop" onClick={toggleCartVisibility}>
                                        <img src={shop} alt="shop icon" />
                                    </button>
                                    <span className="cart-count">{cart.length}</span>
                                    {isCartVisible && (
                                        <div className="cart-dropdown">
                                            <Cart />
                                        </div>
                                    )}
                                </li>
                            </ul>
                           
                            <button className="loginn" onClick={handleLoginClick}>Kirish</button>
                        </div>
                    </nav>
                </div>
            </header>

            {loginModalStep === "logpg1" && <LogPg1 onClose={closeLoginModal} setLoginModalStep={setLoginModalStep} />}
            {loginModalStep === "logpg2" && <LogPg2 onClose={closeLoginModal} />}
            {loginModalStep === "logpg3" && <LogPg3 onClose={closeLoginModal} setLoginModalStep={setLoginModalStep} />}
            {loginModalStep === "logpg4" && <LogPg4 onClose={closeLoginModal} setLoginModalStep={setLoginModalStep} />}
            {loginModalStep === "logpg5" && <LogPg5 onClose={closeLoginModal} />}
        </>
    );
};

export default Header;
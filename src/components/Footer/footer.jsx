import React from "react";
import "./footer.scss";
import "../../components/Footer/variables.scss"
import facebook from "../assets/Facebook - Original.png"
import instagram from "../assets/Instagram - Original.png"
import telegram from "../assets/Telegram - Original.png"
import tikTok from "../assets/TikTok - Original.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_top">
                    <div className="left-content">
                        <ul className="left-list" >
                            <h3>Hujjatlar</h3>
                            <li className="left-list-item"><a href="#">Ummumiy shartlar</a></li>
                            <li className="left-list-item"><a href="#">Ofertalar arxivi</a></li>
                            <li className="left-list-item"><a href="#">Nizom</a></li>
                            <li className="left-list-item"><a href="#">Guvohnoma</a></li>
                        </ul>
                        <ul className="left-list">
                            <h3>Servis</h3>
                            <li className="left-list-item"><a href="#">Do`konlar</a></li>
                            <li className="left-list-item"><a href="#">Biz haqimizda</a></li>
                            <li className="left-list-item"><a href="#">Hamkorlik uchun</a></li>
                            <li className="left-list-item"><a href="#">Qaytarish</a></li>
                            <li className="left-list-item"><a href="#">Promokodlar</a></li>
                        </ul>
                        <ul className="left-list">
                            <h3>Mahsulotlar katalogi</h3>
                            <li className="left-list-item"><a href="#">Katalog 1</a></li>
                            <li className="left-list-item"><a href="#">Katalog 1</a></li>
                            <li className="left-list-item"><a href="#">Katalog 2</a> </li>
                            <li className="left-list-item"><a href="#">Katalog 2</a></li>
                            <li className="left-list-item"><a href="#">Katalog 3</a></li>
                            <li className="left-list-item"><a href="#">Katalog 3</a></li>
                        </ul>
                    </div>
                    <div className="right-content">
                        <ul className="right-list" >
                            <h3>Axborot xizmati</h3>
                            <li className="right-list-item"><a href="mailto:contact.@nextstore.uz">contact.@nextstore.uz</a>
                            </li>
                            <li className="right-list-item"><a href="tel:+998 97 712 96 96  ">+998 97 712 96 96</a>
                            </li>
                            <li className="right-list-item"><a href="tel:+998 97 712 96 96  ">+998 97 712 96 96 </a>
                            </li>
                            <li className="right-list-item">
                                Sag’bon 186, Olmazor tumani, Toshkent, <br />
                                O`zbekiston
                            </li>
                            <ul className="social-list">
                                <li><a href="https://www.facebook.com/p/Nextstoreuz-100064907156313/?locale=bs_BA" target="_blank"><img src={facebook} alt="" /></a></li>
                                <li><a href="https://www.instagram.com/nextstore.uz" target="_blank"><img src={instagram} alt="" /></a></li>
                                <li><a href="https://web.telegram.org/k/#@next_store_uz" target="_blank"><img src={telegram} alt="" /></a></li>
                                <li><a href="https://www.tiktok.com/@nextstore_uz" target="_blank"><img src={tikTok} alt="" /></a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer-bottom">
                    <p>2022 Nextstore.com</p>
                    <p>Powered by</p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;
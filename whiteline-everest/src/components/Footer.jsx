import React from 'react';
import { FaWhatsapp, FaTelegram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="/" className="footer__logo">
                            <span>WhiteLine</span>
                            <span className="footer__logo-accent">&</span>
                            <span>Everest</span>
                        </a>
                        <p className="footer__tagline">
                            Ваша белая логистика «под ключ» из Китая и Кыргызстана
                        </p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <h4>Навигация</h4>
                            <ul>
                                <li><a href="#advantages">Преимущества</a></li>
                                <li><a href="#steps">Этапы работы</a></li>
                                <li><a href="#services">Услуги</a></li>
                                <li><a href="#reviews">Отзывы</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h4>Услуги</h4>
                            <ul>
                                <li><a href="#services">ВЭД под ключ</a></li>
                                <li><a href="#services">Маркировка</a></li>
                                <li><a href="#services">Сертификация</a></li>
                                <li><a href="#services">Контрактное производство</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h4>Контакты</h4>
                            <ul>
                                <li>
                                    <a href="tel:+79773923157">
                                        <FaPhone /> +7 (977) 392-31-57
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:sert-ekb.souz@mail.ru">
                                        <FaEnvelope /> sert-ekb.souz@mail.ru
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} WhiteLine & Everest. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaTelegram, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Преимущества', href: '#advantages' },
        { name: 'Этапы работы', href: '#steps' },
        { name: 'Услуги', href: '#services' },
        { name: 'Отзывы', href: '#reviews' },
        { name: 'Контакты', href: '#contacts' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__container">
                <a href="/" className="header__logo">
                    <span className="header__logo-text">WhiteLine</span>
                    <span className="header__logo-accent">&</span>
                    <span className="header__logo-text">Everest</span>
                </a>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="header__link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="header__actions">
                    <a href="tel:+79773923157" className="header__phone">
                        <FaPhone />
                        <span>+7 (977) 392-31-57</span>
                    </a>
                    <div className="header__social">
                        <a href="https://wa.me/79773923157" className="header__social-link" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://t.me/whiteline_everest" className="header__social-link" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                    </div>
                    <button 
                        className="header__mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Меню"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <p className="hero__overline">
                        ВАШ НАДЕЖНЫЙ МОСТ МЕЖДУ КИТАЕМ, КИРГИЗИЕЙ И РФ
                    </p>
                    <h1 className="hero__title">
                        WHITE LINE: ПОЛНЫЙ ВЭД И{' '}
                        <span className="hero__title-accent">БЕЛАЯ ДОСТАВКА</span>{' '}
                        ИЗ КИТАЯ И КИРГИЗИИ «ПОД КЛЮЧ»
                    </h1>
                    <p className="hero__subtitle">
                        От поиска фабрики до таможенного оформления и доставки 
                        на ваш склад. 100% легально, с полным пакетом документов 
                        и маркировкой Честный ЗНАК.
                    </p>
                    
                    <div className="hero__cta">
                        <a href="#lead-form" className="btn btn-primary btn-large">
                            РАССЧИТАТЬ СТОИМОСТЬ БЕЛОГО ВЭД ПОД КЛЮЧ
                        </a>
                        <p className="hero__cta-note">
                            Бесплатно. Без предоплаты. Ответ за 15 минут.
                        </p>
                    </div>

                    <div className="hero__features">
                        <div className="hero__feature">
                            <FaShieldAlt className="hero__feature-icon" />
                            <span>100% Белая таможня</span>
                        </div>
                        <div className="hero__feature">
                            <FaClock className="hero__feature-icon" />
                            <span>Сроки от 14 дней</span>
                        </div>
                        <div className="hero__feature">
                            <FaHeadset className="hero__feature-icon" />
                            <span>Поддержка 24/7</span>
                        </div>
                    </div>
                </div>
                <div className="hero__image">
                    <div className="hero__image-wrapper">
                        <img 
                             src="/assets/images/founder.png" 
                             alt="Основатель WhiteLine & Everest Светлана Гламазда"
                              loading="eager"
                             fetchPriority="high"
                             />
                        <div className="hero__badge">
                            <span className="hero__badge-number">10+</span>
                            <span className="hero__badge-text">лет опыта в ВЭД</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

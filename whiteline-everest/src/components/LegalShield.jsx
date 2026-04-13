import React from 'react';
import { FaFileSignature, FaMoneyBillWave, FaQrcode, FaCheck } from 'react-icons/fa';
import './LegalShield.css';

const LegalShield = () => {
    const features = [
        {
            icon: <FaFileSignature />,
            title: 'ЭДО и Договоры',
            description: 'Полный пакет закрывающих документов. Работаем через систему электронного документооборота.',
            items: ['Договор ВЭД', 'Счета-фактуры', 'ТТН/CMR', 'Декларации'],
        },
        {
            icon: <FaMoneyBillWave />,
            title: 'Валютный контроль',
            description: 'Полное сопровождение валютных операций. Работа с уполномоченными банками.',
            items: ['Паспорт сделки', 'Валютный контроль', 'Справка о ДУ', 'Отчетность ЦБ'],
        },
        {
            icon: <FaQrcode />,
            title: 'Честный ЗНАК',
            description: 'Маркировка товаров в соответствии с требованиями РФ. Получение кодов, нанесение.',
            items: ['Регистрация в ЧЗ', 'Получение кодов', 'Нанесение маркировки', 'Ввод в оборот'],
        },
    ];

    return (
        <section id="services" className="section legal-shield">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    ЮРИДИЧЕСКИЙ ЩИТ ВАШЕГО БИЗНЕСА:{' '}
                    <span className="text-accent">100% БЕЛАЯ ТАМОЖНЯ И ДОКУМЕНТЫ</span>
                </h2>
                <p className="section-subtitle fade-in-up">
                    Гарантируем полную легальность всех операций
                </p>

                <div className="legal-shield__grid">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="legal-card fade-in-up"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="legal-card__header">
                                <div className="legal-card__icon">{feature.icon}</div>
                                <h3 className="legal-card__title">{feature.title}</h3>
                            </div>
                            <p className="legal-card__description">{feature.description}</p>
                            <ul className="legal-card__list">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="legal-card__item">
                                        <FaCheck className="legal-card__check" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LegalShield;

import React, { useState } from 'react';
import { FaTshirt, FaCog, FaBox, FaCheckCircle } from 'react-icons/fa';
import './Expertise.css';

const Expertise = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            icon: <FaTshirt />,
            title: 'Текстиль и одежда',
            description: 'Полный цикл производства: от ткани до готового изделия',
            features: [
                'Поиск фабрик по спецификации',
                'Контроль качества тканей и фурнитуры',
                'Лекала и образцы',
                'Маркировка размеров и состава',
                'Упаковка и брендинг',
            ],
        },
        {
            icon: <FaBox />,
            title: 'Пластик и упаковка',
            description: 'Изделия из пластика любой сложности',
            features: [
                'Литье под давлением',
                'Экструзия и выдув',
                '3D-печать прототипов',
                'Сертификация для пищевой промышленности',
                'Эко-материалы',
            ],
        },
        {
            icon: <FaCog />,
            title: 'Оборудование и станки',
            description: 'Промышленное оборудование под ключ',
            features: [
                'Технический аудит поставщика',
                'Проверка перед отгрузкой',
                'Таможенное оформление сложной техники',
                'Сертификация и декларирование',
                'Шеф-монтаж и пусконаладка',
            ],
        },
    ];

    return (
        <section className="section expertise">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    ОТ ФАБРИЧНОГО ТЕКСТИЛЯ ДО ТЯЖЕЛЫХ СТАНКОВ:{' '}
                    <span className="text-accent">РЕАЛИЗУЕМ ПРОЕКТЫ ЛЮБОЙ СЛОЖНОСТИ</span>
                </h2>
                <p className="section-subtitle fade-in-up">
                    Специализируемся на сложных проектах с полным циклом сопровождения
                </p>

                <div className="expertise__tabs">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`expertise__tab ${activeTab === index ? 'expertise__tab--active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {cat.icon}
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </div>

                <div className="expertise__content fade-in-up">
                    <div className="expertise__info">
                        <h3 className="expertise__title">
                            {categories[activeTab].icon}
                            {categories[activeTab].title}
                        </h3>
                        <p className="expertise__description">
                            {categories[activeTab].description}
                        </p>
                        <ul className="expertise__features">
                            {categories[activeTab].features.map((feature, i) => (
                                <li key={i} className="expertise__feature">
                                    <FaCheckCircle className="expertise__check" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#lead-form" className="btn btn-secondary">
                            Рассчитать проект
                        </a>
                    </div>
                    <div className="expertise__image-placeholder">
                        <span>Изображение: {categories[activeTab].title}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;

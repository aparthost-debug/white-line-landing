import React from 'react';
import { FaSearch, FaFileAlt, FaShippingFast, FaCheckCircle, FaClock } from 'react-icons/fa';
import './Steps.css';

const Steps = () => {
    const steps = [
        {
            icon: <FaSearch />,
            number: '01',
            title: 'Поиск и аудит поставщика',
            description: 'Находим проверенные фабрики, проводим переговоры, заключаем контракт',
            time: '3-5 дней',
            price: 'Бесплатно',
        },
        {
            icon: <FaFileAlt />,
            number: '02',
            title: 'Сертификация и маркировка',
            description: 'Оформляем все необходимые документы, наносим Честный ЗНАК',
            time: '5-7 дней',
            price: 'от 15 000 ₽',
        },
        {
            icon: <FaShippingFast />,
            number: '03',
            title: 'Доставка и таможня',
            description: 'Транспортировка, таможенное оформление, уплата пошлин',
            time: '14-21 день',
            price: 'от $2.5/кг',
        },
        {
            icon: <FaCheckCircle />,
            number: '04',
            title: 'Доставка до склада',
            description: 'Финальная доставка по РФ, передача документов',
            time: '2-4 дня',
            price: 'по тарифу ТК',
        },
    ];

    return (
        <section id="steps" className="section steps">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    ПРОЗРАЧНЫЕ ЭТАПЫ РАБОТЫ И{' '}
                    <span className="text-accent">ФОРМИРОВАНИЕ СТОИМОСТИ</span>
                </h2>
                <p className="section-subtitle fade-in-up">
                    Полный контроль на каждом этапе. Вы знаете, за что платите и когда получите товар
                </p>

                <div className="steps__timeline">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="step-card fade-in-up"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="step-card__number">{step.number}</div>
                            <div className="step-card__icon">{step.icon}</div>
                            <h3 className="step-card__title">{step.title}</h3>
                            <p className="step-card__description">{step.description}</p>
                            <div className="step-card__meta">
                                <span className="step-card__time">
                                    <FaClock /> {step.time}
                                </span>
                                <span className="step-card__price">{step.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="steps__cta fade-in-up">
                    <a href="#lead-form" className="btn btn-primary btn-large">
                        ПОЛУЧИТЬ РАСЧЕТ И ВЫБРАТЬ ОПТИМАЛЬНЫЙ МАРШРУТ
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Steps;

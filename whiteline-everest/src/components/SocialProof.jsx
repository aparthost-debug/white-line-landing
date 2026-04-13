import React from 'react';
import { FaStar } from 'react-icons/fa';
import './SocialProof.css';

const SocialProof = () => {
    const reviews = [
        {
            name: 'Алексей М.',
            company: 'ТекстильОпт',
            message: 'Работаем уже 8 месяцев. Доставили 4 контейнера одежды. Все чисто, документы в порядке.',
            rating: 5,
            platform: 'WhatsApp',
        },
        {
            name: 'Дмитрий К.',
            company: 'ПластМастер',
            message: 'Заказывали оборудование для литья пластика. Привезли, растаможили, подключили.',
            rating: 5,
            platform: 'Telegram',
        },
        {
            name: 'Ольга С.',
            company: 'Детский Мир (ИП)',
            message: 'С детской одеждой помогли. Маркировку сделали, сертификаты получили.',
            rating: 5,
            platform: 'WhatsApp',
        },
    ];

    return (
        <section id="reviews" className="section social-proof">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    МЫ НЕ ИЩЕМ РАЗОВЫХ СДЕЛОК.{' '}
                    <span className="text-accent">МЫ СТАНОВИМСЯ ВАШИМ ВНЕШТАТНЫМ ОТДЕЛОМ ЛОГИСТИКИ</span>
                </h2>
                <p className="section-subtitle fade-in-up">
                    Более 200 постоянных клиентов доверяют нам свои поставки
                </p>

                <div className="reviews__grid">
                    {reviews.map((review, index) => (
                        <div 
                            key={index}
                            className="review-card fade-in-up"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="review-card__header">
                                <div className="review-card__avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="review-card__info">
                                    <h4 className="review-card__name">{review.name}</h4>
                                    <span className="review-card__company">{review.company}</span>
                                </div>
                                <span className="review-card__platform">{review.platform}</span>
                            </div>
                            <div className="review-card__rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="review-card__star" />
                                ))}
                            </div>
                            <p className="review-card__message">"{review.message}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

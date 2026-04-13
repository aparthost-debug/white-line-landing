import React from 'react';
import { 
    FaPercent, FaUserTie, FaFileContract, FaTruck, 
    FaCertificate, FaClock 
} from 'react-icons/fa';
import './Advantages.css';

const Advantages = () => {
    const advantages = [
        {
            icon: <FaPercent />,
            title: 'Выкуп 0%',
            description: 'Никаких скрытых комиссий за выкуп товара. Вы платите только за фактическую стоимость продукции.',
            featured: true,
        },
        {
            icon: <FaUserTie />,
            title: 'Персональный менеджер 24/7',
            description: 'Ваш личный специалист на связи в любое время. Решаем вопросы в режиме реального времени.',
            featured: true,
        },
        {
            icon: <FaFileContract />,
            title: 'Официальный контракт',
            description: 'Полное юридическое сопровождение. Работаем по договору с гарантией исполнения обязательств.',
            featured: false,
        },
        {
            icon: <FaTruck />,
            title: 'Собственный автопарк',
            description: 'Контроль на всех этапах доставки. От склада поставщика до вашего склада в РФ.',
            featured: false,
        },
        {
            icon: <FaCertificate />,
            title: 'Сертификация и маркировка',
            description: 'Полное оформление документов. Честный ЗНАК, декларации, сертификаты соответствия.',
            featured: false,
        },
    ];

    return (
        <section id="advantages" className="section advantages">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    МЫ НЕ ПРОСТО ВОЗИМ КАРГО.<br />
                    <span className="text-accent">МЫ СТРОИМ ВАШ БЕЗОПАСНЫЙ БИЗНЕС С КИТАЕМ</span>
                </h2>
                <p className="section-subtitle fade-in-up">
                    Полный цикл ВЭД-услуг с гарантией легальности и прозрачности на каждом этапе
                </p>

                <div className="advantages__grid">
                    {advantages.map((item, index) => (
                        <div 
                            key={index}
                            className={`advantage-card fade-in-up ${item.featured ? 'advantage-card--featured' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="advantage-card__icon">
                                {item.icon}
                            </div>
                            <h3 className="advantage-card__title">{item.title}</h3>
                            <p className="advantage-card__description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;

import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaPhone, FaCheck } from 'react-icons/fa';
import './LeadForm.css';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        contactMethod: 'whatsapp',
        agree: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Имитация отправки
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        alert('Спасибо! Мы свяжемся с вами в течение 15 минут.');
        setFormData({ name: '', phone: '', email: '', contactMethod: 'whatsapp', agree: false });
    };

    return (
        <section id="lead-form" className="section lead-form">
            <div className="container">
                <div className="lead-form__wrapper fade-in-up">
                    <div className="lead-form__content">
                        <h2 className="lead-form__title">
                            УЗНАЙТЕ РЕАЛЬНУЮ СЕБЕСТОИМОСТЬ ВАШЕГО ТОВАРА В РОССИИ{' '}
                            <span className="text-accent">ДО КОПЕЙКИ</span>
                        </h2>
                        <p className="lead-form__subtitle">
                            Получите детальный расчет с разбивкой по всем статьям расходов
                        </p>

                        <form onSubmit={handleSubmit} className="lead-form__form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Иван Петров"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Телефон</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (___) ___-__-__"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.ru"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Удобный способ связи</label>
                                <div className="contact-methods">
                                    <label className={`contact-method ${formData.contactMethod === 'whatsapp' ? 'contact-method--active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="whatsapp"
                                            checked={formData.contactMethod === 'whatsapp'}
                                            onChange={handleChange}
                                            hidden
                                        />
                                        <FaWhatsapp />
                                        <span>WhatsApp</span>
                                    </label>
                                    <label className={`contact-method ${formData.contactMethod === 'telegram' ? 'contact-method--active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="telegram"
                                            checked={formData.contactMethod === 'telegram'}
                                            onChange={handleChange}
                                            hidden
                                        />
                                        <FaTelegram />
                                        <span>Telegram</span>
                                    </label>
                                    <label className={`contact-method ${formData.contactMethod === 'phone' ? 'contact-method--active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="phone"
                                            checked={formData.contactMethod === 'phone'}
                                            onChange={handleChange}
                                            hidden
                                        />
                                        <FaPhone />
                                        <span>Звонок</span>
                                    </label>
                                </div>
                            </div>

                            <label className="form-checkbox">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkbox-custom"></span>
                                <span className="checkbox-text">
                                    Я даю согласие на обработку персональных данных
                                </span>
                            </label>

                            <button 
                                type="submit" 
                                className="btn btn-primary btn-large form-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Отправка...' : 'ПОЛУЧИТЬ РАСЧЕТ СТОИМОСТИ'}
                            </button>
                        </form>
                    </div>

                    <div className="lead-form__visual">
                        <div className="report-mockup">
                            <div className="report-mockup__header">
                                <span className="report-mockup__logo">WL&E</span>
                                <span className="report-mockup__title">Финансовая модель</span>
                            </div>
                            <div className="report-mockup__body">
                                <div className="report-row">
                                    <span>Стоимость товара</span>
                                    <span>$12,500</span>
                                </div>
                                <div className="report-row">
                                    <span>Логистика</span>
                                    <span>$2,800</span>
                                </div>
                                <div className="report-row">
                                    <span>Таможня</span>
                                    <span>$3,200</span>
                                </div>
                                <div className="report-row report-row--total">
                                    <span>Итого в РФ</span>
                                    <span>1,450,000 ₽</span>
                                </div>
                            </div>
                            <div className="report-mockup__footer">
                                <span>Подробный расчет в PDF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;

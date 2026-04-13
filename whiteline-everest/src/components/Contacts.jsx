import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import './Contacts.css';

const Contacts = () => {
    return (
        <section id="contacts" className="section contacts">
            <div className="container">
                <h2 className="section-title fade-in-up">
                    СВЯЖИТЕСЬ С НАМИ —{' '}
                    <span className="text-accent">ОТВЕТИМ В ТЕЧЕНИЕ 15 МИНУТ</span>
                </h2>

                <div className="contacts__wrapper fade-in-up">
                    <div className="contacts__info">
                        <div className="contact-block">
                            <h3 className="contact-block__title">
                                <FaMapMarkerAlt /> Офис в России
                            </h3>
                            <div className="contact-block__content">
                                <div className="contact-item">
                                    <strong>Екатеринбург:</strong>
                                    <span>ул. Хохрякова, 75, офис 4</span>
                                </div>
                                <div className="contact-item">
                                    <strong>Москва:</strong>
                                    <span>ул. Ангарская, д. 22, корп. 2, оф. 24</span>
                                </div>
                                <div className="contact-item">
                                    <FaClock />
                                    <span>ПН-ПТ: 10:00 - 18:00</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-block">
                            <h3 className="contact-block__title">Контакты</h3>
                            <div className="contact-block__content">
                                <a href="tel:+79773923157" className="contact-link">
                                    <FaPhone />
                                    <span>+7 (977) 392-31-57</span>
                                </a>
                                <a href="mailto:sert-ekb.souz@mail.ru" className="contact-link">
                                    <FaEnvelope />
                                    <span>sert-ekb.souz@mail.ru</span>
                                </a>
                                <div className="contact-social">
                                    <a href="https://wa.me/79773923157" className="contact-social-link whatsapp">
                                        <FaWhatsapp /> WhatsApp
                                    </a>
                                    <a href="https://t.me/whiteline_everest" className="contact-social-link telegram">
                                        <FaTelegram /> Telegram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contacts__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=60.612223%2C56.838926&z=15"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Карта офиса"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

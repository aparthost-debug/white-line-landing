import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Steps from './components/Steps';
import LegalShield from './components/LegalShield';
import Expertise from './components/Expertise';
import LeadForm from './components/LeadForm';
import SocialProof from './components/SocialProof';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.fade-in-up').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Advantages />
                <Steps />
                <LegalShield />
                <Expertise />
                <LeadForm />
                <SocialProof />
                <Contacts />
            </main>
            <Footer />
        </>
    );
}

export default App;

import { useState } from 'react';
import { Search, HelpCircle, CreditCard, Shield, User, Rocket, Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import MeshBackground from '../../components/MeshBackground';
import AnimatedSection from '../../components/AnimatedSection';
import FAQAccordion from '../../components/FAQAccordion';
import styles from './Support.module.css';

const FAQ_ITEMS = [
    {
        question: "How do I reset my password?",
        answer: "You can reset your password by clicking 'Forgot Password' on the login page. We'll send a reset link to your registered email address."
    },
    {
        question: "What are your transaction fees?",
        answer: "Payrant charges a flat 1.5% fee on local transactions and 3.9% on international cards. Transfers to bank accounts attract a flat fee of ₦10."
    },
    {
        question: "How long do settlements take?",
        answer: "Settlements are instant for virtual account payments. Card payments are settled the next day (T+1)."
    },
    {
        question: "How do I integrate Payrant on my website?",
        answer: "You can use our easy-to-install plugins for WordPress/WooCommerce, or integrate directly using our REST API. Check the Developer Documentation for guides."
    }
];

const TOPICS = [
    { icon: <User size={24} />, title: "Account & Profile", desc: "Manage your account settings" },
    { icon: <CreditCard size={24} />, title: "Payments & Refunds", desc: "Understanding transaction flows" },
    { icon: <Shield size={24} />, title: "Security & Fraud", desc: "How we keep your money safe" },
    { icon: <Rocket size={24} />, title: "Getting Started", desc: "New to Payrant? Start here" },
];

const CONTACT_OPTIONS = [
    {
        icon: <Mail size={32} />,
        title: "Email Support",
        desc: "We'll respond within 24 hours.",
        action: "hello@payrant.com",
        link: "mailto:hello@payrant.com"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Live Chat",
        desc: "Chat with our support team in real-time from your dashboard.",
        action: "Start Chat",
        link: "#"
    },
    {
        icon: <Phone size={32} />,
        title: "Phone Support",
        desc: "Mon-Fri, 9AM-6PM WAT",
        action: "+234-8100000654",
        link: "tel:+2348100000654"
    }
];

const Support = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="Payrant Support - We are here to help"
                description="Get help with Payrant products and services. Browse our documentation, FAQs, or contact our support team for assistance with your payment gateway integration."
                keywords="payrant support, customer service, help center, payment gateway help, contact payrant, technical support"
                url="https://payrant.com/support"
            />
            <Navbar />

            {/* Hero */}
            <header className={styles.hero}>
                <MeshBackground />
                <div className={styles.heroContent}>
                    <h1 className={styles.headline}>How can we help you?</h1>
                    <p className={styles.subheadline}>Search our knowledge base or get in touch with our team.</p>

                    <div className={styles.searchBox}>
                        <Search size={20} color="#9CA3AF" />
                        <input type="text" placeholder="Search for answers..." className={styles.searchInput} />
                        <button className={styles.searchBtn}>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Topics Grid */}
            <AnimatedSection className={styles.topicsSection} animation="fade">
                <div className={styles.topicsGrid}>
                    {TOPICS.map((topic, index) => (
                        <div key={index} className={styles.topicCard}>
                            <div className={styles.iconWrapper}>{topic.icon}</div>
                            <h3>{topic.title}</h3>
                            <p>{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                <FAQAccordion items={FAQ_ITEMS} />
            </section>

            {/* Contact Options */}
            <AnimatedSection className={styles.contactSection} animation="slide">
                <div className={styles.sectionTitle} style={{ marginBottom: '60px' }}>Still need help?</div>
                <div className={styles.contactGrid}>
                    {CONTACT_OPTIONS.map((option, index) => (
                        <div key={index} className={styles.contactCard}>
                            <div className={styles.contactIcon}>{option.icon}</div>
                            <h3>{option.title}</h3>
                            <p>{option.desc}</p>
                            <a href={option.link} className={styles.contactLink}>{option.action} →</a>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            <Footer />
        </div>
    );
};

export default Support;

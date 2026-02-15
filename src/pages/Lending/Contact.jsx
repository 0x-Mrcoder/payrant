import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // TODO: Send to backend API
        console.log('Form submitted:', formData);

        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <>
            <Navbar />
            <div className={styles.contact}>
                <SEO
                    title="Contact Us - Get in Touch with Payrant Support | Payrant"
                    description="Contact Payrant for support, sales inquiries, or partnership opportunities. Reach us via email, phone, or visit our office in Lagos, Nigeria."
                    keywords="contact payrant, payrant support, customer service, sales inquiry, partnership, contact information, lagos office"
                    url="https://payrant.com/contact"
                />

                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Get in Touch</h1>
                        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </div>
                </section>

                {/* Main Content */}
                <section className={styles.mainContent}>
                    <div className={styles.container}>
                        <div className={styles.contentGrid}>
                            {/* Contact Info */}
                            <div className={styles.contactInfo}>
                                <h2>Contact Information</h2>
                                <p>Fill out the form and our team will get back to you within 24 hours.</p>

                                <div className={styles.infoCards}>
                                    <div className={styles.infoCard}>
                                        <div className={styles.iconWrapper}>
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3>Email</h3>
                                            <a href="mailto:hello@payrant.com">hello@payrant.com</a>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#6B7280' }}>We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className={styles.infoCard}>
                                        <div className={styles.iconWrapper}>
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3>Phone</h3>
                                            <a href="tel:+2348100000654">+234-8100000654</a>
                                            <span>Mon-Fri, 9AM-6PM WAT</span>
                                        </div>
                                    </div>

                                    <div className={styles.infoCard}>
                                        <div className={styles.iconWrapper}>
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3>Office</h3>
                                            <p>167 VI, Lagos, Nigeria</p>
                                            <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Visit us by appointment</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.socialLinks}>
                                    <h3>Follow Us</h3>
                                    <div className={styles.social}>
                                        <a href="https://twitter.com/payrant" target="_blank" rel="noopener noreferrer">Twitter</a>
                                        <a href="https://linkedin.com/company/payrant" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        <a href="https://facebook.com/payrant" target="_blank" rel="noopener noreferrer">Facebook</a>
                                        <a href="https://instagram.com/payrant" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className={styles.formWrapper}>
                                {submitted ? (
                                    <div className={styles.successMessage}>
                                        <div className={styles.successIcon}>
                                            <Check size={48} />
                                        </div>
                                        <h3>Message Sent!</h3>
                                        <p>Thank you for contacting us. We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={errors.name ? styles.error : ''}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={errors.email ? styles.error : ''}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="subject">Subject *</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={errors.subject ? styles.error : ''}
                                                placeholder="How can we help?"
                                            />
                                            {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={errors.message ? styles.error : ''}
                                                rows="6"
                                                placeholder="Tell us more about your inquiry..."
                                            />
                                            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                                        </div>

                                        <button type="submit" className={styles.submitBtn}>
                                            <Send size={20} />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className={styles.mapSection}>
                    <div className={styles.container}>
                        <h2>Visit Our Office</h2>
                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} />
                            <p>167 VI, Lagos, Nigeria</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;

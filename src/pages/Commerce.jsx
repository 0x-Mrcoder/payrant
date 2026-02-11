import { Link } from 'react-router-dom';
import { Wifi, Battery, Printer, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import MeshBackground from '../components/MeshBackground';
import styles from './Commerce.module.css';

const Commerce = () => {
    return (
        <div className={styles.commerceContainer}>
            <SEO
                title="Features - Payrant Virtual Account Payment Gateway | Advanced Payment Solutions"
                description="Discover Payrant's comprehensive features including bank-level security, multiple bank options, instant notifications, advanced analytics, and developer-friendly APIs for seamless payment processing."
                keywords="payment gateway features, virtual account features, bank payments, payment security, payment analytics, API integration, webhook notifications, payment processing features"
                url="https://payrant.com/pos"
            />
            <Navbar />

            {/* Hero Section */}
            <header className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>New Arrival</div>
                        <h1>Smart POS Terminals for <span className={styles.gradientText}>Modern Business.</span></h1>
                        <p>Accept card payments, track sales, and print receipts with our rugged, all-day battery Android POS. Designed for speed and reliability.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/dashboard" className={styles.primaryBtn}>
                                Order Terminal <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className={styles.secondaryBtn}>
                                Contact Sales
                            </Link>
                        </div>
                        <div className={styles.trustBadges}>
                            <span><CheckCircle2 size={16} color="#10B981" /> Instant Settlement</span>
                            <span><CheckCircle2 size={16} color="#10B981" /> 99.9% Uptime</span>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/payrant_pos_terminal.png"
                                alt="Payrant Smart POS Terminal"
                                className={styles.heroImg}
                            />
                            <div className={styles.glowEffect}></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Grid */}
            <section className={styles.featuresSection}>
                <div className={styles.sectionHeader}>
                    <h2>Built for heavy-duty performance</h2>
                    <p>Hardware that keeps up with your busiest days.</p>
                </div>

                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <Printer size={32} color="#755AE2" />
                        </div>
                        <h3>High-Speed Printer</h3>
                        <p>Built-in thermal printer. Issue receipts in less than 2 seconds. No ink required.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <Wifi size={32} color="#755AE2" />
                        </div>
                        <h3>4G + WiFi</h3>
                        <p>Stay connected anywhere. Automatically switches between WiFi and 4G LTE for uninterrupted sales.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <Battery size={32} color="#755AE2" />
                        </div>
                        <h3>All-Day Battery</h3>
                        <p>Massive 5200mAh battery keeps your terminal running for up to 24 hours on a single charge.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            <Zap size={32} color="#755AE2" />
                        </div>
                        <h3>Instant Settlement</h3>
                        <p>Funds are settled to your Payrant wallet instantly. Access your money when you need it.</p>
                    </div>
                </div>
            </section>

            {/* Tech Specs / CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>Ready to upgrade your checkout?</h2>
                    <p>Get the Payrant Smart POS today and start accepting payments like a pro.</p>
                    <Link to="/dashboard" className={styles.ctaButtonLarge}>
                        Order Now
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Commerce;

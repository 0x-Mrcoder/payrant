import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, BarChart2, Globe, Store, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Commerce.module.css';

const Commerce = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            {/* Hero Section */}
            <header className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Unified commerce for <span className={styles.gradientText}>modern scalable businesses.</span></h1>
                    <p>Accept payments in-store and online with one unified platform. Manage inventory, sales, and customer data in real-time.</p>
                    <div className={styles.heroButtons}>
                        <Link to="/dashboard" className={styles.primaryBtn}>
                            Start Selling
                        </Link>
                        <Link to="/sales" className={styles.secondaryBtn}>
                            Contact Sales
                        </Link>
                    </div>
                </div>
                <div className={styles.heroVisual}>
                    <img src="/assets/payrant_commerce_hero.png" alt="Payrant Commerce POS" className={styles.heroImg} />
                    <div className={styles.glow}></div>
                </div>
            </header>

            {/* Features Grid */}
            <section className={styles.featuresSection}>
                <div className={styles.sectionHeader}>
                    <h2>Everything you need to sell everywhere</h2>
                    <p>From checkout to payout, we give you the tools to grow your revenue.</p>
                </div>

                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper} style={{ background: '#E0F2FE', color: '#0284C7' }}>
                            <Store size={28} />
                        </div>
                        <h3>In-Store POS</h3>
                        <p>Turn any device into a powerful point of sale. Accept cards, transfers, and cash with ease.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper} style={{ background: '#F0FDF4', color: '#16A34A' }}>
                            <Globe size={28} />
                        </div>
                        <h3>Online Store</h3>
                        <p>Launch a beautiful ecommerce store in minutes. No coding required, just list and sell.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper} style={{ background: '#FFF7ED', color: '#EA580C' }}>
                            <Smartphone size={28} />
                        </div>
                        <h3>Mobile Payments</h3>
                        <p>Accept payments on the go with our mobile app. Perfect for pop-ups and deliveries.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper} style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                            <BarChart2 size={28} />
                        </div>
                        <h3>Smart Analytics</h3>
                        <p>Track sales, inventory, and customer behavior across all channels in one dashboard.</p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className={styles.toolsSection}>
                <div className={styles.toolsContent}>
                    <div className={styles.toolsText}>
                        <h2>Powerful tools for payment management</h2>
                        <ul className={styles.toolsList}>
                            <li>
                                <div className={styles.checkIcon}><ShoppingBag size={20} /></div>
                                <div>
                                    <h4>Inventory Management</h4>
                                    <p>Sync stock across online and offline channels automatically.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.checkIcon}><CreditCard size={20} /></div>
                                <div>
                                    <h4>Flexible Payment Options</h4>
                                    <p>Offer Split Payments, Buy Now Pay Later, and Recurring Billing.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Commerce;

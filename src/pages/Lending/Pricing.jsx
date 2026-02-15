import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import MeshBackground from '../../components/MeshBackground';
import styles from './Pricing.module.css';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.container}>
            <SEO
                title="Pricing - Payrant Virtual Account Payment Gateway | Transparent Pricing Plans"
                description="Choose the perfect Payrant pricing plan for your business. Transparent pricing with no hidden fees. Checkout payments at 1%, virtual accounts at 1%, and competitive payout rates."
                keywords="payrant pricing, payment gateway pricing, virtual account pricing, checkout pricing, payout pricing, fintech pricing Nigeria, payment processing costs"
                url="https://payrant.com/pricing"
            />
            <Navbar />

            {/* Custom Hero */}
            <section className={styles.hero}>
                <div className={styles.glow}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Simple, transparent pricing</h1>
                    <p className={styles.heroSubtitle}>
                        No hidden fees. No maintenance charges. Only pay when you get paid.
                    </p>
                </div>
            </section>

            {/* Pricing Section (Moved from LandingPage) */}
            <section className={styles.pricingSection}>
                <div className={styles.pricingGrid}>
                    <div className={styles.pricingCard}>
                        <div className={styles.pricingHeader}>
                            <h3>Checkout Payments</h3>
                            <p className={styles.pricingDesc}>Accept payments through our checkout system with instant virtual account generation</p>
                        </div>
                        <div className={styles.pricingPrice}>
                            <span className={styles.priceAmount}>1%</span>
                            <span className={styles.priceLabel}>per successful transaction</span>
                        </div>
                        <ul className={styles.pricingFeatures}>
                            <li><CheckCircle2 size={16} /> Instant virtual accounts</li>
                            <li><CheckCircle2 size={16} /> Real-time notifications</li>
                            <li><CheckCircle2 size={16} /> Automatic reconciliation</li>
                            <li><CheckCircle2 size={16} /> Multiple bank options</li>
                        </ul>
                        <a href="https://app.payrant.com/auth-login.php" className={styles.pricingBtn}>Get Started</a>
                    </div>

                    <div className={`${styles.pricingCard} ${styles.popularCard}`}>
                        <div className={styles.popularBadge}>Most Popular</div>
                        <div className={styles.pricingHeader}>
                            <h3>Virtual Account Payments</h3>
                            <p className={styles.pricingDesc}>Direct payments to virtual accounts created for your customers</p>
                        </div>
                        <div className={styles.pricingPrice}>
                            <span className={styles.priceAmount}>1%</span>
                            <span className={styles.priceLabel}>per successful transaction</span>
                        </div>
                        <ul className={styles.pricingFeatures}>
                            <li><CheckCircle2 size={16} /> Dedicated virtual accounts</li>
                            <li><CheckCircle2 size={16} /> Webhook notifications</li>
                            <li><CheckCircle2 size={16} /> Customer management</li>
                            <li><CheckCircle2 size={16} /> Advanced analytics</li>
                            <li><CheckCircle2 size={16} /> API access</li>
                        </ul>
                        <a href="https://app.payrant.com/auth-login.php" className={styles.pricingBtnPrimary}>Get Started</a>
                    </div>

                    <div className={styles.pricingCard}>
                        <div className={styles.pricingHeader}>
                            <h3>Payout Transfers</h3>
                            <p className={styles.pricingDesc}>Send money to any Nigerian bank account through our payout API</p>
                        </div>
                        <div className={styles.pricingPrice}>
                            <span className={styles.priceAmount}>₦20</span>
                            <span className={styles.priceLabel}>flat fee per transfer</span>
                        </div>
                        <ul className={styles.pricingFeatures}>
                            <li><CheckCircle2 size={16} /> All Nigerian banks</li>
                            <li><CheckCircle2 size={16} /> Instant transfers</li>
                            <li><CheckCircle2 size={16} /> Bulk payout support</li>
                            <li><CheckCircle2 size={16} /> Transfer tracking</li>
                            <li><CheckCircle2 size={16} /> Free account validation</li>
                        </ul>
                        <a href="https://app.payrant.com/auth-login.php" className={styles.pricingBtn}>Get Started</a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <div className={styles.faqContainer}>
                        <div className={styles.faqHeader}>
                            <h2>Frequently Asked Questions</h2>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Are there any setup or monthly fees?</h3>
                            <p>No, Payrant is completely free to set up. We don't charge any monthly maintenance fees. You only pay a transaction fee when you successfully receive a payment.</p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>When do I get my money?</h3>
                            <p>Settlements are instant. As soon as a customer pays, the funds are available in your Payrant balance and can be transferred to your bank account immediately.</p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Is there a limit on transaction volume?</h3>
                            <p>For verified business accounts, there are no limits on transaction volume. Starter accounts may have initial tier limitations which can be fast-tracked upon request.</p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Do you support international payments?</h3>
                            <p>Yes, Payrant supports international card payments from over 150 countries. International transactions are settled in your local currency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;

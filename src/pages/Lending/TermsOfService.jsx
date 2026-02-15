import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import styles from './Legal.module.css';

const TermsOfService = () => {
    return (
        <>
            <Navbar />
            <div className={styles.legal}>
                <SEO
                    title="Terms of Service - Payrant Payment Gateway | Payrant"
                    description="Read Payrant's Terms of Service. Understand your rights and obligations when using our payment gateway services."
                    keywords="terms of service, user agreement, payrant terms, payment gateway terms, legal agreement"
                    url="https://payrant.com/terms"
                />

                <div className={styles.container}>
                    <Link to="/" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    <div className={styles.header}>
                        <div className={styles.iconWrapper}>
                            <FileText size={32} />
                        </div>
                        <h1>Terms of Service</h1>
                        <p className={styles.lastUpdated}>Last Updated: February 10, 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using Payrant's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2>2. Service Description</h2>
                            <p>
                                Payrant provides a payment gateway platform that enables businesses to accept payments from customers through various payment methods including cards, bank transfers, and virtual accounts.
                            </p>
                            <p>Our services include but are not limited to:</p>
                            <ul>
                                <li>Payment processing and collection</li>
                                <li>Virtual account generation</li>
                                <li>Payout and transfer services</li>
                                <li>Transaction monitoring and reporting</li>
                                <li>API access for integration</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. User Obligations</h2>
                            <p>As a user of Payrant services, you agree to:</p>
                            <ul>
                                <li>Provide accurate and complete information during registration</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not use the service for fraudulent or illegal activities</li>
                                <li>Not attempt to circumvent security measures</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Payment Terms</h2>
                            <p>
                                Transaction fees are charged as specified in our pricing page. Fees are subject to change with 30 days notice. Settlement of funds occurs according to the schedule agreed upon during account setup.
                            </p>
                            <p>
                                You authorize Payrant to deduct applicable fees from your transaction proceeds. Chargebacks and refunds are subject to our refund policy and may incur additional fees.
                            </p>
                        </section>

                        <section>
                            <h2>5. Prohibited Activities</h2>
                            <p>You may not use Payrant services for:</p>
                            <ul>
                                <li>Sale of illegal goods or services</li>
                                <li>Money laundering or terrorist financing</li>
                                <li>Pyramid schemes or multi-level marketing</li>
                                <li>Adult content or services</li>
                                <li>Gambling or betting services (without proper licensing)</li>
                                <li>Cryptocurrency trading (without prior approval)</li>
                            </ul>
                        </section>

                        <section>
                            <h2>6. Intellectual Property</h2>
                            <p>
                                All content, features, and functionality of Payrant services are owned by Payrant and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p>
                                You may not reproduce, distribute, modify, or create derivative works of our services without explicit written permission.
                            </p>
                        </section>

                        <section>
                            <h2>7. Limitation of Liability</h2>
                            <p>
                                Payrant shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                            </p>
                            <p>
                                Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
                            </p>
                        </section>

                        <section>
                            <h2>8. Service Availability</h2>
                            <p>
                                While we strive for 99.9% uptime, we do not guarantee uninterrupted access to our services. Scheduled maintenance will be communicated in advance when possible.
                            </p>
                        </section>

                        <section>
                            <h2>9. Account Termination</h2>
                            <p>
                                We reserve the right to suspend or terminate your account if you violate these terms or engage in fraudulent activity. You may close your account at any time by contacting support.
                            </p>
                            <p>
                                Upon termination, you remain liable for all outstanding fees and obligations incurred before termination.
                            </p>
                        </section>

                        <section>
                            <h2>10. Dispute Resolution</h2>
                            <p>
                                Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the laws of the Federal Republic of Nigeria.
                            </p>
                        </section>

                        <section>
                            <h2>11. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the service constitutes acceptance of modified terms.
                            </p>
                        </section>

                        <section>
                            <h2>12. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2>13. Contact Information</h2>
                            <p>
                                For questions about these Terms of Service, please contact us at:
                            </p>
                            <p>
                                Email: <a href="mailto:legal@payrant.com">legal@payrant.com</a><br />
                                Address: 167 VI, Lagos, Nigeria
                            </p>
                        </section>
                    </div>

                    <div className={styles.footer}>
                        <p>By using Payrant, you acknowledge that you have read and understood these Terms of Service.</p>
                        <div className={styles.footerLinks}>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;

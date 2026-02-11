import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className={styles.legal}>
                <SEO
                    title="Privacy Policy - How We Protect Your Data | Payrant"
                    description="Learn how Payrant collects, uses, and protects your personal information. Our commitment to data privacy and security."
                    keywords="privacy policy, data protection, gdpr, ndpr, personal information, data security, privacy rights"
                    url="https://payrant.com/privacy"
                />

                <div className={styles.container}>
                    <Link to="/" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    <div className={styles.header}>
                        <div className={styles.iconWrapper}>
                            <Shield size={32} />
                        </div>
                        <h1>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last Updated: February 10, 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section>
                            <h2>1. Introduction</h2>
                            <p>
                                At Payrant, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment gateway services.
                            </p>
                            <p>
                                By using Payrant, you consent to the data practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <h2>2. Information We Collect</h2>

                            <h3>2.1 Personal Information</h3>
                            <p>We collect information that you provide directly to us, including:</p>
                            <ul>
                                <li>Name, email address, and phone number</li>
                                <li>Business information (company name, address, tax ID)</li>
                                <li>Bank account details for settlements</li>
                                <li>Identity verification documents (BVN, ID cards)</li>
                            </ul>

                            <h3>2.2 Transaction Information</h3>
                            <p>When you process payments, we collect:</p>
                            <ul>
                                <li>Transaction amounts and currency</li>
                                <li>Payment method details</li>
                                <li>Customer information (as provided by you)</li>
                                <li>Transaction metadata</li>
                            </ul>

                            <h3>2.3 Technical Information</h3>
                            <p>We automatically collect certain information, including:</p>
                            <ul>
                                <li>IP addresses and device information</li>
                                <li>Browser type and version</li>
                                <li>Usage data and analytics</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. How We Use Your Information</h2>
                            <p>We use the collected information to:</p>
                            <ul>
                                <li>Process and facilitate payments</li>
                                <li>Verify your identity and prevent fraud</li>
                                <li>Provide customer support</li>
                                <li>Send transaction notifications and updates</li>
                                <li>Improve our services and develop new features</li>
                                <li>Comply with legal obligations</li>
                                <li>Send marketing communications (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Data Sharing and Disclosure</h2>

                            <h3>4.1 Service Providers</h3>
                            <p>
                                We share information with third-party service providers who perform services on our behalf, including payment processors, banks, identity verification services, and cloud hosting providers.
                            </p>

                            <h3>4.2 Legal Requirements</h3>
                            <p>
                                We may disclose your information if required by law or in response to valid requests by public authorities.
                            </p>

                            <h3>4.3 Business Transfers</h3>
                            <p>
                                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                            </p>

                            <h3>4.4 With Your Consent</h3>
                            <p>
                                We may share information with third parties when you explicitly consent to such sharing.
                            </p>
                        </section>

                        <section>
                            <h2>5. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your information:
                            </p>
                            <ul>
                                <li>256-bit SSL/TLS encryption for data in transit</li>
                                <li>AES-256 encryption for data at rest</li>
                                <li>PCI-DSS Level 1 compliance</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>Access controls and authentication mechanisms</li>
                                <li>Employee training on data protection</li>
                            </ul>
                            <p>
                                However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2>6. Data Retention</h2>
                            <p>
                                We retain your information for as long as necessary to provide our services and comply with legal obligations. Transaction data is typically retained for 7 years for accounting and regulatory purposes.
                            </p>
                            <p>
                                You may request deletion of your personal information, subject to legal and regulatory requirements.
                            </p>
                        </section>

                        <section>
                            <h2>7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li><strong>Access:</strong> Request a copy of your personal information</li>
                                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                                <li><strong>Restriction:</strong> Limit how we use your data</li>
                                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                                <li><strong>Object:</strong> Object to processing of your personal information</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                            </ul>
                            <p>
                                To exercise these rights, contact us at <a href="mailto:privacy@payrant.com">privacy@payrant.com</a>
                            </p>
                        </section>

                        <section>
                            <h2>8. Cookies and Tracking</h2>
                            <p>
                                We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content.
                            </p>
                            <p>Types of cookies we use:</p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                            </ul>
                            <p>
                                You can control cookies through your browser settings, but disabling certain cookies may affect functionality.
                            </p>
                        </section>

                        <section>
                            <h2>9. International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than Nigeria. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2>10. Children's Privacy</h2>
                            <p>
                                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        <section>
                            <h2>11. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2>12. Compliance</h2>
                            <p>
                                Payrant complies with:
                            </p>
                            <ul>
                                <li>Nigeria Data Protection Regulation (NDPR)</li>
                                <li>General Data Protection Regulation (GDPR) where applicable</li>
                                <li>PCI-DSS standards</li>
                                <li>Other applicable data protection laws</li>
                            </ul>
                        </section>

                        <section>
                            <h2>13. Contact Us</h2>
                            <p>
                                For questions or concerns about this Privacy Policy or our data practices, please contact:
                            </p>
                            <p>
                                <strong>Data Protection Officer</strong><br />
                                Email: <a href="mailto:privacy@payrant.com">privacy@payrant.com</a><br />
                                Address: 123 Herbert Macaulay Way, Yaba, Lagos, Nigeria
                            </p>
                        </section>
                    </div>

                    <div className={styles.footer}>
                        <p>Your privacy is important to us. We are committed to protecting your personal information.</p>
                        <div className={styles.footerLinks}>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;

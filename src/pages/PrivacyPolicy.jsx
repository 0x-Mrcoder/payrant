import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <Link to="/signup" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Signup
                </Link>

                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: February 2026</p>

                <div className={styles.content}>
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            At Payrant, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment processing services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, business name</li>
                            <li><strong>Financial Information:</strong> Bank account details, payment card information</li>
                            <li><strong>Transaction Data:</strong> Details about payments you send and receive</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information, usage data</li>
                            <li><strong>Communication Data:</strong> Your communications with us, including customer support</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process and complete payment transactions</li>
                            <li>Verify your identity and prevent fraud</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Improve and optimize our services</li>
                            <li>Send you important updates and notifications</li>
                            <li>Comply with legal and regulatory requirements</li>
                            <li>Analyze usage patterns and trends</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Information Sharing and Disclosure</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate our business</li>
                            <li><strong>Financial Institutions:</strong> Banks and payment networks to process transactions</li>
                            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                        <p>
                            We do not sell your personal information to third parties for marketing purposes.
                        </p>
                    </section>

                    <section>
                        <h2>5. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your information, including:
                        </p>
                        <ul>
                            <li>Encryption of sensitive data during transmission and storage</li>
                            <li>Secure servers and databases with restricted access</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Multi-factor authentication for account access</li>
                            <li>Employee training on data protection best practices</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Data Retention</h2>
                        <p>
                            We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Transaction data may be retained for up to 7 years for accounting and regulatory purposes.
                        </p>
                    </section>

                    <section>
                        <h2>7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete data</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to or restrict certain processing activities</li>
                            <li>Export your data in a portable format</li>
                            <li>Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us at privacy@payrant.com
                        </p>
                    </section>

                    <section>
                        <h2>8. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2>9. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data during international transfers.
                        </p>
                    </section>

                    <section>
                        <h2>10. Children's Privacy</h2>
                        <p>
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2>12. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className={styles.contactInfo}>
                            Email: privacy@payrant.com<br />
                            Address: Payrant Inc., [Your Business Address]<br />
                            Phone: [Your Contact Number]
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

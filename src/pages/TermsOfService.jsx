import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './Legal.module.css';

const TermsOfService = () => {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <Link to="/signup" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Signup
                </Link>

                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last Updated: February 2026</p>

                <div className={styles.content}>
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Payrant's payment processing services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2>2. Use of Service</h2>
                        <p>
                            Payrant provides payment processing and financial technology services. You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
                        </p>
                        <ul>
                            <li>You must be at least 18 years old to use our services</li>
                            <li>You must provide accurate and complete information during registration</li>
                            <li>You are responsible for maintaining the confidentiality of your account</li>
                            <li>You must not use our services for any illegal or unauthorized purpose</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Payment Processing</h2>
                        <p>
                            Payrant facilitates payment transactions between merchants and customers. We reserve the right to refuse, cancel, or suspend any transaction that we believe violates these terms or poses a risk to our platform.
                        </p>
                    </section>

                    <section>
                        <h2>4. Fees and Charges</h2>
                        <p>
                            Our fee structure is transparent and will be clearly communicated to you. Fees may include:
                        </p>
                        <ul>
                            <li>Transaction processing fees</li>
                            <li>Monthly service fees (if applicable)</li>
                            <li>Chargeback fees</li>
                            <li>Currency conversion fees</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Account Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your account at any time for violations of these terms, fraudulent activity, or any reason we deem necessary to protect our platform and users.
                        </p>
                    </section>

                    <section>
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            Payrant shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                        </p>
                    </section>

                    <section>
                        <h2>7. Intellectual Property</h2>
                        <p>
                            All content, trademarks, and data on this platform, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of Payrant and are protected by applicable laws.
                        </p>
                    </section>

                    <section>
                        <h2>8. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2>9. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Payrant operates, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2>10. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p className={styles.contactInfo}>
                            Email: legal@payrant.com<br />
                            Address: Payrant Inc., [Your Business Address]
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

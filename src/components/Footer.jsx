import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.footerColumn}>
                    <div className={styles.footerLogo}>
                        <img src="/logo/logo-light.png" alt="Payrant" className={styles.footerLogoImg} />
                    </div>
                    <p className={styles.footerTagline}>
                        Modern payment infrastructure for Africa's digital economy.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" aria-label="Twitter">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#" aria-label="GitHub">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Product</h4>
                    <ul>
                        <li><a href="/#features">Features</a></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/documentation">API Documentation</Link></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Changelog</a></li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press Kit</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Compliance</a></li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Acceptable Use</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © 2026 Payrant Financial Technology. All rights reserved.
                </p>
                <div className={styles.footerBadges}>
                    <span className={styles.badge}>PCI DSS Compliant</span>
                    <span className={styles.badge}>ISO 27001</span>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

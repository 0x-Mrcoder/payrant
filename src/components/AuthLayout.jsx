import { Link } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import { ArrowLeft, Zap } from 'lucide-react';

const AuthLayout = ({ title, subtitle, image, children }) => {
    return (
        <div className={styles.container}>
            {/* Left Side - Visual */}
            <div className={styles.visualSide}>
                <div className={styles.visualContent}>
                    <div className={styles.logoBadge}>
                        <Zap size={32} />
                    </div>
                    <h1 className={styles.visualTitle}>Secure Your Global<br /> Payments.</h1>
                    <p className={styles.visualDescription}>
                        Experience the next generation of digital finance. Premium, secure, and built for the modern enterprise.
                    </p>

                    {/* Abstract Glass Card */}
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardChip}></div>
                            <span className={styles.cardLabel}>Premium Tier</span>
                        </div>
                        <div className={styles.cardLines}>
                            <div className={styles.cardLineLong}></div>
                            <div className={styles.cardLineShort}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className={styles.formSide}>
                <div className={styles.formContainer}>
                    <Link to="/" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div className={styles.header}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>

                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

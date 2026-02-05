import styles from './HeroSection.module.css';
import { Eye, Plus, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className={styles.heroGrid}>
            {/* Main Balance - Soft Gradient Glass */}
            <div className={`${styles.card} ${styles.mainCard}`}>
                <div className={styles.cardHeader}>
                    <p className={styles.label}>Available Balance</p>
                    <button className={styles.iconBtn}>
                        <Eye size={20} />
                    </button>
                </div>

                <div className={styles.balanceWrapper}>
                    <span className={styles.currency}>₦</span>
                    <span className={styles.balance}>284,850.85</span>
                </div>

                <div className={styles.actions}>
                    <button className="btn btn-primary">
                        <Plus size={18} style={{ marginRight: '8px' }} />
                        Add Money
                    </button>
                </div>
            </div>

            {/* Settlements - Lighter Glass */}
            <div className={`${styles.card} ${styles.settlementCard}`}>
                <div className={styles.cardHeader}>
                    <p className={styles.labelDark}>Settlement Balance</p>
                    <span className={styles.badge}>Pending</span>
                </div>

                <div className={styles.balanceWrapper}>
                    <span className={styles.currencyDark}>₦</span>
                    <span className={styles.balanceDark}>0.00</span>
                </div>

                <div className={styles.actionRow}>
                    <p className={styles.helper}>Processing</p>
                    <button className={styles.circleBtn}>
                        <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

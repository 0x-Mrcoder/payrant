import styles from './HeroSection.module.css';
import { Copy } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className={styles.container}>
            {/* Savings Account Card */}
            <div className={styles.accountCard}>
                <div className={styles.accountHeader}>
                    <span className={styles.accountName}>Savings Account 01</span>
                    <span className={styles.dropdownIcon}>▼</span>
                </div>
                <div className={styles.accountNumberRow}>
                    <span className={styles.accountNumber}>2122676726</span>
                    <button className={styles.copyBtn}>
                        <Copy size={14} />
                    </button>
                </div>
            </div>

            {/* Balance Card */}
            <div className={styles.balanceCard}>
                <p className={styles.balanceLabel}>Available Balance</p>
                <h2 className={styles.balanceAmount}>₦2,840,850.85</h2>
                <button className={styles.transferBtn}>Transfer</button>
            </div>
        </div>
    );
};

export default HeroSection;

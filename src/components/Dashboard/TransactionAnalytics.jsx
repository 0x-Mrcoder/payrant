import styles from './TransactionAnalytics.module.css';
import { TrendingUp, Users, CreditCard, Activity } from 'lucide-react';

const TransactionAnalytics = () => {
    return (
        <section className={styles.analyticsGrid}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Total Volume</span>
                    <TrendingUp size={16} className={styles.iconSuccess} />
                </div>
                <h3 className={styles.value}>₦12.4M</h3>
                <p className={styles.trend}>
                    <span className={styles.trendUp}>+12%</span> vs last month
                </p>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Success Rate</span>
                    <Activity size={16} className={styles.iconPurple} />
                </div>
                <h3 className={styles.value}>99.4%</h3>
                <p className={styles.trend}>
                    <span className={styles.trendUp}>+0.2%</span> efficiency
                </p>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Active Customers</span>
                    <Users size={16} className={styles.iconBlue} />
                </div>
                <h3 className={styles.value}>1,284</h3>
                <p className={styles.trend}>
                    <span className={styles.trendNeutral}>+45</span> new this week
                </p>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Failed Txns</span>
                    <CreditCard size={16} className={styles.iconRed} />
                </div>
                <h3 className={styles.value}>0.6%</h3>
                <p className={styles.trend}>
                    <span className={styles.trendGood}>-0.1%</span> improvement
                </p>
            </div>
        </section>
    );
};

export default TransactionAnalytics;

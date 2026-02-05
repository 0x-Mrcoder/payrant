import styles from './RecentTransactions.module.css';
import { ArrowUpRight, ArrowDownLeft, Coffee, Globe, Smartphone, MonitorPlay } from 'lucide-react';

const RecentTransactions = () => {
    const transactions = [
        {
            id: 1,
            title: 'Uber Ride',
            subtitle: 'Transport',
            amount: -3500,
            date: 'Today, 9:41 AM',
            status: 'successful',
            icon: Smartphone,
        },
        {
            id: 2,
            title: 'Upwork Escrow',
            subtitle: 'Freelance Payout',
            amount: 145000,
            date: 'Yesterday, 4:30 PM',
            status: 'successful',
            icon: ArrowDownLeft,
        },
        {
            id: 3,
            title: 'Netflix Subscription',
            subtitle: 'Entertainment',
            amount: -5200,
            date: 'Oct 24, 2026',
            status: 'pending',
            icon: MonitorPlay,
        },
        {
            id: 4,
            title: 'Mainstack',
            subtitle: 'Digital Product',
            amount: 2500,
            date: 'Oct 23, 2026',
            status: 'successful',
            icon: ArrowDownLeft,
        },
        {
            id: 5,
            title: 'Starbucks Coffee',
            subtitle: 'Food & Drink',
            amount: -8500,
            date: 'Oct 21, 2026',
            status: 'failed',
            icon: Coffee,
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Recent Transactions</h3>
                <button className={styles.viewAllBtn}>View All</button>
            </div>

            <div className={styles.list}>
                {transactions.map((tx) => (
                    <div key={tx.id} className={styles.item}>
                        <div className={styles.left}>
                            <div className={styles.iconBox} style={{
                                color: tx.amount > 0 ? '#059669' : '#4B5563',
                                background: tx.amount > 0 ? '#D1FAE5' : '#F3F4F6'
                            }}>
                                {tx.amount > 0 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                            </div>
                            <div className={styles.details}>
                                <p className={styles.txTitle}>{tx.title}</p>
                                <p className={styles.txSubtitle}>{tx.subtitle}</p>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={styles.amountInfo}>
                                <p className={styles.amount} style={{ color: tx.amount > 0 ? '#059669' : '#111827' }}>
                                    {tx.amount > 0 ? '+' : ''}₦{Math.abs(tx.amount).toLocaleString()}
                                </p>
                                <p className={styles.date}>{tx.date}</p>
                            </div>
                            <span className={`${styles.status} ${styles[tx.status]}`}>
                                {tx.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentTransactions;

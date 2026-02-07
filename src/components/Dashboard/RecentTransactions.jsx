import styles from './RecentTransactions.module.css';
import { ArrowDown, ArrowUp } from 'lucide-react';

const RecentTransactions = () => {
    const transactions = [
        {
            id: 1,
            title: 'Recieved from ***343456',
            date: '13 December, 2026 9:15am',
            amount: 5000,
            type: 'credit'
        },
        {
            id: 2,
            title: 'Transfer to ***564771',
            date: '18 December, 2026 9:12pm',
            amount: -5000,
            type: 'debit'
        },
        {
            id: 3,
            title: 'Recieved from ***39984',
            date: '13 December, 2026 2:30pm',
            amount: 5000,
            type: 'credit'
        },
        {
            id: 4,
            title: 'Transfer to ***99281',
            date: '12 December, 2026 11:45am',
            amount: -12500,
            type: 'debit'
        }
    ];

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Recent Transactions</h3>
            <div className={styles.list}>
                {transactions.map((tx) => (
                    <div key={tx.id} className={styles.item}>
                        <div className={styles.left}>
                            <div className={`${styles.iconBox} ${tx.type === 'credit' ? styles.creditIcon : styles.debitIcon}`}>
                                {tx.type === 'credit' ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
                            </div>
                            <div className={styles.details}>
                                <p className={styles.txTitle}>{tx.title}</p>
                                <p className={styles.txDate}>{tx.date}</p>
                            </div>
                        </div>
                        <p className={styles.amount}>
                            {tx.amount > 0 ? '+' : ''}N{Math.abs(tx.amount).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentTransactions;

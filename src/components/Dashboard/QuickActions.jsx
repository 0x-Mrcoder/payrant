import styles from './QuickActions.module.css';
import { Banknote, FileText, Smartphone, RefreshCw } from 'lucide-react';

const QuickActions = () => {
    const actions = [
        { icon: Banknote, label: 'Run Payroll', desc: 'Pay your team' },
        { icon: RefreshCw, label: 'Pay Bills', desc: 'Airtime & Utilities' },
        { icon: FileText, label: 'Invoices', desc: 'Create new invoice' },
        { icon: Smartphone, label: 'Terminals', desc: 'Manage POS' },
    ];

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>All Actions</h3>
            <div className={styles.grid}>
                {actions.map((action, index) => (
                    <button key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <action.icon size={20} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>{action.label}</span>
                            <span className={styles.desc}>{action.desc}</span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default QuickActions;

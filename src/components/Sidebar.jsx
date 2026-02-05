import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import {
    LayoutDashboard,
    Receipt,
    Wallet,
    Link as LinkIcon,
    RefreshCw,
    Server,
    Shield,
    FileText,
    LogOut,
    ChevronRight
} from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    // Grouped Menu Logic
    const menuGroups = [
        {
            title: 'Overview',
            items: [
                { name: 'Dashboard', icon: LayoutDashboard, path: '/' }
            ]
        },
        {
            title: 'Finance',
            items: [
                { name: 'Transactions', icon: Receipt, path: '/transactions' },
                { name: 'Settlements', icon: Wallet, path: '/settlements' },
                { name: 'Transfers', icon: RefreshCw, path: '/transfers' },
                { name: 'Payment Links', icon: LinkIcon, path: '/payment-links' },
            ]
        },
        {
            title: 'Developer',
            items: [
                { name: 'API Settings', icon: Server, path: '/api' },
                { name: 'Documentation', icon: FileText, path: '/docs' },
            ]
        },
        {
            title: 'Settings',
            items: [
                { name: 'Security', icon: Shield, path: '/security' }
            ]
        }
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.logoText}>payrant<span className={styles.dot}>.</span></h2>
                </div>

                <nav className={styles.nav}>
                    {menuGroups.map((group, index) => (
                        <div key={index} className={styles.group}>
                            <h4 className={styles.groupTitle}>{group.title}</h4>
                            <ul className={styles.groupList}>
                                {group.items.map((item) => (
                                    <li key={item.path} className={styles.itemWrapper}>
                                        <Link
                                            to={item.path}
                                            className={`${styles.link} ${location.pathname === item.path ? styles.activeLink : ''}`}
                                        >
                                            <div className={styles.iconBox}>
                                                <item.icon size={16} strokeWidth={2} />
                                            </div>
                                            <span className={styles.name}>{item.name}</span>
                                            {location.pathname === item.path && <ChevronRight size={14} className={styles.activeChevron} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className={styles.footer}>
                    <button className={styles.logoutBtn}>
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>
                    <div className={styles.miniProfile}>
                        <div className={styles.avatar}>JD</div>
                        <div className={styles.meta}>
                            <span className={styles.metaName}>John Doe</span>
                            <span className={styles.metaRole}>Merchant</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

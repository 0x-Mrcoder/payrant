import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import {
    LayoutGrid,
    ArrowRightLeft,
    HandCoins,
    Landmark,
    Link2,
    UsersRound,
    Settings2,
    LogOut,
    Wallet,
    Rocket,
    RefreshCcw,
    ShieldAlert,
    Code,
    ChevronDown
} from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();
    const [expandedItems, setExpandedItems] = useState({
        transactions: true,
        transfers: true,
        commerce: false,
        developers: false
    });

    const toggleItem = (key) => {
        setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const navItems = [
        { name: 'Get Started', icon: Rocket, path: '/get-started' },
        { name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
        {
            name: 'Transactions',
            icon: ArrowRightLeft,
            key: 'transactions',
            subItems: [
                { name: 'All Transactions', path: '/transactions' },
                { name: 'Refunds', path: '/refunds' },
                { name: 'Disputes', path: '/disputes' },
            ]
        },
        {
            name: 'Transfers',
            icon: Wallet,
            key: 'transfers',
            subItems: [
                { name: 'Balances', path: '/balances' },
                { name: 'Settlements', path: '/settlements' },
                { name: 'Virtual Accounts', path: '/virtual-accounts' },
            ]
        },
        {
            name: 'Commerce',
            icon: Link2,
            key: 'commerce',
            subItems: [
                { name: 'Payment Links', path: '/payment-links' },
            ]
        },
        {
            name: 'Developers',
            icon: Code,
            key: 'developers',
            subItems: [
                { name: 'API & Webhooks', path: '/developers' },
            ]
        }
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoIcon}>
                        <Wallet size={24} strokeWidth={2} />
                    </div>
                    <div className={styles.logoTextContainer}>
                        <h1 className={styles.logoTitle}>Payrant</h1>
                        <p className={styles.logoSubtitle}>Business Central</p>
                    </div>
                </div>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.subItems ? (
                            <div className={styles.menuGroup}>
                                <div
                                    className={`${styles.navItem} ${styles.parentItem}`}
                                    onClick={() => toggleItem(item.key)}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <item.icon size={18} className={styles.icon} />
                                        <span className={styles.navText}>{item.name}</span>
                                    </div>
                                    <ChevronDown
                                        size={14}
                                        className={`${styles.groupChevron} ${expandedItems[item.key] ? styles.chevronOpen : ''}`}
                                    />
                                </div>

                                <div className={`${styles.groupContent} ${!expandedItems[item.key] ? styles.collapsed : ''}`}>
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            className={`${styles.navItem} ${styles.subItem} ${location.pathname === subItem.path ? styles.active : ''}`}
                                        >
                                            <span className={styles.navText}>{subItem.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={item.path}
                                className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
                            >
                                <item.icon size={18} className={location.pathname === item.path ? styles.iconActive : styles.icon} />
                                <span className={styles.navText}>{item.name}</span>
                            </Link>
                        )}
                    </div>
                ))}

                <div className={styles.sectionDivider}>
                    <p className={styles.sectionTitle}>System</p>
                    <Link to="/settings" className={styles.navItem}>
                        <Settings2 size={18} className={styles.icon} />
                        <span className={styles.navText}>Settings</span>
                    </Link>
                </div>
            </nav>

            <div className={styles.footer}>
                <button className={styles.logoutBtn}>
                    <LogOut size={20} className={styles.logoutIcon} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

import { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    User,
    Settings,
    LogOut
} from 'lucide-react';
import styles from './DashboardHeader.module.css';

const DashboardHeader = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.pageTitle}>
                    {/* Dynamic Title if needed, simpler to keep generic or use route name */}
                    <h2>Payrant</h2>
                </div>
                <div className={styles.searchContainer}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search transactions, customers, payments..."
                    />
                </div>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.iconBtn}>
                    <Bell size={20} />
                    <span className={styles.notificationBadge}></span>
                </button>

                <div className={styles.profileContainer} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                    <div className={styles.avatar}></div>
                    <ChevronDown size={16} style={{ color: '#64748b' }} />

                    {isProfileOpen && (
                        <div className={styles.profileDropdown}>
                            <div className={styles.dropdownHeader}>
                                <p className={styles.dropdownName}>Usman</p>
                                <p className={styles.dropdownEmail}>usman@payrant.com</p>
                            </div>
                            <div className={styles.dropdownDivider}></div>
                            <a href="#" className={styles.dropdownItem}>
                                <User size={16} />
                                <span>My Profile</span>
                            </a>
                            <a href="#" className={styles.dropdownItem}>
                                <Settings size={16} />
                                <span>Settings</span>
                            </a>
                            <div className={styles.dropdownDivider}></div>
                            <button className={`${styles.dropdownItem} ${styles.logoutBtn}`}>
                                <LogOut size={16} />
                                <span>Log Out</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

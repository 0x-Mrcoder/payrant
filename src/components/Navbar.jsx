import { Link, useLocation } from 'react-router-dom';
import { Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onProductChange }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [productType, setProductType] = useState('business');
    const location = useLocation();

    const handleProductChange = (type) => {
        setProductType(type);
        if (onProductChange) {
            onProductChange(type);
        }
        setShowDropdown(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="/logo/logo.png" alt="Payrant" className={styles.logoImg} />
                    </Link>
                </div>
                <div className={styles.navLinks}>
                    <div className={styles.dropdownWrapper}>
                        <button
                            className={styles.dropdownTrigger}
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Product <span className={`${styles.dropdownArrow} ${showDropdown ? styles.arrowRotated : ''}`}>▾</span>
                        </button>
                        {showDropdown && (
                            <div className={styles.dropdownMenu}>
                                <button
                                    className={`${styles.dropdownItem} ${productType === 'personal' ? styles.active : ''}`}
                                    onClick={() => handleProductChange('personal')}
                                >
                                    <Users size={18} />
                                    <div>
                                        <div className={styles.dropdownTitle}>Personal</div>
                                        <div className={styles.dropdownDesc}>For individuals</div>
                                    </div>
                                </button>
                                <button
                                    className={`${styles.dropdownItem} ${productType === 'business' ? styles.active : ''}`}
                                    onClick={() => handleProductChange('business')}
                                >
                                    <Briefcase size={18} />
                                    <div>
                                        <div className={styles.dropdownTitle}>Business</div>
                                        <div className={styles.dropdownDesc}>For merchants & enterprises</div>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/developers"
                        className={location.pathname === '/developers' ? styles.activeNavLink : ''}
                    >
                        Developers
                    </Link>
                    <Link
                        to="/commerce"
                        className={location.pathname === '/commerce' ? styles.activeNavLink : ''}
                    >
                        Commerce
                    </Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/about">About Us</Link>
                </div>
                <div className={styles.navActions}>
                    <Link to="/login" className={styles.loginBtn}>Login</Link>
                    <Link to="/signup" className={styles.ctaBtn}>Create Account</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import { Link, useLocation } from 'react-router-dom';
import { Users, Briefcase, ChevronDown, BookOpen, FileText, HelpCircle, ShoppingBag, CreditCard, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onProductChange, isDocs }) => {
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.navContainer} ${isDocs ? styles.docsNav : ''}`}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="/logo/logo.png" alt="Payrant" className={styles.logoImg} />
                    </Link>
                </div>
                <div className={styles.navLinks}>
                    {isDocs ? (
                        <div className={styles.docsSearch}>
                            <Search size={18} />
                            <input type="text" placeholder="Search documentation..." />
                        </div>
                    ) : (
                        <>
                            {/* Product Dropdown */}
                            <div className={styles.dropdownWrapper}>
                                <button
                                    className={styles.dropdownTrigger}
                                    onClick={() => setShowProductDropdown(!showProductDropdown)}
                                    onBlur={() => setTimeout(() => setShowProductDropdown(false), 200)}
                                >
                                    Products <ChevronDown size={16} className={`${styles.dropdownArrow} ${showProductDropdown ? styles.arrowRotated : ''}`} />
                                </button>
                                {showProductDropdown && (
                                    <div className={styles.dropdownMenu}>
                                        <div className={styles.dropdownItem} onClick={() => onProductChange && onProductChange('personal')}>
                                            <div className={styles.iconBox}><Users size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>Personal</div>
                                                <div className={styles.dropdownDesc}>For individuals</div>
                                            </div>
                                        </div>
                                        <div className={styles.dropdownItem} onClick={() => onProductChange && onProductChange('business')}>
                                            <div className={styles.iconBox}><Briefcase size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>Business</div>
                                                <div className={styles.dropdownDesc}>For merchants & enterprises</div>
                                            </div>
                                        </div>
                                        <Link to="/pos" className={styles.dropdownItem}>
                                            <div className={styles.iconBox}><CreditCard size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>POS Terminals</div>
                                                <div className={styles.dropdownDesc}>In-person payments</div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/pricing" className={styles.navLink}>Pricing</Link>

                            <Link to="/developers" className={styles.navLink}>Developers</Link>

                            <Link to="/about" className={styles.navLink}>About Us</Link>

                            {/* Resources Dropdown */}
                            <div className={styles.dropdownWrapper}>
                                <button
                                    className={styles.dropdownTrigger}
                                    onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
                                    onBlur={() => setTimeout(() => setShowResourcesDropdown(false), 200)}
                                >
                                    Resources <ChevronDown size={16} className={`${styles.dropdownArrow} ${showResourcesDropdown ? styles.arrowRotated : ''}`} />
                                </button>
                                {showResourcesDropdown && (
                                    <div className={styles.dropdownMenu}>
                                        <Link to="/blog" className={styles.dropdownItem}>
                                            <div className={styles.iconBox}><BookOpen size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>Blog</div>
                                                <div className={styles.dropdownDesc}>Latest updates & guides</div>
                                            </div>
                                        </Link>
                                        <Link to="/documentation" className={styles.dropdownItem}>
                                            <div className={styles.iconBox}><FileText size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>API Docs</div>
                                                <div className={styles.dropdownDesc}>Integration guides</div>
                                            </div>
                                        </Link>
                                        <Link to="/support" className={styles.dropdownItem}>
                                            <div className={styles.iconBox}><HelpCircle size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>Support</div>
                                                <div className={styles.dropdownDesc}>Get help 24/7</div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className={styles.navActions}>
                    <Link to="/login" className={styles.loginBtn}>Login</Link>
                    <Link to="/signup" className={styles.ctaBtn}>Create Free Account</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <div className={styles.mobileNavLinks}>
                        <div className={styles.mobileLinkGroup}>
                            <div className={styles.mobileGroupTitle}>Products</div>
                            <Link to="/personal" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Personal</Link>
                            <Link to="/business" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Business</Link>
                            <Link to="/pos" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>POS Terminals</Link>
                        </div>

                        <Link to="/pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                        <Link to="/developers" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Developers</Link>
                        <Link to="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>

                        <div className={styles.mobileLinkGroup}>
                            <div className={styles.mobileGroupTitle}>Resources</div>
                            <Link to="/blog" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                            <Link to="/documentation" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>API Docs</Link>
                            <Link to="/support" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Support</Link>
                        </div>

                        <div className={styles.mobileNavActions}>
                            <Link to="/login" className={styles.mobileLoginBtn} onClick={() => setMobileMenuOpen(false)}>Login</Link>
                            <Link to="/signup" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>Create Free Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

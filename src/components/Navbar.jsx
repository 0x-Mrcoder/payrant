import { Link, useLocation } from 'react-router-dom';
import { Users, Briefcase, ChevronDown, BookOpen, FileText, HelpCircle, ShoppingBag, CreditCard, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onProductChange, isDocs }) => {
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
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
                                        <div className={styles.dropdownItem} onClick={() => {
                                            if (location.pathname !== '/') {
                                                window.location.href = '/?product=personal';
                                            } else {
                                                onProductChange && onProductChange('personal');
                                            }
                                        }}>
                                            <div className={styles.iconBox}><Users size={20} color="#755AE2" /></div>
                                            <div>
                                                <div className={styles.dropdownTitle}>Personal</div>
                                                <div className={styles.dropdownDesc}>For individuals</div>
                                            </div>
                                        </div>
                                        <div className={styles.dropdownItem} onClick={() => {
                                            if (location.pathname !== '/') {
                                                window.location.href = '/?product=business';
                                            } else {
                                                onProductChange && onProductChange('business');
                                            }
                                        }}>
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
                    <a href="https://app.payrant.com/auth-login.php" className={styles.loginBtn}>Login</a>
                    <a href="https://app.payrant.com/auth-register.php" className={styles.ctaBtn}>Create Free Account</a>
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
                    <div className={styles.mobileMenuHeader}>
                        <div className={styles.logo}>
                            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                                <img src="/logo/logo.png" alt="Payrant" className={styles.logoImg} />
                            </Link>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    <div className={styles.mobileNavLinks}>
                        <div className={styles.mobileLinkGroup}>
                            {/* Products Collapsible */}
                            <div className={styles.mobileCollapsible}>
                                <button
                                    className={`${styles.mobileNavLink} ${mobileProductsOpen ? styles.mobileLinkActive : ''}`}
                                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                >
                                    <span>Products</span>
                                    <ChevronDown size={20} className={mobileProductsOpen ? styles.mobileArrowRotated : ''} />
                                </button>
                                <div className={`${styles.mobileSubMenu} ${mobileProductsOpen ? styles.mobileSubMenuOpen : ''}`}>
                                    <div className={styles.mobileSubItem} onClick={() => {
                                        if (location.pathname !== '/') {
                                            window.location.href = '/?product=personal';
                                        } else {
                                            onProductChange && onProductChange('personal');
                                            setMobileMenuOpen(false);
                                        }
                                    }}>
                                        <Users size={18} color="#755AE2" />
                                        <span>Personal</span>
                                    </div>
                                    <div className={styles.mobileSubItem} onClick={() => {
                                        if (location.pathname !== '/') {
                                            window.location.href = '/?product=business';
                                        } else {
                                            onProductChange && onProductChange('business');
                                            setMobileMenuOpen(false);
                                        }
                                    }}>
                                        <Briefcase size={18} color="#755AE2" />
                                        <span>Business</span>
                                    </div>
                                    <Link to="/pos" className={styles.mobileSubItem} onClick={() => setMobileMenuOpen(false)}>
                                        <CreditCard size={18} color="#755AE2" />
                                        <span>POS Terminals</span>
                                    </Link>
                                </div>
                            </div>

                            <Link to="/pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                                <span>Pricing</span>
                            </Link>

                            <Link to="/developers" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                                <span>Developers</span>
                            </Link>

                            <Link to="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                                <span>About Us</span>
                            </Link>

                            {/* Resources Collapsible */}
                            <div className={styles.mobileCollapsible}>
                                <button
                                    className={`${styles.mobileNavLink} ${mobileResourcesOpen ? styles.mobileLinkActive : ''}`}
                                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                >
                                    <span>Resources</span>
                                    <ChevronDown size={20} className={mobileResourcesOpen ? styles.mobileArrowRotated : ''} />
                                </button>
                                <div className={`${styles.mobileSubMenu} ${mobileResourcesOpen ? styles.mobileSubMenuOpen : ''}`}>
                                    <Link to="/blog" className={styles.mobileSubItem} onClick={() => setMobileMenuOpen(false)}>
                                        <BookOpen size={18} color="#755AE2" />
                                        <span>Blog</span>
                                    </Link>
                                    <Link to="/documentation" className={styles.mobileSubItem} onClick={() => setMobileMenuOpen(false)}>
                                        <FileText size={18} color="#755AE2" />
                                        <span>API Documentation</span>
                                    </Link>
                                    <Link to="/support" className={styles.mobileSubItem} onClick={() => setMobileMenuOpen(false)}>
                                        <HelpCircle size={18} color="#755AE2" />
                                        <span>Support</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mobileMenuFooter}>
                            <a href="https://app.payrant.com/auth-login.php" className={styles.mobileLoginBtn} onClick={() => setMobileMenuOpen(false)}>Login</a>
                            <a href="https://app.payrant.com/auth-register.php" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>Create Free Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

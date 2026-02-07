import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PlusCircle,
    Link as LinkIcon,
    Search,
    Filter,
    Download,
    Eye,
    TrendingUp,
    DollarSign,
    CheckCircle,
    Copy,
    MoreHorizontal,
    X,
    ArrowDownLeft, // For mock transactions
    ArrowUpRight,
    CreditCard
} from 'lucide-react';
import styles from './PaymentLinks.module.css';

const PaymentLinks = () => {
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCreateNew = () => {
        navigate('/payment-links/create');
    };

    const handleViewDetails = (link) => {
        setSelectedLink(link);
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedLink(null), 300);
    };

    // Updated Mock Data with more fields for the drawer
    const linksData = [
        {
            id: 1,
            name: 'Summer Sale Bundle',
            url: 'payrant.com/pay/summer-sale',
            fullUrl: 'https://payrant.com/pay/summer-sale-2024-bundle-offer',
            amount: '₦ 50,000.00',
            currency: 'NGN',
            active: true,
            views: 1240,
            revenue: '₦ 4,200,000.00',
            date: 'Added 2 days ago',
            description: 'Special bundle offer for summer 2024 collection.',
            type: 'Fixed Amount'
        },
        {
            id: 2,
            name: 'Web Design Course',
            url: 'payrant.com/pay/design-course',
            fullUrl: 'https://payrant.com/pay/web-design-masterclass',
            amount: '₦ 15,000.00',
            currency: 'NGN',
            active: true,
            views: 856,
            revenue: '₦ 1,850,000.00',
            date: 'Added 5 days ago',
            description: 'Complete masterclass on modern web design principles.',
            type: 'Fixed Amount'
        },
        {
            id: 3,
            name: 'Charity Donation',
            url: 'payrant.com/pay/donate',
            fullUrl: 'https://payrant.com/pay/annual-charity-drive',
            amount: 'Flexible',
            currency: 'NGN',
            active: true,
            views: 342,
            revenue: '₦ 890,500.00',
            date: 'Added 1 week ago',
            description: 'Annual charity drive for community support.',
            type: 'Flexible Amount'
        },
        {
            id: 4,
            name: 'Consultation Fee',
            url: 'payrant.com/pay/consult',
            fullUrl: 'https://payrant.com/pay/expert-consultation',
            amount: '$ 100.00',
            currency: 'USD',
            active: false,
            views: 56,
            revenue: '$ 300.00',
            date: 'Added 2 weeks ago',
            description: 'One hour expert consultation session.',
            type: 'Fixed Amount'
        },
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h2>Payment Links</h2>
                    <p>Create and manage payment links to accept payments instantly.</p>
                </div>
                <button className={styles.createBtn} onClick={handleCreateNew}>
                    <PlusCircle size={20} />
                    Create New Link
                </button>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                {/* Total Links */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <LinkIcon size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <LinkIcon size={20} />
                        </div>
                        <span className={styles.cardLabel}>Total Links</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>24</span>
                        <div className={styles.trendBadge}>
                            <TrendingUp size={14} style={{ marginRight: '4px' }} />
                            +4 this week
                        </div>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <DollarSign size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <DollarSign size={20} />
                        </div>
                        <span className={styles.cardLabel}>Total Revenue</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>₦ 12.4M</span>
                        <div className={styles.trendBadge}>
                            <TrendingUp size={14} style={{ marginRight: '4px' }} />
                            +12%
                        </div>
                    </div>
                </div>

                {/* Active Links */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <CheckCircle size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <Eye size={20} />
                        </div>
                        <span className={styles.cardLabel}>Total Views</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>8,450</span>
                    </div>
                </div>
            </div>

            {/* Main Table Section */}
            <div className={styles.tableSection}>
                {/* Toolbar */}
                <div className={styles.toolbar}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search links..."
                        />
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.actionBtn}>
                            <Filter size={18} />
                            Filter
                        </button>
                        <button className={styles.actionBtn}>
                            <Download size={18} />
                            Export
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                                <th className={styles.th}>Link Name</th>
                                <th className={styles.th}>Link URL</th>
                                <th className={styles.th}>Amount</th>
                                <th className={styles.th}>Revenue</th>
                                <th className={styles.th}>Date Created</th>
                                <th className={styles.th} style={{ textAlign: 'right' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {linksData.map((link) => (
                                <tr
                                    key={link.id}
                                    className={styles.tr}
                                    onClick={() => handleViewDetails(link)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.td}>
                                        <div className={styles.linkCell}>
                                            <div className={styles.linkIcon}>
                                                <DollarSign size={16} />
                                            </div>
                                            <span className={styles.linkName}>{link.name}</span>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.numberBadge} style={{ width: 'fit-content' }}>
                                            <span className={styles.monoNumber} style={{ fontSize: '0.8rem' }}>{link.url}</span>
                                            <button
                                                className={styles.copyBtn}
                                                title="Copy Link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Copy size={14} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.amount}>{link.amount}</span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.amount} style={{ color: '#10b981' }}>{link.revenue}</span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.date}>{link.date}</span>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.statusCell}>
                                            <label className={styles.toggleLabel} onClick={(e) => e.stopPropagation()}>
                                                <div className={styles.switch}>
                                                    <input type="checkbox" defaultChecked={link.active} />
                                                    <span className={styles.slider}></span>
                                                </div>
                                                <span className={`${styles.statusText} ${link.active ? styles.textActive : styles.textInactive}`}>
                                                    {link.active ? 'Active' : 'Inactive'}
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <p className={styles.pageInfo}>Showing <span style={{ fontWeight: 600, color: '#334155' }}>1</span> to <span style={{ fontWeight: 600, color: '#334155' }}>4</span> of <span style={{ fontWeight: 600, color: '#334155' }}>24</span> results</p>
                    <div className={styles.pageNav}>
                        <button className={styles.pageBtn}>Previous</button>
                        <button className={styles.pageBtn}>Next</button>
                    </div>
                </div>
            </div>

            {/* Details Drawer */}
            <div
                className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ''}`}
                onClick={handleCloseDrawer}
            ></div>

            <div className={`${styles.drawerPanel} ${isDrawerOpen ? styles.open : ''}`}>
                {selectedLink && (
                    <>
                        <div className={styles.drawerHeader}>
                            <div className={styles.drawerTitle}>
                                <h3>{selectedLink.name}</h3>
                                <p>{selectedLink.type}</p>
                            </div>
                            <button className={styles.closeBtn} onClick={handleCloseDrawer}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className={styles.drawerContent}>
                            {/* Balance Card (Revenue) */}
                            <div className={styles.balanceCard}>
                                <div className={styles.balanceLabel}>Total Revenue Generated</div>
                                <div className={styles.balanceAmount}>{selectedLink.revenue}</div>
                                <div className={styles.balanceActions}>
                                    <button className={styles.balanceBtn}>View Analytics</button>
                                    <button className={styles.balanceBtn}>Payouts</button>
                                </div>
                            </div>

                            {/* Link Details Grid */}
                            <div>
                                <h4 className={styles.sectionTitle}>Link Details</h4>
                                <div className={styles.detailGrid}>
                                    <div className={styles.detailItem}>
                                        <label>Full Link URL</label>
                                        <p style={{ fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '0.85rem' }}>
                                            {selectedLink.fullUrl}
                                            <button className={styles.copyBtn} style={{ display: 'inline-block', marginLeft: '8px' }}>
                                                <Copy size={12} />
                                            </button>
                                        </p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Status</label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span className={`${styles.statusText} ${selectedLink.active ? styles.textActive : styles.textInactive}`} style={{ margin: 0, width: 'auto' }}>
                                                {selectedLink.active ? 'Active' : 'Inactive'}
                                            </span>
                                            <div className={styles.switch} style={{ transform: 'scale(0.8)' }}>
                                                <input type="checkbox" defaultChecked={selectedLink.active} />
                                                <span className={styles.slider}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Amount Type</label>
                                        <p>{selectedLink.type}</p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Total Views</label>
                                        <p>{selectedLink.views}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className={styles.sectionTitle}>Description</h4>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
                                    {selectedLink.description}
                                </p>
                            </div>

                            {/* Recent Transactions Mock */}
                            <div>
                                <h4 className={styles.sectionTitle}>Recent Payments</h4>
                                <div className={styles.transactionList}>
                                    <div className={styles.transactionItem}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className={styles.txIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>
                                                <ArrowDownLeft size={18} />
                                            </div>
                                            <div className={styles.txDetails}>
                                                <p>Payment Received</p>
                                                <span>From: John Doe - 10:23 AM</span>
                                            </div>
                                        </div>
                                        <span className={`${styles.txAmount} ${styles.credit}`}>+{selectedLink.amount !== 'Flexible' ? selectedLink.amount : '₦ 5,000.00'}</span>
                                    </div>
                                    <div className={styles.transactionItem}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className={styles.txIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>
                                                <ArrowDownLeft size={18} />
                                            </div>
                                            <div className={styles.txDetails}>
                                                <p>Payment Received</p>
                                                <span>From: Sarah Smith - Yesterday</span>
                                            </div>
                                        </div>
                                        <span className={`${styles.txAmount} ${styles.credit}`}>+{selectedLink.amount !== 'Flexible' ? selectedLink.amount : '₦ 2,500.00'}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentLinks;

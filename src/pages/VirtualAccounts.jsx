import { useState } from 'react';
import {
    PlusCircle,
    Wallet,
    Banknote,
    CheckCircle,
    Search,
    Filter,
    Download,
    Store,
    Copy,
    Truck,
    PiggyBank,
    ShoppingCart,
    TrendingUp,
    Verified,
    X,
    ArrowUpRight,
    ArrowDownLeft,
    CreditCard
} from 'lucide-react';
import styles from './VirtualAccounts.module.css';

const VirtualAccounts = () => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const tableData = [
        {
            id: 'toggle1',
            icon: Store,
            iconClass: styles.iconStore,
            name: 'Checkout-Main',
            date: 'Added 2 days ago',
            accountNumber: '0023456789',
            bankName: 'Providus',
            bankColor: 'bg-yellow-400/20',
            bankDot: 'bg-yellow-500',
            customer: 'Payrant Corp',
            active: true,
            balance: '₦ 2,450,000.00',
            dailyLimit: '₦ 5,000,000',
            email: 'checkout@payrant.com'
        },
        {
            id: 'toggle2',
            icon: Truck,
            iconClass: styles.iconTruck,
            name: 'Vendor-Wallet-01',
            date: 'Added 5 days ago',
            accountNumber: '9988776655',
            bankName: 'Wema',
            bankColor: 'bg-purple-400/20',
            bankDot: 'bg-purple-500',
            customer: 'Logistics LTD',
            active: false,
            balance: '₦ 125,500.00',
            dailyLimit: '₦ 1,000,000',
            email: 'vendor1@logistics.com'
        },
        {
            id: 'toggle3',
            icon: PiggyBank,
            iconClass: styles.iconSavings,
            name: 'Savings-Pot-A',
            date: 'Added 1 week ago',
            accountNumber: '1234567890',
            bankName: 'Zenith',
            bankColor: 'bg-red-400/20',
            bankDot: 'bg-red-500',
            customer: 'Personal Savings',
            active: true,
            balance: '₦ 850,000.00',
            dailyLimit: 'Unlimited',
            email: 'savings@payrant.com'
        },
        {
            id: 'toggle4',
            icon: ShoppingCart,
            iconClass: styles.iconCart,
            name: 'E-commerce-NG',
            date: 'Added 2 weeks ago',
            accountNumber: '5544332211',
            bankName: 'GTBank',
            bankColor: 'bg-blue-400/20',
            bankDot: 'bg-blue-500',
            customer: 'Shopify Store',
            active: true,
            balance: '₦ 41,774,500.00',
            dailyLimit: '₦ 50,000,000',
            email: 'shop@store.ng'
        },
    ];

    const handleViewDetails = (account) => {
        setSelectedAccount(account);
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedAccount(null), 300); // Wait for animation
    };

    const handleCreateOpen = () => {
        setIsCreateModalOpen(true);
    };

    const handleCreateClose = () => {
        setIsCreateModalOpen(false);
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        // Mock success for now
        const form = e.target;
        // Ideally validate and add logic here
        // For now, just close
        setIsCreateModalOpen(false);
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h2>Virtual Accounts</h2>
                    <p>Manage and monitor your virtual account infrastructure.</p>
                </div>
                <button className={styles.createBtn} onClick={handleCreateOpen}>
                    <PlusCircle size={20} />
                    Create New Account
                </button>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                {/* Card 1: Total Accounts */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <Wallet size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <Wallet size={20} />
                        </div>
                        <span className={styles.cardLabel}>Total Accounts</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>142</span>
                        <div className={styles.trendBadge}>
                            <TrendingUp size={14} style={{ marginRight: '4px' }} />
                            +12%
                        </div>
                    </div>
                </div>

                {/* Card 2: Total Inflow */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <Banknote size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <Banknote size={20} />
                        </div>
                        <span className={styles.cardLabel}>Total Inflow (₦)</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>45,200,000.00</span>
                    </div>
                </div>

                {/* Card 3: Active Accounts */}
                <div className={styles.glassCard}>
                    <div className={styles.bgIcon}>
                        <CheckCircle size={60} />
                    </div>
                    <div className={styles.cardTop}>
                        <div className={styles.iconBox}>
                            <Verified size={20} />
                        </div>
                        <span className={styles.cardLabel}>Active Accounts</span>
                    </div>
                    <div className={styles.cardValueContainer}>
                        <span className={styles.cardValue}>128</span>
                        <span className={styles.totalLabel}>/ 142 total</span>
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
                            placeholder="Search by account name, number, or customer..."
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
                                <th className={styles.th}>Account Name</th>
                                <th className={styles.th}>Account Number</th>
                                <th className={styles.th}>Bank Name</th>
                                <th className={styles.th}>Customer</th>
                                <th className={styles.th} style={{ textAlign: 'right' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={styles.tr}
                                    onClick={() => handleViewDetails(row)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className={styles.td}>
                                        <div className={styles.accountCell}>
                                            <div className={`${styles.accountIcon} ${row.iconClass}`}>
                                                <row.icon size={18} />
                                            </div>
                                            <div>
                                                <p className={styles.accountName}>{row.name}</p>
                                                <p className={styles.accountDate}>{row.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.numberBadge}>
                                            <span className={styles.monoNumber}>{row.accountNumber}</span>
                                            <button
                                                className={styles.copyBtn}
                                                title="Copy Number"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Copy size={14} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.bankCell}>
                                            <div className={`${styles.bankLogo} ${row.bankColor.replace('bg-', '').replace('/20', '')}`} style={{ backgroundColor: row.bankColor.includes('yellow') ? 'rgba(250, 204, 21, 0.2)' : row.bankColor.includes('purple') ? 'rgba(192, 132, 252, 0.2)' : row.bankColor.includes('red') ? 'rgba(248, 113, 113, 0.2)' : 'rgba(96, 165, 250, 0.2)' }}>
                                                <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: row.bankDot.includes('yellow') ? '#eab308' : row.bankDot.includes('purple') ? '#a855f7' : row.bankDot.includes('red') ? '#ef4444' : '#3b82f6' }}></div>
                                            </div>
                                            <span className={styles.bankName}>{row.bankName}</span>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.customerCell}>
                                            <div className={styles.customerAvatar}></div>
                                            <span className={styles.customerName}>{row.customer}</span>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.statusCell}>
                                            <label className={styles.toggleLabel} onClick={(e) => e.stopPropagation()}>
                                                <div className={styles.switch}>
                                                    <input type="checkbox" defaultChecked={row.active} />
                                                    <span className={styles.slider}></span>
                                                </div>
                                                <span className={`${styles.statusText} ${row.active ? styles.textActive : styles.textInactive}`}>
                                                    {row.active ? 'Active' : 'Inactive'}
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
                    <p className={styles.pageInfo}>Showing <span style={{ fontWeight: 600, color: '#334155' }}>1</span> to <span style={{ fontWeight: 600, color: '#334155' }}>4</span> of <span style={{ fontWeight: 600, color: '#334155' }}>142</span> results</p>
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
                {selectedAccount && (
                    <>
                        <div className={styles.drawerHeader}>
                            <div className={styles.drawerTitle}>
                                <h3>{selectedAccount.name}</h3>
                                <p>{selectedAccount.customer}</p>
                            </div>
                            <button className={styles.closeBtn} onClick={handleCloseDrawer}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className={styles.drawerContent}>
                            {/* Balance Card */}
                            <div className={styles.balanceCard}>
                                <div className={styles.balanceLabel}>Current Balance</div>
                                <div className={styles.balanceAmount}>{selectedAccount.balance}</div>
                                <div className={styles.balanceActions}>
                                    <button className={styles.balanceBtn}>Fund Account</button>
                                    <button className={styles.balanceBtn}>Transfer</button>
                                </div>
                            </div>

                            {/* Account Details */}
                            <div>
                                <h4 className={styles.sectionTitle}>Account Details</h4>
                                <div className={styles.detailGrid}>
                                    <div className={styles.detailItem}>
                                        <label>Account Number</label>
                                        <p style={{ fontFamily: 'monospace' }}>{selectedAccount.accountNumber}</p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Bank Name</label>
                                        <p>{selectedAccount.bankName}</p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Status</label>
                                        <span className={`${styles.statusText} ${selectedAccount.active ? styles.textActive : styles.textInactive}`} style={{ margin: 0 }}>
                                            {selectedAccount.active ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <label>Daily Limit</label>
                                        <p>{selectedAccount.dailyLimit}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Transactions (Mock) */}
                            <div>
                                <h4 className={styles.sectionTitle}>Recent Transactions</h4>
                                <div className={styles.transactionList}>
                                    <div className={styles.transactionItem}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className={styles.txIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>
                                                <ArrowDownLeft size={18} />
                                            </div>
                                            <div className={styles.txDetails}>
                                                <p>Inward Payment</p>
                                                <span>From: Access Bank - 10:23 AM</span>
                                            </div>
                                        </div>
                                        <span className={`${styles.txAmount} ${styles.credit}`}>+₦ 45,000.00</span>
                                    </div>
                                    <div className={styles.transactionItem}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className={styles.txIcon} style={{ background: '#fef2f2', color: '#ef4444' }}>
                                                <ArrowUpRight size={18} />
                                            </div>
                                            <div className={styles.txDetails}>
                                                <p>Payout</p>
                                                <span>To: Vendor Payment - Yesterday</span>
                                            </div>
                                        </div>
                                        <span className={`${styles.txAmount} ${styles.debit}`}>-₦ 12,500.00</span>
                                    </div>
                                    <div className={styles.transactionItem}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className={styles.txIcon}>
                                                <CreditCard size={18} />
                                            </div>
                                            <div className={styles.txDetails}>
                                                <p>Card Funding</p>
                                                <span>Visa **** 4242 - Oct 24</span>
                                            </div>
                                        </div>
                                        <span className={`${styles.txAmount} ${styles.credit}`}>+₦ 100,000.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </div>
            {/* Create Account Modal */}
            <div
                className={`${styles.drawerOverlay} ${isCreateModalOpen ? styles.open : ''}`}
                onClick={handleCreateClose}
            ></div>

            <div className={`${styles.modalPanel} ${isCreateModalOpen ? styles.open : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h2 className={styles.modalTitle}>Create New Account</h2>
                        <p className={styles.modalDesc}>Set up a new virtual account for your customer.</p>
                    </div>
                    <button className={styles.closeBtn} onClick={handleCreateClose}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleCreateSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Account Name</label>
                        <input type="text" className={styles.formInput} placeholder="e.g. Test Account 1" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Customer</label>
                        <input type="text" className={styles.formInput} placeholder="Assign to customer (optional)" />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Link NIN</label>
                        <input type="text" className={styles.formInput} placeholder="Enter 11-digit NIN" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Preferred Bank</label>
                        <select className={styles.formSelect}>
                            <option value="providus">Providus Bank</option>
                            <option value="wema">Wema Bank</option>
                            <option value="gtbank">GTBank</option>
                            <option value="zenith">Zenith Bank</option>
                        </select>
                    </div>

                    <div className={styles.modalActions}>
                        <button type="button" className={styles.cancelBtn} onClick={handleCreateClose}>Cancel</button>
                        <button type="submit" className={styles.submitBtn}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VirtualAccounts;

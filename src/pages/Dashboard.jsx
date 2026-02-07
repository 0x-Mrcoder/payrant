import { useState } from 'react';
import {
    Search,
    Store,
    Plus,
    Wallet,
    Activity,
    Globe,
    Hourglass,
    ChevronDown
} from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/Sidebar';
import styles from './Dashboard.module.css';

const data = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 1398 },
    { name: 'Wed', value: 9800 },
    { name: 'Thu', value: 3908 },
    { name: 'Fri', value: 4800 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4300 },
];

const Dashboard = () => {
    return (
        <div className={styles.dashboardLayout}>
            {/* Sidebar is now internal to the specific page layout if using the provided structure,
                or we can keep it as is. Assuming Sidebar component is compatible.
                The provided HTML has Sidebar fixed left. My converted Sidebar.jsx is fixed.
            */}
            <Sidebar />

            <main className={styles.mainContent}>
                {/* Top Navbar */}
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.pageTitle}>
                            <h2>Dashboard Overview</h2>
                            <p>Welcome back, Acme Corp</p>
                        </div>
                        <div className={styles.searchContainer}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search transactions..."
                            />
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <button className={styles.storeBtn}>
                            <Store size={18} />
                            <span>Acme Corp</span>
                            <ChevronDown size={16} />
                        </button>
                        <button className={styles.newPaymentBtn}>
                            <Plus size={18} strokeWidth={3} />
                            <span>New Payment</span>
                        </button>
                        <div className={styles.avatar}></div>
                    </div>
                </header>

                <div className={styles.dashboardScroll}>
                    <div className={styles.contentContainer}>
                        {/* Stats Row */}
                        <div className={styles.statsGrid}>
                            <StatCard
                                title="Total Revenue"
                                value="₦4,250,000.00"
                                trend="+12.5%"
                                trendLabel="vs last month"
                                icon={Wallet}
                                iconColor={styles.textGreen}
                                iconBg={styles.bgGreenLight}
                                trendColor={styles.textGreen}
                            />
                            <StatCard
                                title="Success Rate"
                                value="98.5%"
                                trend="+2.4%"
                                trendLabel="improvement"
                                icon={Activity}
                                iconColor={styles.textPurple}
                                iconBg={styles.bgPurpleLight}
                                trendColor={styles.textGreen}
                            />
                            <StatCard
                                title="Active Links"
                                value="12"
                                trend="0%"
                                trendLabel="change"
                                icon={Globe}
                                iconColor={styles.textBlue}
                                iconBg={styles.bgBlueLight}
                                trendColor={styles.textGrey} // Default
                            />
                            <StatCard
                                title="Pending Payouts"
                                value="₦150,000.00"
                                trendLabel="Scheduled for tomorrow"
                                icon={Hourglass}
                                iconColor={styles.textOrange}
                                iconBg={styles.bgOrangeLight}
                                trendColor={styles.textOrange}
                            />
                        </div>

                        {/* Chart Section */}
                        <div className={styles.chartSection}>
                            <div className={styles.chartHeader}>
                                <div className={styles.chartTitle}>
                                    <h3>Business Health</h3>
                                    <p>Conversion Rate Overview</p>
                                </div>
                                <div className={styles.chartControls}>
                                    <div style={{ textAlign: 'right' }}>
                                        <div className={styles.chartValueBig}>82%</div>
                                        <div className={styles.chartTrend}>+4% vs last week</div>
                                    </div>
                                    <select className={styles.timeSelect}>
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                        <option>This Year</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#592ff4" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#592ff4" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#592ff4"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className={styles.tableSection}>
                            <div className={styles.tableHeader}>
                                <h3 className={styles.tableTitle}>Recent Payments</h3>
                                <button className={styles.viewAllBtn}>View All</button>
                            </div>
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th className={styles.textRight}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TransactionRow
                                            id="#TRX-9982"
                                            name="John Doe"
                                            initials="JD"
                                            date="Oct 24, 2023"
                                            amount="₦5,000"
                                            status="Success"
                                            avatarColor={styles.bgIndigo}
                                            statusClass={styles.statusSuccess}
                                        />
                                        <TransactionRow
                                            id="#TRX-9981"
                                            name="Sarah Smith"
                                            initials="SS"
                                            date="Oct 24, 2023"
                                            amount="₦12,500"
                                            status="Pending"
                                            avatarColor={styles.bgPink}
                                            statusClass={styles.statusPending}
                                        />
                                        <TransactionRow
                                            id="#TRX-9980"
                                            name="Michael Brown"
                                            initials="MB"
                                            date="Oct 23, 2023"
                                            amount="₦2,000"
                                            status="Failed"
                                            avatarColor={styles.bgBlue}
                                            statusClass={styles.statusFailed}
                                        />
                                        <TransactionRow
                                            id="#TRX-9979"
                                            name="Emily Davis"
                                            initials="ED"
                                            date="Oct 23, 2023"
                                            amount="₦45,000"
                                            status="Success"
                                            avatarColor={styles.bgPurple}
                                            statusClass={styles.statusSuccess}
                                        />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{ height: '24px' }}></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

// Helper Components
const StatCard = ({ title, value, trend, trendLabel, icon: Icon, iconColor, iconBg, trendColor }) => (
    <div className={styles.statCard}>
        <div className={styles.statHeader}>
            <p className={styles.statTitle}>{title}</p>
            <div className={`${styles.statIconContainer} ${iconColor} ${iconBg}`}>
                <Icon size={18} />
            </div>
        </div>
        <p className={styles.statValue}>{value}</p>
        <div className={styles.statTrend}>
            {trend && <span className={trendColor}>{trend}</span>}
            <span className={styles.trendText}>{trendLabel}</span>
        </div>
    </div>
);

const TransactionRow = ({ id, name, initials, date, amount, status, avatarColor, statusClass }) => (
    <tr>
        <td className={styles.trxId}>{id}</td>
        <td className={styles.customerCell}>
            <div className={`${styles.customerAvatar} ${avatarColor}`}>{initials}</div>
            <span className={styles.customerName}>{name}</span>
        </td>
        <td className={styles.dateCell}>{date}</td>
        <td className={styles.amountCell}>{amount}</td>
        <td className={styles.textRight}>
            <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
        </td>
    </tr>
);

export default Dashboard;

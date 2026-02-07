import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
    const location = useLocation();
    const isVirtualAccounts = location.pathname === '/virtual-accounts';
    const isPaymentLinks = location.pathname === '/payment-links';
    const isCreatePaymentLink = location.pathname === '/payment-links/create';

    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.mainContent}>
                {!isVirtualAccounts && !isPaymentLinks && !isCreatePaymentLink && <DashboardHeader />}
                <div className={styles.contentScroll}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

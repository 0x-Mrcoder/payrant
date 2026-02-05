import { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import HeroSection from '../components/Dashboard/HeroSection';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import Sidebar from '../components/Sidebar';
import '../App.css'; // Importing global styles

const Dashboard = () => {
    return (
        <div className="app-container">
            <Sidebar />

            <main className="main-content">
                <header className="top-header">
                    <div className="page-title">
                        <h1>Dashboard</h1>
                        <p>Welcome back, Payrant User</p>
                    </div>

                    <div className="header-actions">
                        <div className="search-bar">
                            <Search size={18} />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <button className="icon-btn">
                            <Bell size={20} />
                            <span className="badge-dot"></span>
                        </button>
                    </div>
                </header>

                <div className="dashboard-content">
                    <HeroSection />
                    <RecentTransactions />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

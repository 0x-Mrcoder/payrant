import { useState } from 'react';
import {
    Check,
    Link,
    FileText,
    ArrowRight,
    Headset,
    Mail,
    Lock
} from 'lucide-react';
import styles from './GetStarted.module.css';

const GetStarted = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className={styles.container}>
            {/* Welcome Header */}
            <div className={`${styles.welcomeHeader} ${styles.animateEnter}`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                    <h1 className={styles.headline}>Welcome to Payrant, Usman!</h1>
                    <p className={styles.subheadline}>
                        Let's get your payments infrastructure set up in minutes. Complete these steps to activate your account fully.
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <p className={styles.balanceLabel}>Current Balance</p>
                    <p className={styles.balanceValue}>₦ 0.00</p>
                </div>
            </div>

            {/* Main Grid */}
            <div className={styles.mainGrid}>

                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Progress Card */}
                    <div className={`${styles.progressCard} ${styles.animateEnter} ${styles.delay100}`}>
                        <div className={styles.progressBg}></div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Quick Start Checklist</h3>
                            <span className={styles.progressBadge}>1 of 3 Completed</span>
                        </div>
                        <div className={styles.stepList}>

                            {/* Step 1: Completed */}
                            <div className={`${styles.stepItem} ${styles.stepCompleted}`}>
                                <div className={styles.checkIcon}>
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className={styles.completedText}>Verify your business identity</h4>
                                    <p className={styles.stepDesc}>Your business documents have been verified successfully.</p>
                                </div>
                            </div>

                            {/* Step 2: Active */}
                            <div className={`${styles.stepItem} ${styles.stepActive}`}>
                                <div className={styles.activeBar}></div>
                                <div className={styles.activeIcon}>
                                    <div className={styles.pulseDot}></div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                        <h4 className={`${styles.stepTitle} ${styles.activeTitle}`}>Set up virtual account details</h4>
                                        <button className={styles.startBtn}>Start Now</button>
                                    </div>
                                    <p className={styles.stepDesc}>Configure your settlement bank account to receive payouts.</p>
                                </div>
                            </div>

                            {/* Step 3: Pending */}
                            <div className={`${styles.stepItem} ${styles.stepPending}`}>
                                <div className={styles.pendingIcon}>3</div>
                                <div style={{ flex: 1 }}>
                                    <h4 className={styles.stepTitle} style={{ color: '#6b7280' }}>Integrate the API keys</h4>
                                    <p className={styles.stepDesc}>Connect your website or app using our developer tools.</p>
                                </div>
                                <div style={{ color: '#d1d5db' }}>
                                    <Lock size={18} />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Suggested Actions */}
                    <div>
                        <h3 className={`${styles.cardTitle} ${styles.animateEnter} ${styles.delay200}`} style={{ marginBottom: '16px' }}>Suggested Actions</h3>
                        <div className={styles.actionsGrid}>

                            <a href="#" className={`${styles.actionCard} ${styles.animateEnter} ${styles.delay300}`}>
                                <div className={styles.actionIconBg} style={{ backgroundColor: '#f3e8ff', color: '#9333ea' }}>
                                    <Link size={20} />
                                </div>
                                <h4 className={styles.actionTitle}>Create Payment Link</h4>
                                <p className={styles.actionDesc}>Start accepting payments instantly without writing a single line of code.</p>
                                <div className={styles.actionLink} style={{ color: '#592ff4' }}>
                                    Create now <ArrowRight size={16} />
                                </div>
                            </a>

                            <a href="#" className={`${styles.actionCard} ${styles.animateEnter} ${styles.delay300}`}>
                                <div className={styles.actionIconBg} style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
                                    <FileText size={20} />
                                </div>
                                <h4 className={styles.actionTitle}>Explore Documentation</h4>
                                <p className={styles.actionDesc}>Learn how to integrate our robust APIs into your product.</p>
                                <div className={styles.actionLink} style={{ color: '#2563eb' }}>
                                    Read docs <ArrowRight size={16} />
                                </div>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Support Card */}
                    <div className={`${styles.supportCard} ${styles.animateEnter} ${styles.delay200}`}>
                        <div className={styles.supportBlob1}></div>
                        <div className={styles.supportBlob2}></div>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div className={styles.supportIconCircle}>
                                <Headset size={32} color="white" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Need Help?</h3>
                            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '24px', lineHeight: 1.5 }}>
                                Our support team is available 24/7 to help you with your integration and account setup.
                            </p>
                            <button className={styles.supportBtn}>Chat with Support</button>
                            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.75rem', opacity: 0.7 }}>
                                <Mail size={14} />
                                <span>hello@payrant.com</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetStarted;

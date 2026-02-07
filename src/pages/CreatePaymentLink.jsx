import React, { useState } from 'react';
import {
    ArrowLeft,
    Bell,
    FileEdit,
    CreditCard,
    DollarSign,
    ChevronDown,
    Link as LinkIcon,
    Eye,
    Store,
    Lock,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import styles from './CreatePaymentLink.module.css';

const CreatePaymentLink = () => {
    // Form State
    const [linkName, setLinkName] = useState('Summer Sale Bundle');
    const [description, setDescription] = useState('');
    const [amountType, setAmountType] = useState('fixed');
    const [currency, setCurrency] = useState('NGN');
    const [amount, setAmount] = useState('50,000');
    const [redirectUrl, setRedirectUrl] = useState('');

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button className={styles.backLink} style={{ background: 'none', border: 'none', padding: 0 }}>
                        <ArrowLeft size={20} />
                        <span>Back to Links</span>
                    </button>
                </div>
                <div>
                    <button className={styles.notificationBtn}>
                        <Bell size={20} />
                        <span className={styles.notificationBadge}></span>
                    </button>
                </div>
            </header>

            {/* Main Content Body */}
            <div className={styles.content}>
                <div className={styles.grid}>
                    {/* Left Column: Form */}
                    <div className={styles.formColumn}>
                        <div className={styles.pageHeader}>
                            <h1 className={styles.pageTitle}>Create Payment Link</h1>
                            <p className={styles.pageSubtitle}>Customize how your customers pay you securely.</p>
                        </div>

                        {/* Progress Stepper */}
                        <div className={styles.stepper}>
                            <div className={`${styles.stepItem} ${styles.stepActive}`}>
                                <div className={styles.stepBadge}>1</div>
                                <span className={styles.stepLabel}>Details</span>
                            </div>
                            <div className={styles.stepDivider}></div>
                            <div className={`${styles.stepItem} ${styles.stepInactive}`}>
                                <div className={styles.stepBadge}>2</div>
                                <span className={styles.stepLabel}>Settings</span>
                            </div>
                        </div>

                        {/* Form Content */}
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            {/* Step 1 Group: Link Details */}
                            <div className={styles.card}>
                                <h3 className={styles.cardHeader}>
                                    <FileEdit size={24} className={styles.cardIcon} />
                                    Link Details
                                </h3>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>
                                        <span className={styles.labelText}>Link Name</span>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="e.g. Summer Sale 2024"
                                            value={linkName}
                                            onChange={(e) => setLinkName(e.target.value)}
                                        />
                                    </label>

                                    <label className={styles.label}>
                                        <span className={styles.labelText}>
                                            Description <span className={styles.optionalText}>(Optional)</span>
                                        </span>
                                        <textarea
                                            className={styles.textarea}
                                            placeholder="Describe what customers are paying for..."
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </label>

                                    <div className={styles.label}>
                                        <span className={styles.labelText}>Amount Type</span>
                                        <div className={styles.amountTypeSelector}>
                                            <button
                                                type="button"
                                                className={`${styles.typeBtn} ${amountType === 'fixed' ? styles.typeBtnActive : styles.typeBtnInactive}`}
                                                onClick={() => setAmountType('fixed')}
                                            >
                                                Fixed Amount
                                            </button>
                                            <button
                                                type="button"
                                                className={`${styles.typeBtn} ${amountType === 'flexible' ? styles.typeBtnActive : styles.typeBtnInactive}`}
                                                onClick={() => setAmountType('flexible')}
                                            >
                                                Flexible
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 Group: Payment Settings */}
                            <div className={styles.card}>
                                <h3 className={styles.cardHeader}>
                                    <CreditCard size={24} className={styles.cardIcon} />
                                    Payment Settings
                                </h3>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.formGrid}>
                                        <label className={`${styles.label} ${styles.colSpan1}`}>
                                            <span className={styles.labelText}>Currency</span>
                                            <div className={styles.selectWrapper}>
                                                <div className={styles.inputIcon}>
                                                    <DollarSign size={18} />
                                                </div>
                                                <select
                                                    className={styles.select}
                                                    value={currency}
                                                    onChange={(e) => setCurrency(e.target.value)}
                                                >
                                                    <option value="NGN">NGN</option>
                                                    <option value="USD">USD</option>
                                                </select>
                                                <div className={styles.inputTrailingIcon}>
                                                    <ChevronDown size={18} />
                                                </div>
                                            </div>
                                        </label>

                                        <label className={`${styles.label} ${styles.colSpan2}`}>
                                            <span className={styles.labelText}>Amount</span>
                                            <div className={styles.inputWrapper}>
                                                <div className={styles.inputIcon}>
                                                    <span style={{ fontWeight: 600 }}>₦</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`${styles.input} ${styles.inputWithIcon}`}
                                                    placeholder="0.00"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    style={{ fontWeight: 700, fontSize: '1.125rem' }}
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <label className={styles.label}>
                                        <span className={styles.labelText}>
                                            Redirect URL <span className={styles.optionalText}>(Optional)</span>
                                        </span>
                                        <div className={styles.inputWrapper}>
                                            <div className={styles.inputIcon}>
                                                <LinkIcon size={18} />
                                            </div>
                                            <input
                                                type="url"
                                                className={`${styles.input} ${styles.inputWithIcon}`}
                                                placeholder="https://yoursite.com/thank-you"
                                                value={redirectUrl}
                                                onChange={(e) => setRedirectUrl(e.target.value)}
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Preview Sticky */}
                    <div className={styles.previewColumn}>
                        <p className={styles.previewTitle}>
                            <Eye size={18} />
                            Customer Preview
                        </p>

                        <div className={styles.mockupContainer}>
                            {/* Status Bar */}
                            <div className={styles.mockupStatusBar}>
                                <span className={styles.mockupTime}>9:41</span>
                                <div className={styles.mockupSignal}>
                                    <div className={`${styles.signalDot} ${styles.half}`}></div>
                                    <div className={`${styles.signalDot} ${styles.half}`}></div>
                                    <div className={styles.signalDot}></div>
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className={styles.mockupScreen}>
                                {/* Header */}
                                <div className={styles.mockupHeader}>
                                    <div className={styles.mockupLogo}>
                                        <Store size={32} color="white" />
                                    </div>
                                    <div className={styles.mockupTextSm}>Payment to</div>
                                    <div className={styles.mockupTextLg}>Payrant Business</div>
                                </div>

                                {/* Card */}
                                <div className={styles.mockupCard}>
                                    <div className={styles.mockupPrice}>
                                        <h3 className={styles.mockupLabelSm}>TOTAL AMOUNT</h3>
                                        <div className={styles.mockupAmount}>
                                            ₦{amount || '0'}<span className={styles.mockupDecimal}>.00</span>
                                        </div>
                                    </div>

                                    <div className={styles.mockupDivider}></div>

                                    <div className={styles.mockupRow}>
                                        <p className={styles.mockupLabelSm}>PAYING FOR</p>
                                        <p className={styles.mockupValue}>{linkName || 'Payment Link'}</p>
                                    </div>

                                    <div className={styles.mockupRow}>
                                        <label className={styles.mockupLabelSm}>YOUR EMAIL</label>
                                        <div className={styles.mockupInput}></div>
                                    </div>

                                    <button className={styles.mockupBtn}>
                                        <Lock size={16} />
                                        Pay NGN {amount || '0'}
                                    </button>
                                </div>

                                {/* Security Badge */}
                                <div className={styles.mockupSecurity}>
                                    <ShieldCheck size={14} />
                                    Secured by Payrant
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer Action Bar */}
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <button className={styles.cancelBtn}>Cancel</button>

                    <div className={styles.footerActions}>
                        <span className={styles.saveText}>All changes saved automatically</span>
                        <button className={styles.createLinkBtn}>
                            Create Link
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePaymentLink;

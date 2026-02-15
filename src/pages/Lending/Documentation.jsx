import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Book, FileText, Search, ChevronRight, ChevronDown,
    Code, Shield, Zap, CreditCard, Wallet, Bell, ArrowRight, Banknote, Menu, X
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import styles from './Documentation.module.css';

const SyntaxDisplay = ({ code }) => {
    if (!code) return null;

    // Simple JSON syntax highlighting
    const highlight = (json) => {
        try {
            // Ensure we're working with a string
            const str = typeof json === 'string' ? json : JSON.stringify(json, null, 2);

            // Tokenize and wrap
            return str.replace(
                /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[\[\]{},:])/g,
                (match) => {
                    let cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            // Key
                            return `<span class="${styles.token} ${styles.key}">${match.slice(0, -1)}</span><span class="${styles.token} ${styles.punctuation}">:</span>`;
                        }
                        cls = 'string';
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    } else if (/[\[\]{},:]/.test(match)) {
                        cls = 'punctuation';
                    }
                    return `<span class="${styles.token} ${styles[cls]}">${match}</span>`;
                }
            );
        } catch (e) {
            return json; // Fallback to plain text
        }
    };

    return (
        <pre className={styles.codeBlock}>
            <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
    );
};

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [expandedItems, setExpandedItems] = useState(['getting-started']);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

    const toggleExpand = (item) => {
        setExpandedItems(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    const sections = [
        {
            id: 'getting-started',
            title: 'Getting Started',
            icon: <Book size={20} />,
            subsections: [
                { id: 'introduction', title: 'Welcome' },
                { id: 'authentication', title: 'Authentication' },
                { id: 'environments', title: 'Environments' },
                { id: 'errors', title: 'Error Handling' }
            ]
        },
        {
            id: 'checkout',
            title: 'Checkout Payments',
            icon: <CreditCard size={20} />,
            subsections: [
                { id: 'checkout-overview', title: 'Overview' },
                { id: 'initialize-payment', title: 'Initialize Payment' },
                { id: 'verify-payment', title: 'Verify Payment' },
                { id: 'payment-channels', title: 'Payment Channels' }
            ]
        },
        {
            id: 'virtual-accounts',
            title: 'Virtual Accounts',
            icon: <Wallet size={20} />,
            subsections: [
                { id: 'va-overview', title: 'Overview' },
                { id: 'create-account', title: 'Create Account' },
                { id: 'list-accounts', title: 'List Accounts' },
                { id: 'account-transactions', title: 'Account Transactions' }
            ]
        },
        {
            id: 'payouts',
            title: 'Payouts',
            icon: <Banknote size={20} />,
            subsections: [
                { id: 'payout-overview', title: 'Overview' },
                { id: 'bank-list', title: 'Get Bank List' },
                { id: 'validate-bank', title: 'Validate Account' },
                { id: 'payout-init', title: 'Initialize Payout' }
            ]
        },
        {
            id: 'webhooks',
            title: 'Webhooks',
            icon: <Bell size={20} />,
            subsections: [
                { id: 'webhook-overview', title: 'Overview' },
                { id: 'webhook-events', title: 'Event Types' },
                { id: 'webhook-security', title: 'Security' },
                { id: 'webhook-testing', title: 'Testing Webhooks' }
            ]
        },
        {
            id: 'security',
            title: 'Security',
            icon: <Shield size={20} />,
            subsections: [
                { id: 'security-overview', title: 'Overview' },
                { id: 'pci-compliance', title: 'PCI Compliance' },
                { id: 'data-encryption', title: 'Data Encryption' },
                { id: 'best-practices', title: 'Best Practices' }
            ]
        }
    ];

    return (
        <>
            <Navbar isDocs={true} />
            <div className={styles.documentation}>
                <SEO
                    title="Documentation - Complete Product Guide | Payrant"
                    description="Comprehensive documentation for Payrant payment gateway. Learn how to integrate, manage payments, virtual accounts, and more with detailed guides and examples."
                    keywords="payrant documentation, payment gateway guide, integration guide, api documentation, virtual account setup, payment processing guide"
                    url="https://payrant.com/documentation"
                />

                {/* Mobile Sidebar Toggle */}
                <button
                    className={styles.mobileSidebarBtn}
                    onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                >
                    {showMobileSidebar ? <X size={20} /> : <Menu size={20} />}
                    <span>Menu</span>
                </button>

                {/* Mobile Sidebar Overlay */}
                {showMobileSidebar && (
                    <div
                        className={styles.sidebarOverlay}
                        onClick={() => setShowMobileSidebar(false)}
                    />
                )}

                {/* Main Content */}
                <div className={styles.docsLayout}>
                    {/* Sidebar */}
                    <aside className={`${styles.sidebar} ${showMobileSidebar ? styles.sidebarOpen : ''}`}>
                        <nav className={styles.nav}>
                            {sections.map(section => (
                                <div key={section.id} className={styles.navSection}>
                                    <button
                                        className={styles.navHeader}
                                        onClick={() => toggleExpand(section.id)}
                                    >
                                        {section.icon}
                                        <span>{section.title}</span>
                                        {expandedItems.includes(section.id) ?
                                            <ChevronDown size={16} /> :
                                            <ChevronRight size={16} />
                                        }
                                    </button>
                                    {expandedItems.includes(section.id) && (
                                        <div className={styles.navSubsections}>
                                            {section.subsections.map(sub => (
                                                <button
                                                    key={sub.id}
                                                    className={`${styles.navItem} ${activeSection === sub.id ? styles.active : ''}`}
                                                    onClick={() => setActiveSection(sub.id)}
                                                >
                                                    {sub.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <main className={styles.content}>
                        {activeSection === 'introduction' && (
                            <div className={styles.section}>
                                {/* Welcome Hero */}
                                <div className={styles.welcomeHero}>
                                    <div className={styles.welcomeContent}>
                                        <h1>Welcome to Payrant Docs</h1>
                                        <p>Your one-stop guide for integrating seamless payments, managing virtual accounts, and building powerful financial products.</p>
                                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('getting-started'); }} className={styles.welcomeCta}>Get Started</a>
                                    </div>
                                    <div className={styles.welcomeImage}>
                                        <img src="/images/api_illustration.png" alt="API Illustration" />
                                    </div>
                                </div>

                                {/* Feature Grid */}
                                <div className={styles.featureGrid}>
                                    <div className={styles.featureCard} onClick={() => setActiveSection('checkout-overview')}>
                                        <div className={styles.featureIcon}><CreditCard size={24} /></div>
                                        <h3>Checkout</h3>
                                        <p>Accept payments from your customers via card, bank, wallet, and USSD.</p>
                                        <div className={styles.featureLink}>Get Started <ArrowRight size={16} /></div>
                                    </div>
                                    <div className={styles.featureCard} onClick={() => setActiveSection('va-overview')}>
                                        <div className={styles.featureIcon}><Wallet size={24} /></div>
                                        <h3>Virtual Accounts</h3>
                                        <p>Create and manage dedicated virtual bank accounts for your customers.</p>
                                        <div className={styles.featureLink}>Explore <ArrowRight size={16} /></div>
                                    </div>
                                    <div className={styles.featureCard} onClick={() => setActiveSection('webhooks')}>
                                        <div className={styles.featureIcon}><Zap size={24} /></div>
                                        <h3>Webhooks</h3>
                                        <p>Listen to real-time events and automate your business logic.</p>
                                        <div className={styles.featureLink}>Learn More <ArrowRight size={16} /></div>
                                    </div>
                                    <div className={styles.featureCard} onClick={() => setActiveSection('payout-overview')}>
                                        <div className={styles.featureIcon}><Banknote size={24} /></div>
                                        <h3>Payout</h3>
                                        <p>Send money to bank accounts and mobile wallets.</p>
                                        <div className={styles.featureLink}>Start Payouts <ArrowRight size={16} /></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'authentication' && (
                            <div className={styles.section}>
                                <h2>Authentication</h2>
                                <p>Payrant uses API keys to authenticate requests. You can view and manage your API keys in the Payrant dashboard.</p>

                                <h3>Base URL</h3>
                                <div className={styles.codeBlock}>
                                    <pre><code>{`https://api-core.payrant.com/`}</code></pre>
                                </div>

                                <h3>Getting Your API Key</h3>
                                <ol>
                                    <li>Sign up for a Payrant account</li>
                                    <li>Navigate to the API section in your dashboard</li>
                                    <li>Generate a new API key</li>
                                    <li>Copy and securely store your API key</li>
                                </ol>

                                <h3>Authentication Header</h3>
                                <p>All API requests require authentication using a Bearer token in the Authorization header:</p>
                                <div className={styles.codeBlock}>
                                    <pre><code>{`Authorization: Bearer YOUR_API_KEY`}</code></pre>
                                </div>

                                <div className={styles.alert}>
                                    <Shield size={20} />
                                    <div>
                                        <strong>Security Warning</strong>
                                        <p>Keep your API keys secure and never expose them in client-side code or public repositories.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'environments' && (
                            <div className={styles.section}>
                                <h2>Environments</h2>
                                <p>Payrant provides two environments for development and production.</p>

                                <h3>Test Environment</h3>
                                <p>Use test keys for development and testing:</p>
                                <div className={styles.codeBlock}>
                                    <pre><code>{`Public Key: pk_test_1234567890abcdef
Secret Key: sk_test_1234567890abcdef

Base URL: https://api-test.payrant.com/v1`}</code></pre>
                                </div>

                                <h3>Live Environment</h3>
                                <p>Use live keys for production:</p>
                                <div className={styles.codeBlock}>
                                    <pre><code>{`Public Key: pk_live_your_public_key
Secret Key: sk_live_your_secret_key

Base URL: https://api.payrant.com/v1`}</code></pre>
                                </div>
                            </div>
                        )}

                        {activeSection === 'errors' && (
                            <div className={styles.section}>
                                <h2>Error Handling</h2>
                                <p>Payrant uses conventional HTTP response codes to indicate success or failure.</p>

                                <h3>HTTP Status Codes</h3>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Meaning</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>200</code></td>
                                            <td>Success</td>
                                        </tr>
                                        <tr>
                                            <td><code>400</code></td>
                                            <td>Bad Request - Invalid parameters</td>
                                        </tr>
                                        <tr>
                                            <td><code>401</code></td>
                                            <td>Unauthorized - Invalid API key</td>
                                        </tr>
                                        <tr>
                                            <td><code>404</code></td>
                                            <td>Not Found - Resource doesn't exist</td>
                                        </tr>
                                        <tr>
                                            <td><code>500</code></td>
                                            <td>Server Error - Something went wrong</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3>Error Response Format</h3>
                                <div className={styles.codeBlock}>
                                    <pre><code>{`{
  "status": false,
  "message": "Invalid API key provided",
  "code": "invalid_api_key"
}`}</code></pre>
                                </div>
                            </div>
                        )}

                        {activeSection === 'checkout-overview' && (
                            <div className={styles.section}>
                                <h2>Checkout Payments Overview</h2>
                                <p>Accept one-time payments with our hosted checkout page.</p>

                                <h3>How it Works</h3>
                                <ol>
                                    <li>Initialize a payment on your server</li>
                                    <li>Redirect customer to the authorization URL</li>
                                    <li>Customer completes payment</li>
                                    <li>Verify payment status on your server</li>
                                </ol>

                                <h3>Supported Payment Methods</h3>
                                <ul>
                                    <li>Debit/Credit Cards (Mastercard, Visa, Verve)</li>
                                    <li>Bank Transfer</li>
                                    <li>USSD</li>
                                    <li>Mobile Money</li>
                                </ul>
                            </div>
                        )}

                        {activeSection === 'initialize-payment' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Initialize Checkout Transaction</h2>
                                        <p>Create a new checkout transaction and generate a virtual account for payment collection.</p>

                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.post}`}>POST</span>
                                                <span className={styles.endpointUrl}>/transaction/api.php?action=initialize</span>
                                            </div>
                                        </div>

                                        <h3>Parameters</h3>
                                        <table className={styles.table}>
                                            <thead><tr><th>Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>email</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Customer's email address</td></tr>
                                                <tr><td><code>amount</code></td><td>Number</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Transaction amount in NGN</td></tr>
                                                <tr><td><code>callback_url</code></td><td>String</td><td>No</td><td>URL to redirect after payment</td></tr>
                                                <tr><td><code>webhook_url</code></td><td>String</td><td>No</td><td>URL to receive payment notifications</td></tr>
                                                <tr><td><code>metadata</code></td><td>Object</td><td>No</td><td>Additional data (order_id, customer_name, etc.)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Request Body</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "email": "customer@example.com",
  "amount": 100,
  "callback_url": "https://yoursite.com/callback",
  "webhook_url": "https://yoursite.com/webhook",
  "metadata": {
    "order_id": "ORDER_123",
    "customer_name": "John Doe"
  }
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": true,
  "message": "Transaction initialized successfully",
  "data": {
    "reference": "TXN_1756911546_77_015d87df",
    "checkout_url": "https://payrant.com/api-core/transaction/checkout.php?ref=TXN_1756911546_77_015d87df",
    "amount": 100,
    "email": "customer@example.com",
    "account_number": "6680456766",
    "bank_name": "PalmPay",
    "status": "pending"
  }
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Error)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": false,
  "message": "Invalid API key"
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'verify-payment' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Verify Checkout Transaction</h2>
                                        <p>Check the status of a checkout transaction using its reference.</p>

                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.get}`}>GET</span>
                                                <span className={styles.endpointUrl}>/transaction/api.php?action=verify&reference={'{reference}'}</span>
                                            </div>
                                        </div>

                                        <h3>URL Parameters</h3>
                                        <table className={styles.table}>
                                            <thead><tr><th>Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>reference</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Transaction reference from initialize response</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": true,
  "data": {
    "reference": "TXN_1756911546_77_015d87df",
    "amount": 100,
    "email": "customer@example.com",
    "account_number": "6680456766",
    "bank_name": "PalmPay",
    "status": "successful",
    "paid_at": "2025-01-03 15:30:00"
  }
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Not Found)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": false,
  "message": "Transaction not found"
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'va-overview' && (
                            <div className={styles.section}>
                                <h2>Virtual Accounts Overview</h2>
                                <p>Create dedicated bank accounts for your customers to receive payments.</p>

                                <h3>Benefits</h3>
                                <ul>
                                    <li><strong>Permanent Accounts</strong> - Customers can reuse the same account</li>
                                    <li><strong>Instant Notifications</strong> - Get notified immediately when payment is received</li>
                                    <li><strong>Multiple Banks</strong> - Choose from multiple Nigerian banks</li>
                                    <li><strong>Auto-reconciliation</strong> - Payments are automatically matched to customers</li>
                                </ul>

                                <h3>Use Cases</h3>
                                <ul>
                                    <li>Subscription payments</li>
                                    <li>Wallet top-ups</li>
                                    <li>Invoice payments</li>
                                    <li>Recurring payments</li>
                                </ul>
                            </div>
                        )}

                        {activeSection === 'create-account' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Create Virtual Account</h2>
                                        <p>Creates a new Payrant virtual account linked to user's NIN for receiving payments.</p>

                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.post}`}>POST</span>
                                                <span className={styles.endpointUrl}>/palmpay/</span>
                                            </div>
                                        </div>

                                        <h3>Parameters</h3>
                                        <table className={styles.table}>
                                            <thead><tr><th>Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>documentType</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Type of document (e.g., "nin")</td></tr>
                                                <tr><td><code>documentNumber</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>NIN number or document identifier</td></tr>
                                                <tr><td><code>virtualAccountName</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Name for the virtual account</td></tr>
                                                <tr><td><code>customerName</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Customer's full name</td></tr>
                                                <tr><td><code>email</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Customer's email address</td></tr>
                                                <tr><td><code>accountReference</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Unique reference for the account</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Request Body</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "documentType": "nin",
  "documentNumber": "8149999933",
  "virtualAccountName": "test_user",
  "customerName": "Test User",
  "email": "test@example.com",
  "accountReference": "86fe77b5fe0c"
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "Enabled",
  "account_no": "6645962717",
  "virtualAccountName": "test_user(Payrant)",
  "virtualAccountNo": "6645962717",
  "identityType": "personal_nin",
  "licenseNumber": "8149999933",
  "customerName": "Test",
  "accountReference": "86fe77b5fe0c"
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'payout-overview' && (
                            <div className={styles.section}>
                                <h2>Payouts Overview</h2>
                                <p>Payrant Payouts API allows you to send money to bank accounts and mobile money wallets.</p>
                                <h3>Features</h3>
                                <ul>
                                    <li><strong>Single Transfers</strong> - Send money to one recipient</li>
                                    <li><strong>Bulk Transfers</strong> - Send money to multiple recipients at once</li>
                                    <li><strong>Name Enforcement</strong> - Verify account names before sending</li>
                                </ul>
                            </div>
                        )}

                        {activeSection === 'bank-list' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Get Available Banks</h2>
                                        <p>Retrieve a list of all supported Nigerian banks and their codes for transfers.</p>
                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.get}`}>GET</span>
                                                <span className={styles.endpointUrl}>/payout/banks_list/</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "success",
  "data": {
    "banks": [
      {
        "bankCode": "090405",
        "bankName": "Moniepoint MFB",
        "bankUrl": "https://...",
        "bgUrl": "https://..."
      },
      {
        "bankCode": "058",
        "bankName": "GTBank",
        "bankUrl": "https://...",
        "bgUrl": "https://..."
      }
    ],
    "total": 150
  }
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'validate-bank' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Validate Bank Account</h2>
                                        <p>Validate and retrieve the account name for a given bank code and account number before initiating a transfer.</p>
                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.post}`}>POST</span>
                                                <span className={styles.endpointUrl}>/payout/validate_account/</span>
                                            </div>
                                        </div>
                                        <h3>Parameters</h3>
                                        <table className={styles.table}>
                                            <thead><tr><th>Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>bank_code</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Bank code from banks list</td></tr>
                                                <tr><td><code>account_number</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Account number to validate</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Request Body</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "bank_code": "090405",
  "account_number": "8100000014"
}`} />
                                        </div>
                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "success",
  "data": {
    "account_number": "8100000014",
    "account_name": "Zainab Umar",
    "bank_code": "090405",
    "verified": true
  }
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'payout-init' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Initialize Payout</h2>
                                        <p>Initiate a bank transfer to any Nigerian bank account. Supports all major banks and fintech companies.</p>
                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.post}`}>POST</span>
                                                <span className={styles.endpointUrl}>/payout/transfer</span>
                                            </div>
                                        </div>
                                        <h3>Parameters</h3>
                                        <table className={styles.table}>
                                            <thead><tr><th>Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>bank_code</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Bank code (e.g., "090405")</td></tr>
                                                <tr><td><code>account_number</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Recipient's account number</td></tr>
                                                <tr><td><code>account_name</code></td><td>String</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Recipient's account name</td></tr>
                                                <tr><td><code>amount</code></td><td>Number</td><td><span className={styles.badgeSuccess}>Yes</span></td><td>Transfer amount (min 10 NGN)</td></tr>
                                                <tr><td><code>description</code></td><td>String</td><td>No</td><td>Transfer description/remark</td></tr>
                                                <tr><td><code>notify_url</code></td><td>String</td><td>No</td><td>Webhook URL for notifications</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Request Body</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "bank_code": "090405",
  "account_number": "8100000014",
  "account_name": "Zainab Umar",
  "amount": 20.00,
  "description": "Payment for services",
  "notify_url": "https://myapp.com/webhook/transfer"
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "success",
  "message": "Transfer initiated successfully",
  "data": {
    "transfer_id": 13,
    "reference": "TRANSFER_1756824073_77",
    "order_no": "41250902144113531387",
    "amount": 100,
    "fee": 20,
    "total_debit": 120,
    "bank_name": "Moniepoint",
    "account_name": "Zainab Umar",
    "account_number": "8100000014",
    "status": "processing",
    "estimated_completion": "2-5 minutes"
  }
}`} />
                                        </div>

                                        <div className={styles.apiCodeHeader} style={{ borderTop: '1px solid #374151' }}>Response (Error)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "error",
  "message": "Insufficient balance",
  "data": {
    "available_balance": 15.00,
    "required_amount": 32.00
  }
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'payment-channels' && (
                            <div className={styles.section}>
                                <h2>Payment Channels</h2>
                                <p>Payrant supports multiple payment channels to ensure your customers can pay you easily.</p>
                                <ul>
                                    <li><strong>Card Payments</strong>: Accept payments via Mastercard, Visa, and Verve cards.</li>
                                    <li><strong>Bank Transfer</strong>: Customers can make transfers to a dynamically generated bank account.</li>
                                    <li><strong>USSD</strong>: Support for USSD codes for major Nigerian banks.</li>
                                    <li><strong>Mobile Money</strong>: Accept payments from mobile money wallets.</li>
                                </ul>
                            </div>
                        )}

                        {activeSection === 'list-accounts' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>List Virtual Accounts</h2>
                                        <p>Retrieve a list of all virtual accounts created for your sub-accounts or customers.</p>
                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.get}`}>GET</span>
                                                <span className={styles.endpointUrl}>/palmpay/list</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "success",
  "data": [
    {
      "account_number": "6645962717",
      "account_name": "test_user(Payrant)",
      "customer_name": "Test User",
      "created_at": "2025-01-15T10:00:00Z"
    }
  ]
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'account-transactions' && (
                            <div className={styles.section}>
                                <div className={styles.apiSplitLayout}>
                                    <div className={styles.apiInfo}>
                                        <h2>Account Transactions</h2>
                                        <p>Get transaction history for a specific virtual account.</p>
                                        <div className={styles.endpointCard}>
                                            <div className={styles.endpointHeader}>
                                                <span className={`${styles.methodBadge} ${styles.get}`}>GET</span>
                                                <span className={styles.endpointUrl}>/palmpay/transactions/{'{account_number}'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.apiCode}>
                                        <div className={styles.apiCodeHeader}>Response (Success)</div>
                                        <div className={styles.apiCodeBlock}>
                                            <SyntaxDisplay code={`{
  "status": "success",
  "data": [
    {
      "reference": "TXN_123456",
      "amount": 5000,
      "type": "credit",
      "sender": "John Doe",
      "date": "2025-01-20T14:30:00Z"
    }
  ]
}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection.startsWith('webhook') && (
                            <div className={styles.section}>
                                {activeSection === 'webhook-overview' && (
                                    <>
                                        <h2>Webhooks Overview</h2>
                                        <p>Webhooks allow you to receive real-time notifications about events in your Payrant account, such as successful payments or payout updates.</p>
                                        <p>When an event occurs, Payrant sends an HTTP POST request to the URL you specify in your dashboard.</p>
                                    </>
                                )}
                                {activeSection === 'webhook-events' && (
                                    <>
                                        <h2>Event Types</h2>
                                        <p>Payrant supports the following event types:</p>
                                        <table className={styles.table}>
                                            <thead><tr><th>Event</th><th>Description</th></tr></thead>
                                            <tbody>
                                                <tr><td><code>charge.success</code></td><td>Triggered when a payment is successful</td></tr>
                                                <tr><td><code>transfer.success</code></td><td>Triggered when a transfer is completed</td></tr>
                                                <tr><td><code>transfer.failed</code></td><td>Triggered when a transfer fails</td></tr>
                                                <tr><td><code>virtual_account.credit</code></td><td>Triggered when a virtual account receives funds</td></tr>
                                            </tbody>
                                        </table>
                                    </>
                                )}
                                {activeSection === 'webhook-security' && (
                                    <>
                                        <h2>Webhook Security</h2>
                                        <p>Verify webhook requests to ensure they come from Payrant. Use the <code>x-payrant-signature</code> header to validate the payload.</p>
                                        <div className={styles.apiCodeBlock} style={{ marginTop: '1rem' }}>
                                            <SyntaxDisplay code={`// PHP Example
$signature = $_SERVER['HTTP_X_PAYRANT_SIGNATURE'];
$payload = file_get_contents('php://input');
$expectedSignature = hash_hmac('sha512', $payload, SECRET_KEY);

if ($signature === $expectedSignature) {
    // Process webhook
}`} />
                                        </div>
                                    </>
                                )}
                                {activeSection === 'webhook-testing' && (
                                    <>
                                        <h2>Testing Webhooks</h2>
                                        <p>You can test webhooks using the endpoint provided in your dashboard. We recommend using tools like <a href="https://webhook.site" target="_blank" rel="noopener noreferrer">Webhook.site</a> to inspect payloads.</p>
                                    </>
                                )}
                            </div>
                        )}

                        {activeSection.startsWith('security') && (
                            <div className={styles.section}>
                                {activeSection === 'security-overview' && (
                                    <>
                                        <h2>Security Overview</h2>
                                        <p>Security is our top priority. Payrant employs industry-standard security measures to protect your data and transactions.</p>
                                    </>
                                )}
                                {activeSection === 'pci-compliance' && (
                                    <>
                                        <h2>PCI Compliance</h2>
                                        <p>Payrant is PCI-DSS Level 1 compliant, ensuring the highest level of security for card processing.</p>
                                    </>
                                )}
                                {activeSection === 'data-encryption' && (
                                    <>
                                        <h2>Data Encryption</h2>
                                        <p>All sensitive data is encrypted using AES-256 encryption at rest and TLS 1.2+ in transit.</p>
                                    </>
                                )}
                                {activeSection === 'best-practices' && (
                                    <>
                                        <h2>Best Practices</h2>
                                        <ul>
                                            <li>Use strong API keys and rotate them regularly.</li>
                                            <li>Enable 2FA on your dashboard account.</li>
                                            <li>Validate webhook signatures.</li>
                                            <li>Never expose your Secret Key in client-side code.</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Documentation;

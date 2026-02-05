import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Zap, Lock, Server, Wallet, ShoppingCart, Banknote, Puzzle, Webhook, CheckCircle, Flag } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import styles from './Documentation.module.css';

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('getting-started');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            element.classList.remove(styles.sectionHighlight);
            void element.offsetWidth; // trigger reflow
            element.classList.add(styles.sectionHighlight);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.docContainer}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarLogo}>
                        <Link to="/">
                            <img src="/logo/logo.png" alt="Payrant" className={styles.logoImg} />
                        </Link>
                    </div>
                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarTitle}>Getting Started</div>
                        <a href="#getting-started" onClick={(e) => { e.preventDefault(); scrollToSection('getting-started'); }} className={`${styles.sidebarLink} ${activeSection === 'getting-started' ? styles.active : ''}`}><Zap size={16} /> Quick Start</a>
                        <a href="#authentication" onClick={(e) => { e.preventDefault(); scrollToSection('authentication'); }} className={`${styles.sidebarLink} ${activeSection === 'authentication' ? styles.active : ''}`}><Lock size={16} /> Authentication</a>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarTitle}>Core API</div>
                        <a href="#virtual-accounts" onClick={(e) => { e.preventDefault(); scrollToSection('virtual-accounts'); }} className={`${styles.sidebarLink} ${activeSection === 'virtual-accounts' ? styles.active : ''}`}><Wallet size={16} /> Virtual Accounts</a>
                        <a href="#checkout" onClick={(e) => { e.preventDefault(); scrollToSection('checkout'); }} className={`${styles.sidebarLink} ${activeSection === 'checkout' ? styles.active : ''}`}><ShoppingCart size={16} /> Checkout API</a>
                        <a href="#payouts" onClick={(e) => { e.preventDefault(); scrollToSection('payouts'); }} className={`${styles.sidebarLink} ${activeSection === 'payouts' ? styles.active : ''}`}><Banknote size={16} /> Payout API</a>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarTitle}>Integration</div>
                        <a href="#webhooks" onClick={(e) => { e.preventDefault(); scrollToSection('webhooks'); }} className={`${styles.sidebarLink} ${activeSection === 'webhooks' ? styles.active : ''}`}><Webhook size={16} /> Webhooks</a>
                        <a href="#verify" onClick={(e) => { e.preventDefault(); scrollToSection('verify'); }} className={`${styles.sidebarLink} ${activeSection === 'verify' ? styles.active : ''}`}><CheckCircle size={16} /> Transaction Verification</a>
                    </div>
                </aside>

                <div className={styles.mainWrapper}>
                    <div className={styles.topBar}>
                        <div className={styles.searchWrapper}>
                            <Search size={18} className={styles.searchIcon} />
                            <input type="text" placeholder="Search documentation..." className={styles.searchInput} />
                        </div>
                        <div className={styles.authButtons}>
                            <Link to="/dashboard" className={styles.loginBtn}>Login</Link>
                            <Link to="/dashboard" className={styles.signupBtn}>Create Account</Link>
                        </div>
                    </div>

                    <main className={styles.content}>
                        <section id="getting-started" className={styles.section}>
                            <h2>Getting Started</h2>
                            <p>Get up and running with Payrant API in just a few minutes.</p>

                            <h3>Base URL</h3>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="bash">https://api-core.payrant.com/</CodeBlock>
                            </div>

                            <h3>Steps to Integrate</h3>
                            <ol>
                                <li>Sign up for a Payrant account</li>
                                <li>Navigate to the API section in your dashboard</li>
                                <li>Generate a new API key</li>
                                <li>Copy and securely store your API key</li>
                            </ol>
                        </section>

                        <section id="authentication" className={styles.section}>
                            <h2>Authentication</h2>
                            <p>All API requests require authentication using a Bearer token in the Authorization header.</p>

                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>HTTP Header</div>
                                <CodeBlock language="http">Authorization: Bearer YOUR_API_KEY</CodeBlock>
                            </div>

                            <div className={styles.alert + ' ' + styles.alertWarning}>
                                <strong>Security Warning:</strong> Keep your API keys secure and never expose them in client-side code or public repositories.
                            </div>
                        </section>

                        <section id="virtual-accounts" className={styles.section}>
                            <h2>Virtual Accounts API</h2>
                            <p>Create dedicated virtual accounts for your customers to receive bank transfers.</p>

                            <h3>Create Virtual Account</h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span className={`${styles.methodBadge} ${styles.methodPost}`}>POST</span>
                                    <span className={styles.endpoint}>/palmpay/</span>
                                </div>
                                <CodeBlock language="json">{`{
    "documentType": "nin",
    "documentNumber": "8149999933",
    "virtualAccountName": "test_user",
    "customerName": "Test User",
    "email": "test@example.com",
    "accountReference": "86fe77b5fe0c"
}`}</CodeBlock>
                            </div>

                            <p><strong>Response (Success)</strong></p>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="json">{`{
    "status": "Enabled",
    "account_no": "6645962717",
    "virtualAccountName": "test_user(Payrant)",
    "virtualAccountNo": "6645962717",
    "identityType": "personal_nin",
    "licenseNumber": "8149999933",
    "customerName": "Test",
    "accountReference": "86fe77b5fe0c"
}`}</CodeBlock>
                            </div>
                        </section>

                        <section id="checkout" className={styles.section}>
                            <h2>Checkout API</h2>
                            <p>Initialize a checkout transaction for web or mobile payments.</p>

                            <h3>Initialize Transaction</h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span className={`${styles.methodBadge} ${styles.methodPost}`}>POST</span>
                                    <span className={styles.endpoint}>/transaction/api.php?action=initialize</span>
                                </div>
                                <CodeBlock language="json">{`{
    "email": "customer@example.com",
    "amount": 100,
    "callback_url": "https://yoursite.com/callback",
    "webhook_url": "https://yoursite.com/webhook",
    "metadata": {
        "order_id": "ORDER_123",
        "customer_name": "John Doe"
    }
}`}</CodeBlock>
                            </div>

                            <p><strong>Response (Success)</strong></p>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="json">{`{
    "status": true,
    "message": "Transaction initialized successfully",
    "data": {
        "reference": "TXN_1756911546_77_015d87df",
        "checkout_url": "https://payrant.com/api-core/transaction/...",
        "amount": 100,
        "email": "customer@example.com",
        "account_number": "6680456766",
        "bank_name": "PalmPay",
        "status": "pending"
    }
}`}</CodeBlock>
                            </div>
                        </section>

                        <section id="verify" className={styles.section}>
                            <h2>Verify Transaction</h2>
                            <p>Check the payment status of a checkout transaction.</p>

                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span className={`${styles.methodBadge} ${styles.methodGet}`}>GET</span>
                                    <span className={styles.endpoint}>/transaction/api.php?action=verify&reference={'{reference}'}</span>
                                </div>
                            </div>

                            <p><strong>Response (Success)</strong></p>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="json">{`{
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
}`}</CodeBlock>
                            </div>
                        </section>

                        <section id="payouts" className={styles.section}>
                            <h2>Payout API</h2>
                            <p>Initiate transfers to any Nigerian bank account.</p>

                            <h3>Bank Transfer</h3>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeHeader}>
                                    <span className={`${styles.methodBadge} ${styles.methodPost}`}>POST</span>
                                    <span className={styles.endpoint}>/payout/transfer</span>
                                </div>
                                <CodeBlock language="json">{`{
    "bank_code": "090405",
    "account_number": "8100000014",
    "account_name": "Zainab Umar",
    "amount": 20.00,
    "description": "Payment for services",
    "notify_url": "https://myapp.com/webhook/transfer"
}`}</CodeBlock>
                            </div>
                        </section>

                        <section id="webhooks" className={styles.section}>
                            <h2>Webhooks</h2>
                            <p>Receive real-time notifications about payment events. Payrant sends HTTP POST requests to your configured URL.</p>

                            <h3>Webhook Verification (PHP)</h3>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="php">{`// Verify webhook signature
$webhook_secret = 'YOUR_WEBHOOK_SECRET';
$received_signature = $_SERVER['HTTP_X_PAYRANT_SIGNATURE'];
$payload = file_get_contents('php://input');

$expected_signature = hash_hmac('sha256', $payload, $webhook_secret);

if (!hash_equals($expected_signature, $received_signature)) {
    http_response_code(401);
    die('Invalid signature');
}

// Process valid webhook
$data = json_decode($payload, true);
http_response_code(200);`}</CodeBlock>
                            </div>

                            <h3>Sample Payload (Success)</h3>
                            <div className={styles.codeBlock}>
                                <CodeBlock language="json">{`{
    "status": "success",
    "transaction": {
        "reference": "MI1944373825147994112",
        "amount": 300,
        "timestamp": "2025-07-13 12:30:19",
        "account_details": {
            "account_number": "6699479580",
            "account_name": "Chib@2025(Payrant)"
        }
    }
}`}</CodeBlock>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Documentation;

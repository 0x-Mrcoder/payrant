import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Book, Zap, Shield, Terminal, Copy, Check, ExternalLink, PlayCircle, ShieldCheck, Activity, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import styles from './Developers.module.css';

const Developers = () => {
    const [activeTab, setActiveTab] = useState('javascript');
    const [copiedCode, setCopiedCode] = useState(null);

    const codeExamples = {
        javascript: {
            checkout: {
                raw: `// Initialize Payrant Checkout
import Payrant from '@payrant/checkout-js';

const payrant = new Payrant('pk_live_your_public_key');

// Create a checkout session
const checkout = await payrant.checkout.create({
  amount: 50000, // Amount in kobo (₦500)
  email: 'customer@example.com',
  currency: 'NGN',
  reference: 'TXN_' + Date.now(),
  callback_url: 'https://yoursite.com/verify',
  metadata: {
    customer_name: 'John Doe',
    order_id: 'ORD123'
  }
});

// Redirect to checkout
window.location.href = checkout.authorization_url;`,
                display: (
                    <>
                        <span className={styles.comment}>// Initialize Payrant Checkout</span>{'\n'}
                        <span className={styles.keyword}>import</span> Payrant <span className={styles.control}>from</span> <span className={styles.string}>'@payrant/checkout-js'</span>;{'\n'}
                        {'\n'}
                        <span className={styles.keyword}>const</span> payrant = <span className={styles.keyword}>new</span> <span className={styles.class}>Payrant</span>(<span className={styles.string}>'pk_live_your_public_key'</span>);{'\n'}
                        {'\n'}
                        <span className={styles.comment}>// Create a checkout session</span>{'\n'}
                        <span className={styles.keyword}>const</span> checkout = <span className={styles.control}>await</span> payrant.checkout.<span className={styles.function}>create</span>({'{'}{'\n'}
                        {'  '}<span className={styles.variable}>amount</span>: <span className={styles.number}>50000</span>, <span className={styles.comment}>// Amount in kobo (₦500)</span>{'\n'}
                        {'  '}<span className={styles.variable}>email</span>: <span className={styles.string}>'customer@example.com'</span>,{'\n'}
                        {'  '}<span className={styles.variable}>currency</span>: <span className={styles.string}>'NGN'</span>,{'\n'}
                        {'  '}<span className={styles.variable}>reference</span>: <span className={styles.string}>'TXN_'</span> + <span className={styles.class}>Date</span>.<span className={styles.function}>now</span>(),{'\n'}
                        {'  '}<span className={styles.variable}>callback_url</span>: <span className={styles.string}>'https://yoursite.com/verify'</span>,{'\n'}
                        {'  '}<span className={styles.variable}>metadata</span>: {'{'}{'\n'}
                        {'    '}<span className={styles.variable}>customer_name</span>: <span className={styles.string}>'John Doe'</span>,{'\n'}
                        {'    '}<span className={styles.variable}>order_id</span>: <span className={styles.string}>'ORD123'</span>{'\n'}
                        {'  }'}{'\n'}
                        {'}'});{'\n'}
                        {'\n'}
                        <span className={styles.comment}>// Redirect to checkout</span>{'\n'}
                        <span className={styles.variable}>window</span>.<span className={styles.variable}>location</span>.<span className={styles.variable}>href</span> = checkout.<span className={styles.variable}>authorization_url</span>;
                    </>
                )
            },
            virtualAccount: `// Create a Virtual Account
const account = await payrant.virtualAccounts.create({
  email: 'customer@example.com',
  first_name: 'John',
  last_name: 'Doe',
  phone: '08012345678',
  preferred_bank: 'wema-bank', // Optional
  bvn: '12345678901' // Required for permanent accounts
});

console.log('Account Number:', account.account_number);
console.log('Bank Name:', account.bank_name);`,
            webhook: `// Verify webhook signature
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha512', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return hash === signature;
}

// Handle webhook event
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-payrant-signature'];
  
  if (!verifyWebhook(req.body, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = req.body;
  
  switch(event.event) {
    case 'charge.success':
      // Handle successful payment
      console.log('Payment successful:', event.data);
      break;
    case 'transfer.success':
      // Handle successful transfer
      console.log('Transfer successful:', event.data);
      break;
  }
  
  res.status(200).send('OK');
});`
        },
        php: {
            checkout: {
                raw: `<?php
// Initialize Payrant
require 'vendor/autoload.php';

use Payrant\\Payrant;

$payrant = new Payrant('sk_live_your_secret_key');

// Create a checkout session
$checkout = $payrant->checkout->create([
    'amount' => 50000, // Amount in kobo (₦500)
    'email' => 'customer@example.com',
    'currency' => 'NGN',
    'reference' => 'TXN_' . time(),
    'callback_url' => 'https://yoursite.com/verify',
    'metadata' => [
        'customer_name' => 'John Doe',
        'order_id' => 'ORD123'
    ]
]);

// Redirect to checkout
header('Location: ' . $checkout->authorization_url);
exit();
?>`,
                display: (
                    <>
                        <span className={styles.keyword}>&lt;?php</span>{'\n'}
                        <span className={styles.comment}>// Initialize Payrant</span>{'\n'}
                        <span className={styles.control}>require</span> <span className={styles.string}>'vendor/autoload.php'</span>;{'\n'}
                        {'\n'}
                        <span className={styles.control}>use</span> <span className={styles.class}>Payrant\Payrant</span>;{'\n'}
                        {'\n'}
                        <span className={styles.variable}>$payrant</span> = <span className={styles.keyword}>new</span> <span className={styles.class}>Payrant</span>(<span className={styles.string}>'sk_live_your_secret_key'</span>);{'\n'}
                        {'\n'}
                        <span className={styles.comment}>// Create a checkout session</span>{'\n'}
                        <span className={styles.variable}>$checkout</span> = <span className={styles.variable}>$payrant</span>-&gt;checkout-&gt;<span className={styles.function}>create</span>([{'\n'}
                        {'    '}<span className={styles.string}>'amount'</span> =&gt; <span className={styles.number}>50000</span>,{'\n'}
                        {'    '}<span className={styles.string}>'email'</span> =&gt; <span className={styles.string}>'customer@example.com'</span>,{'\n'}
                        {'    '}<span className={styles.string}>'currency'</span> =&gt; <span className={styles.string}>'NGN'</span>,{'\n'}
                        {'    '}<span className={styles.string}>'reference'</span> =&gt; <span className={styles.string}>'TXN_'</span> . <span className={styles.function}>time</span>(),{'\n'}
                        {'    '}<span className={styles.string}>'callback_url'</span> =&gt; <span className={styles.string}>'https://yoursite.com/verify'</span>{'\n'}
                        ]);{'\n'}
                        {'\n'}
                        <span className={styles.function}>header</span>(<span className={styles.string}>'Location: '</span> . <span className={styles.variable}>$checkout</span>-&gt;<span className={styles.variable}>authorization_url</span>);
                    </>
                )
            },
            virtualAccount: `<?php
// Create a Virtual Account
$account = $payrant->virtualAccounts->create([
    'email' => 'customer@example.com',
    'first_name' => 'John',
    'last_name' => 'Doe',
    'phone' => '08012345678',
    'preferred_bank' => 'wema-bank',
    'bvn' => '12345678901'
]);

echo "Account Number: " . $account->account_number;
echo "Bank Name: " . $account->bank_name;
?>`,
            webhook: `<?php
// Verify webhook signature
function verifyWebhook($payload, $signature, $secret) {
    $hash = hash_hmac('sha512', $payload, $secret);
    return hash_equals($hash, $signature);
}

// Handle webhook event
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_PAYRANT_SIGNATURE'];

if (!verifyWebhook($payload, $signature, getenv('WEBHOOK_SECRET'))) {
    http_response_code(401);
    exit('Invalid signature');
}

$event = json_decode($payload);

switch($event->event) {
    case 'charge.success':
        // Handle successful payment
        error_log('Payment successful: ' . json_encode($event->data));
        break;
    case 'transfer.success':
        // Handle successful transfer
        error_log('Transfer successful: ' . json_encode($event->data));
        break;
}

http_response_code(200);
echo 'OK';
?>`
        },
        python: {
            checkout: {
                raw: `# Initialize Payrant
from payrant import Payrant
import time

payrant = Payrant('sk_live_your_secret_key')

# Create a checkout session
checkout = payrant.checkout.create(
    amount=50000,  # Amount in kobo (₦500)
    email='customer@example.com',
    currency='NGN',
    reference=f'TXN_{int(time.time())}',
    callback_url='https://yoursite.com/verify',
    metadata={
        'customer_name': 'John Doe',
        'order_id': 'ORD123'
    }
)

# Redirect to checkout
print(f"Redirect to: {checkout.authorization_url}")`,
                display: (
                    <>
                        <span className={styles.control}>import</span> payrant{'\n'}
                        {'\n'}
                        <span className={styles.comment}># Initialize SDK</span>{'\n'}
                        client = payrant.<span className={styles.class}>Client</span>(<span className={styles.string}>'sk_live_your_secret_key'</span>){'\n'}
                        {'\n'}
                        <span className={styles.comment}># Create checkout session</span>{'\n'}
                        response = client.checkout.<span className={styles.function}>create</span>({'\n'}
                        {'    '}<span className={styles.variable}>amount</span>=<span className={styles.number}>50000</span>,{'\n'}
                        {'    '}<span className={styles.variable}>email</span>=<span className={styles.string}>'customer@example.com'</span>,{'\n'}
                        {'    '}<span className={styles.variable}>currency</span>=<span className={styles.string}>'NGN'</span>,{'\n'}
                        {'    '}<span className={styles.variable}>reference</span>=<span className={styles.string}>'TXN_123456789'</span>,{'\n'}
                        {'    '}<span className={styles.variable}>callback_url</span>=<span className={styles.string}>'https://yoursite.com/verify'</span>{'\n'}
                        ){'\n'}
                        {'\n'}
                        <span className={styles.function}>print</span>(f<span className={styles.string}>"Payment URL: {'{response.authorization_url}'}"</span>)
                    </>
                )
            }
            ,
            virtualAccount: `# Create a Virtual Account
account = payrant.virtual_accounts.create(
    email='customer@example.com',
    first_name='John',
    last_name='Doe',
    phone='08012345678',
    preferred_bank='wema-bank',
    bvn='12345678901'
)

print(f"Account Number: {account.account_number}")
print(f"Bank Name: {account.bank_name}")`,
            webhook: `# Verify webhook signature
import hmac
import hashlib
import json
from flask import Flask, request

app = Flask(__name__)

def verify_webhook(payload, signature, secret):
    hash_obj = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha512
    )
    return hmac.compare_digest(hash_obj.hexdigest(), signature)

@app.route('/webhook', methods=['POST'])
def webhook():
    payload = request.get_data(as_text=True)
    signature = request.headers.get('X-Payrant-Signature')
    
    if not verify_webhook(payload, signature, os.getenv('WEBHOOK_SECRET')):
        return 'Invalid signature', 401
    
    event = json.loads(payload)
    
    if event['event'] == 'charge.success':
        # Handle successful payment
        print(f"Payment successful: {event['data']}")
    elif event['event'] == 'transfer.success':
        # Handle successful transfer
        print(f"Transfer successful: {event['data']}")
    
    return 'OK', 200`
        }
    };

    const copyToClipboard = (code, id) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <>
            <Navbar />
            <div className={styles.developers}>
                <SEO
                    title="Developer Documentation - Payrant API Reference & Integration Guides | Payrant"
                    description="Complete API documentation for Payrant payment gateway. Integrate virtual accounts, checkout, and webhooks with code examples in JavaScript, PHP, and Python."
                    keywords="payrant api, payment api documentation, virtual account api, webhook integration, payment gateway sdk, developer docs, api reference"
                    url="https://payrant.com/developers"
                />

                {/* Hero Section */}
                <header className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1>Build on Payrant’s <span className={styles.gradientText}>secure fintech infrastructure.</span></h1>
                        <p>Robust APIs for seamless payments, transfers, and wallet management. Integrate instantly and scale with confidence.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/documentation" className={styles.primaryBtn}>
                                API Documentation
                            </Link>
                            <a href="mailto:dev@payrant.com" className={styles.secondaryBtn}>
                                Contact Dev Team
                            </a>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.windowFrame}>
                            <div className={styles.windowHeader}>
                                <div className={styles.windowDots}>
                                    <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                                    <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                                    <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                                </div>
                                <div className={styles.windowTitle}>POST /v1/payments/initialize</div>
                            </div>
                            <div className={styles.windowBody}>
                                <pre className={styles.codeContent}>
                                    <code>
                                        <span style={{ color: '#C678DD' }}>const</span> <span style={{ color: '#E5C07B' }}>response</span> = <span style={{ color: '#C678DD' }}>await</span> <span style={{ color: '#E06C75' }}>payrant</span>.<span style={{ color: '#61AFEF' }}>initializePayment</span>({'{'}
                                        {'\n'}  <span style={{ color: '#D19A66' }}>amount</span>: <span style={{ color: '#98C379' }}>500000</span>, <span style={{ color: '#5C6370' }}>// ₦5,000.00</span>
                                        {'\n'}  <span style={{ color: '#D19A66' }}>email</span>: <span style={{ color: '#98C379' }}>'customer@example.com'</span>,
                                        {'\n'}  <span style={{ color: '#D19A66' }}>currency</span>: <span style={{ color: '#98C379' }}>'NGN'</span>,
                                        {'\n'}  <span style={{ color: '#D19A66' }}>channels</span>: [<span style={{ color: '#98C379' }}>'card'</span>, <span style={{ color: '#98C379' }}>'bank_transfer'</span>],
                                        {'\n'}  <span style={{ color: '#D19A66' }}>metadata</span>: {'{'}
                                        {'\n'}    <span style={{ color: '#D19A66' }}>order_id</span>: <span style={{ color: '#98C379' }}>'KP-8932-X'</span>
                                        {'\n'}  {'}'}
                                        {'\n'}{'}'});
                                        {'\n'}
                                        {'\n'}<span style={{ color: '#5C6370' }}>// Returns payment authorization URL</span>
                                        {'\n'}<span style={{ color: '#E06C75' }}>console</span>.<span style={{ color: '#61AFEF' }}>log</span>(<span style={{ color: '#E06C75' }}>response</span>.<span style={{ color: '#E06C75' }}>data</span>.<span style={{ color: '#E06C75' }}>authorization_url</span>);
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Quick Start */}
                <section id="quick-start" className={styles.quickStart}>
                    <div className={styles.container}>
                        <h2>Quick Start</h2>
                        <p className={styles.subtitle}>Get up and running in minutes</p>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <h3>Get Your API Keys</h3>
                                <p>Sign up and get your test API keys from your dashboard</p>
                                <div className={styles.codeBlock}>
                                    <code>pk_test_your_public_key</code>
                                    <code>sk_test_your_secret_key</code>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3>Install SDK</h3>
                                <p>Choose your preferred language and install our SDK</p>
                                <div className={styles.installCommands}>
                                    <div className={styles.command}>
                                        <span className={styles.lang}>Node.js</span>
                                        <code>npm install @payrant/checkout-js</code>
                                    </div>
                                    <div className={styles.command}>
                                        <span className={styles.lang}>PHP</span>
                                        <code>composer require payrant/payrant-php</code>
                                    </div>
                                    <div className={styles.command}>
                                        <span className={styles.lang}>Python</span>
                                        <code>pip install payrant</code>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3>Make Your First Request</h3>
                                <p>Initialize a checkout session and start accepting payments</p>
                                <a href="#code-examples" className={styles.linkBtn}>
                                    View Code Examples →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section id="code-examples" className={styles.codeExamples}>
                    <div className={styles.container}>
                        <h2>Code Examples</h2>
                        <p className={styles.subtitle}>Interactive examples in your favorite language</p>

                        <div className={styles.editorContainer}>
                            <div className={styles.editorWindow}>
                                <div className={styles.editorHeader}>
                                    <div className={styles.windowDots}>
                                        <div className={styles.dot} style={{ background: '#FF5F56' }}></div>
                                        <div className={styles.dot} style={{ background: '#FFBD2E' }}></div>
                                        <div className={styles.dot} style={{ background: '#27C93F' }}></div>
                                    </div>
                                    <div className={styles.editorTabs}>
                                        <button
                                            className={`${styles.editorTab} ${activeTab === 'javascript' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('javascript')}
                                        >
                                            <span className={styles.tabIcon}>JS</span> checkout.js
                                        </button>
                                        <button
                                            className={`${styles.editorTab} ${activeTab === 'php' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('php')}
                                        >
                                            <span className={styles.tabIcon}>PHP</span> checkout.php
                                        </button>
                                        <button
                                            className={`${styles.editorTab} ${activeTab === 'python' ? styles.activeTab : ''}`}
                                            onClick={() => setActiveTab('python')}
                                        >
                                            <span className={styles.tabIcon}>PY</span> checkout.py
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.editorBody}>
                                    <div className={styles.editorSidebar}>
                                        <div className={styles.lineNumber}>1</div>
                                        <div className={styles.lineNumber}>2</div>
                                        <div className={styles.lineNumber}>3</div>
                                        <div className={styles.lineNumber}>4</div>
                                        <div className={styles.lineNumber}>5</div>
                                        <div className={styles.lineNumber}>6</div>
                                        <div className={styles.lineNumber}>7</div>
                                        <div className={styles.lineNumber}>8</div>
                                        <div className={styles.lineNumber}>9</div>
                                        <div className={styles.lineNumber}>10</div>
                                        <div className={styles.lineNumber}>11</div>
                                        <div className={styles.lineNumber}>12</div>
                                        <div className={styles.lineNumber}>13</div>
                                        <div className={styles.lineNumber}>14</div>
                                        <div className={styles.lineNumber}>15</div>
                                    </div>
                                    <div className={styles.codeArea}>
                                        <button
                                            className={styles.copyButton}
                                            onClick={() => copyToClipboard(codeExamples[activeTab].checkout.raw, 'checkout')}
                                        >
                                            {copiedCode === 'checkout' ? <Check size={14} /> : <Copy size={14} />}
                                            {copiedCode === 'checkout' ? 'Copied' : 'Copy'}
                                        </button>
                                        <pre>
                                            <code>{codeExamples[activeTab].checkout.display}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SDKs & Tools */}
                <section className={styles.sdks}>
                    <div className={styles.container}>
                        <h2>SDKs & Libraries</h2>
                        <p className={styles.subtitle}>Official libraries for your favorite platforms</p>

                        <div className={styles.sdkGrid}>
                            <a href="https://github.com/payrant/payrant-js" className={styles.sdkCard} target="_blank" rel="noopener noreferrer">
                                <h3>JavaScript / Node.js</h3>
                                <p>@payrant/checkout-js</p>
                                <span className={styles.version}>v2.1.0</span>
                            </a>
                            <a href="https://github.com/payrant/payrant-php" className={styles.sdkCard} target="_blank" rel="noopener noreferrer">
                                <h3>PHP</h3>
                                <p>payrant/payrant-php</p>
                                <span className={styles.version}>v1.5.2</span>
                            </a>
                            <a href="https://github.com/payrant/payrant-python" className={styles.sdkCard} target="_blank" rel="noopener noreferrer">
                                <h3>Python</h3>
                                <p>payrant</p>
                                <span className={styles.version}>v1.3.0</span>
                            </a>
                            <a href="https://github.com/payrant/payrant-ruby" className={styles.sdkCard} target="_blank" rel="noopener noreferrer">
                                <h3>Ruby</h3>
                                <p>payrant-ruby</p>
                                <span className={styles.version}>v1.2.0</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Support CTA */}
                <section className={styles.supportCta}>
                    <div className={styles.container}>
                        <h2>Need Help?</h2>
                        <p>Our developer support team is here to help you integrate</p>
                        <div className={styles.ctaActions}>
                            <Link to="/support" className={styles.primaryBtn}>Contact Support</Link>
                            <Link to="/documentation" className={styles.secondaryBtn}>View Full Documentation</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Developers;

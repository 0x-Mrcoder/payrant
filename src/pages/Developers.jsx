import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Activity, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Developers.module.css';

const Developers = () => {
    const codeSnippet = `const response = await payrant.initializePayment({
  amount: 500000, // ₦5,000.00
  email: 'customer@example.com',
  currency: 'NGN',
  channels: ['card', 'bank_transfer'],
  metadata: {
    order_id: 'KP-8932-X'
  }
});

// Returns payment authorization URL
console.log(response.data.authorization_url);`;

    return (
        <div className={styles.container}>
            <Navbar />

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

            <section className={styles.featuresSection}>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <Zap size={28} color="#755AE2" />
                        </div>
                        <h3>Instant Integration</h3>
                        <p>Get up and running in minutes with our easy-to-use SDKs and comprehensive documentation.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <ShieldCheck size={28} color="#755AE2" />
                        </div>
                        <h3>Bank-Grade Security</h3>
                        <p>PCI-DSS Level 1 compliant infrastructure ensures your customer data is always safe.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <Activity size={28} color="#755AE2" />
                        </div>
                        <h3>Real-time Webhooks</h3>
                        <p>Stay updated with instant notifications for payments, transfers, and account events.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <BarChart3 size={28} color="#755AE2" />
                        </div>
                        <h3>Detailed Analytics</h3>
                        <p>Monitor your business performance with our powerful dashboard and reporting tools.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Developers;

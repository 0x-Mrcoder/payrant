import { Link, useLocation } from 'react-router-dom';

import { Shield, Globe, Smartphone, Code2, Zap, Layout, ArrowRight, CheckCircle2, Check, Users, Briefcase, Mail, Phone, MessageCircle, Headphones, CreditCard, Landmark, Wallet, QrCode, Hash, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './LandingPage.module.css';
import AnimatedSection from '../../components/AnimatedSection';
import PartnerStrip from '../../components/PartnerStrip';
import { useState, useEffect } from 'react';
import CodeBlock from '../../components/CodeBlock';
import FAQAccordion from '../../components/FAQAccordion';
import SEO from '../../components/SEO';
import MeshBackground from '../../components/MeshBackground';

// Assets
const MOCKUP = '/assets/dashboard_mockup_raw_1770133757174.png';
const IMG_GLOBAL = '/assets/payrant_global_payments_cartoon_1770133800270.png';
const IMG_SECURITY = '/assets/payrant_security_shield_cartoon_1770133814394.png';
const IMG_DEVICES = '/assets/payrant_devices_cartoon_1770133830129.png';

const FAQ_ITEMS = [
    {
        question: "How quickly can I start accepting payments?",
        answer: "You can create an account and start accepting payments in less than 15 minutes. Our verification process is automated and fast."
    },
    {
        question: "When do I get my money?",
        answer: "Settlements are instant for virtual account payments. Card payments are settled the next day (T+1) directly to your bank account."
    },
    {
        question: "Do I need a registered business?",
        answer: "No, you can start as an individual offering freelance services (\"Starter\" tier) and upgrade to a registered business account (\"Business\" tier) later."
    },
    {
        question: "What banks do you support?",
        answer: "We support payouts to all commercial banks and mobile money operators in Nigeria, Ghana, Kenya, and South Africa."
    },
    {
        question: "Is Payrant secure?",
        answer: "Yes. We are PCI-DSS Level 1 certified, ISO 27001 compliant, and licensed by the Central Bank. Your funds are insured."
    },
    {
        question: "Can I use Payrant for international payments?",
        answer: "Yes! You can accept USD, GBP, and EUR card payments from customers anywhere in the world."
    }
];

const LandingPage = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const initialProduct = params.get('product') === 'personal' ? 'personal' : 'business';

    // If no param is present, default to 'business'
    const [productType, setProductType] = useState(initialProduct);

    useEffect(() => {
        const productParam = params.get('product');
        if (productParam === 'personal' || productParam === 'business') {
            setProductType(productParam);
        }
    }, [search]);

    return (
        <div className={styles.landingContainer}>
            <SEO
                title="Virtual Account Payment Gateway | Secure Bank Payments in Nigeria"
                description="Payrant offers secure virtual account payment gateway for Nigerian businesses. Accept bank payments without cards, reduce failed transactions, and increase conversion rates with our advanced payment solution."
                keywords="virtual account, payment gateway, bank payments, Nigeria, online payments, fintech, payment processing, secure payments, API integration, payment solution"
            />
            <Navbar onProductChange={setProductType} />

            {/* Dynamic Hero Section */}
            {productType === 'business' ? (
                <header className={styles.hero}>
                    <div className={`${styles.heroContent} ${styles.animateFadeUp}`}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> Trusted by 12,000+ African Businesses
                        </div>
                        <h1 className={styles.headline}>
                            <span className={styles.headlineLight}>The Payment Gateway</span><br />
                            <span className={styles.headlineBold}>Built for Africa.</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Accept payments with instant virtual accounts. Get paid directly to your bank with zero card fees and 99.9% uptime. Built for African businesses.
                        </p>
                        <div className={styles.heroButtons}>
                            <a href="https://app.payrant.com/auth-login.php" className={styles.primaryBtn}>
                                Get Started
                            </a>
                            <button className={styles.secondaryBtn}>Contact Us</button>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.mockupFrame}>
                            <img src={MOCKUP} alt="Payrant Merchant Dashboard" className={styles.mockupImg} />
                        </div>
                    </div>
                </header>
            ) : (
                <header className={`${styles.hero} ${styles.personalHero}`}>
                    <div className={`${styles.heroContent} ${styles.animateFadeUp}`}>
                        <div className={`${styles.badge} ${styles.personalBadge}`}>
                            <span className={styles.badgeDot}></span> Coming Soon
                        </div>
                        <h1 className={styles.headline}>Your Money,<br />
                            <span className={styles.gradientText}>Simplified.</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Send, receive, and manage your money with ease. Zero fees on transfers,
                            instant settlements, and a beautiful card for everyday spending.
                        </p>
                        <div className={styles.heroButtons}>
                            <a href="https://app.payrant.com/auth-register.php" className={styles.primaryBtn}>
                                Open Free Account <ArrowRight size={18} />
                            </a>
                            <button className={styles.secondaryBtn}>Learn More</button>
                        </div>

                        {/* Personal Hero Features */}
                        <div className={styles.personalFeatures}>
                            <div className={styles.personalFeatureItem}>
                                <CreditCard size={20} color="#755AE2" />
                                <span>Free Virtual Card</span>
                            </div>
                            <div className={styles.personalFeatureItem}>
                                <TrendingUp size={20} color="#755AE2" />
                                <span>Save & Earn Interest</span>
                            </div>
                            {/* <div className={styles.personalFeatureItem}>
                                <Shield size={20} color="#755AE2" />
                                <span>Bank-Level Security</span>
                            </div> */}
                        </div>
                    </div>

                    <div className={`${styles.heroVisual} ${styles.animateSlideIn}`}>
                        <img src="/assets/payrant_light_premium_mockup.png" alt="Payrant Mobile App" className={styles.personalHeroImg} />
                        <div className={styles.glow}></div>
                    </div>
                </header>
            )
            }

            {/* Trust / Stats Section */}
            <AnimatedSection className={styles.statsSection} animation="scale" as="section">
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <h4>2M+</h4>
                        <p>Transactions Processed</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>99.9%</h4>
                        <p>Uptime SLA</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>500M+</h4>
                        <p>Processed Annually</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>12k+</h4>
                        <p>Active Merchants</p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Partner Strip */}
            <PartnerStrip />

            {/* Developer Section (Code Block) */}
            <AnimatedSection className={styles.developerSection} id="developers" animation="slide" as="section">
                <div className={styles.devContent}>
                    <div className={styles.devText}>
                        <div className={styles.iconCircle}>
                            <Code2 size={24} color="#755AE2" />
                        </div>
                        <h2>Built for Developers</h2>
                        <p>Integrate our unified API in minutes, not weeks. Comprehensive documentation,
                            webhooks, and client libraries for every stack.</p>
                        <ul className={styles.devList}>
                            <li><CheckCircle2 size={16} /> RESTful API Architecture</li>
                            <li><CheckCircle2 size={16} /> Real-time Webhooks</li>
                            <li><CheckCircle2 size={16} /> Sandbox Environment</li>
                        </ul>
                        <button className={styles.docsBtn}>Read Documentation</button>
                    </div>

                    <CodeBlock />
                </div>
            </AnimatedSection>

            {/* Features Section */}
            <AnimatedSection className={styles.features} id="features" animation="scale" as="section">
                <div className={styles.tabSwitcher}>
                    <button
                        className={`${styles.tabBtn} ${productType === 'personal' ? styles.tabActive : ''}`}
                        onClick={() => setProductType('personal')}
                    >
                        FOR INDIVIDUALS
                    </button>
                    <button
                        className={`${styles.tabBtn} ${productType === 'business' ? styles.tabActive : ''}`}
                        onClick={() => setProductType('business')}
                    >
                        FOR MERCHANTS
                    </button>
                </div>

                <div className={styles.featureGrid}>
                    {productType === 'business' ? (
                        <>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.blueIcon}`}>
                                    <Globe size={24} color="#1C55EC" />
                                </div>
                                <h3>Accept Payments</h3>
                                <p>Accept every way your customers want to pay, from cards to bank transfers and mobile money.</p>
                                <Link to="/commerce" className={styles.learnMore}>Learn More <ArrowRight size={16} /></Link>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.purpleIcon}`}>
                                    <Shield size={24} color="#755AE2" />
                                </div>
                                <h3>Fraud Protection</h3>
                                <p>AI-powered fraud detection that blocks bad actors while letting real customers through seamlessly.</p>
                                <Link to="/security" className={styles.learnMore}>Learn More <ArrowRight size={16} /></Link>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.greenIcon}`}>
                                    <Layout size={24} color="#05C168" />
                                </div>
                                <h3>Merchant Dashboard</h3>
                                <p>Track payments, manage disputes, and generate reports from one central command center.</p>
                                <a href="https://app.payrant.com/auth-login.php" className={styles.learnMore}>Learn More <ArrowRight size={16} /></a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.blueIcon}`}>
                                    <Briefcase size={24} color="#1C55EC" />
                                </div>
                                <h3>Send & Receive</h3>
                                <p>No waiting, no delays; your transfers land in seconds, anywhere across the continent.</p>
                                <button className={styles.learnMore}>Learn More <ArrowRight size={16} /></button>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.purpleIcon}`}>
                                    <QrCode size={24} color="#755AE2" />
                                </div>
                                <h3>QR Payments</h3>
                                <p>Make and accept payments anywhere using your unique QR code; no cash, no stress.</p>
                                <button className={styles.learnMore}>Learn More <ArrowRight size={16} /></button>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={`${styles.iconCircle} ${styles.greenIcon}`}>
                                    <CreditCard size={24} color="#05C168" />
                                </div>
                                <h3>Global Cards</h3>
                                <p>Shop and spend globally with your Payrant card, secure and always ready for you.</p>
                                <button className={styles.learnMore}>Learn More <ArrowRight size={16} /></button>
                            </div>
                        </>
                    )}
                </div>
            </AnimatedSection>

            {/* Payment Methods Showcase */}
            < AnimatedSection className={styles.paymentMethodsSection} animation="reveal" as="section" >
                <div className={styles.sectionHeader}>
                    <h2>Accept Every Payment Method</h2>
                    <p>Give your customers the flexibility to pay however they want</p>
                </div>

                <div className={styles.paymentMethodsContent}>
                    <div className={styles.paymentMethodsList}>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><CreditCard size={32} color="#755AE2" /></div>
                            <h4>Cards</h4>
                            <p>Visa, Mastercard, Verve</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><Landmark size={32} color="#755AE2" /></div>
                            <h4>Bank Transfer</h4>
                            <p>Direct bank payments</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><Smartphone size={32} color="#755AE2" /></div>
                            <h4>USSD</h4>
                            <p>Pay with any phone</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><Wallet size={32} color="#755AE2" /></div>
                            <h4>Mobile Money</h4>
                            <p>MTN, Airtel, Glo</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><QrCode size={32} color="#755AE2" /></div>
                            <h4>QR Codes</h4>
                            <p>Scan and pay</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.methodIcon}><Globe size={32} color="#755AE2" /></div>
                            <h4>International</h4>
                            <p>150+ countries</p>
                        </div>
                    </div>
                    <div className={styles.paymentMethodsVisual}>
                        <img src="/assets/payment_methods_showcase_1770141695039.png" alt="Payment Methods" />
                    </div>
                </div>
            </AnimatedSection >

            {/* How It Works */}
            < section className={styles.howItWorksSection} >
                <div className={styles.sectionHeader}>
                    <h2>Start accepting payments in minutes</h2>
                    <p>Simple integration, powerful results</p>
                </div>

                <div className={styles.stepsGrid}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Sign Up</h3>
                        <p>Create your account in under 2 minutes. No paperwork, just your business details.</p>
                    </div>
                    <div className={styles.stepArrow}>→</div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Integrate</h3>
                        <p>Add our API to your website or use our no-code checkout page. Takes 10 minutes.</p>
                    </div>
                    <div className={styles.stepArrow}>→</div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Get Paid</h3>
                        <p>Start accepting payments instantly. Money hits your account in real-time.</p>
                    </div>
                </div>
            </section >

            {/* Security Deep Dive */}
            < section className={styles.securitySection} >
                <div className={styles.securityContent}>
                    <div className={styles.securityText}>
                        <h2>Enterprise-Grade Security</h2>
                        <p className={styles.securityIntro}>
                            Your customers' data is protected by the same security standards used by global banks.
                        </p>
                        <div className={styles.securityFeatures}>
                            <div className={styles.securityFeature}>
                                <Shield size={24} color="#059669" />
                                <div>
                                    <h4>PCI DSS Level 1</h4>
                                    <p>Highest level of payment security certification</p>
                                </div>
                            </div>
                            <div className={styles.securityFeature}>
                                <Shield size={24} color="#059669" />
                                <div>
                                    <h4>3D Secure 2.0</h4>
                                    <p>Advanced fraud prevention for card payments</p>
                                </div>
                            </div>
                            <div className={styles.securityFeature}>
                                <Shield size={24} color="#059669" />
                                <div>
                                    <h4>AI Fraud Detection</h4>
                                    <p>Machine learning blocks suspicious transactions</p>
                                </div>
                            </div>
                            <div className={styles.securityFeature}>
                                <Shield size={24} color="#059669" />
                                <div>
                                    <h4>Data Encryption</h4>
                                    <p>End-to-end 256-bit SSL encryption</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.securityVisual}>
                        <img src="/assets/security_advanced_1770141710196.png" alt="Security Features" />
                    </div>
                </div>
            </section >

            {/* Case Studies */}
            < AnimatedSection className={styles.caseStudiesSection} animation="scale" as="section" >
                <div className={styles.sectionHeader}>
                    <h2>Powering Africa's fastest-growing businesses</h2>
                    <p>Real results from real merchants</p>
                </div>

                <div className={styles.caseStudiesGrid}>
                    <div className={styles.caseStudy}>
                        <div className={styles.caseStudyMetric}>
                            <h3>300%</h3>
                            <p>Revenue Growth</p>
                        </div>
                        <h4>TechHub Lagos</h4>
                        <p>"Switching to Payrant tripled our online revenue. The checkout is so smooth, we saw conversion rates jump from 2% to 8%."</p>
                        <div className={styles.caseStudyAuthor}>
                            <strong>Adebayo Ogunleye</strong> · CEO
                        </div>
                    </div>

                    <div className={styles.caseStudy}>
                        <div className={styles.caseStudyMetric}>
                            <h3>2M+</h3>
                            <p>Processed</p>
                        </div>
                        <h4>ShopNaija</h4>
                        <p>"Zero chargebacks in 6 months. The fraud detection is incredible. We've processed over $2M with complete peace of mind."</p>
                        <div className={styles.caseStudyAuthor}>
                            <strong>Chioma Nwosu</strong> · Founder
                        </div>
                    </div>

                    <div className={styles.caseStudy}>
                        <div className={styles.caseStudyMetric}>
                            <h3>48hrs</h3>
                            <p>Integration Time</p>
                        </div>
                        <h4>EduLearn Ghana</h4>
                        <p>"We went live in 2 days. The API documentation is the best I've seen. Support team is incredibly responsive."</p>
                        <div className={styles.caseStudyAuthor}>
                            <strong>Kwame Mensah</strong> · CTO
                        </div>
                    </div>
                </div>
            </AnimatedSection >

            {/* Mobile Dashboard Showcase */}
            < section className={styles.mobileAppSection} >
                <div className={styles.mobileAppContent}>
                    <div className={styles.mobileAppVisual}>
                        <img src="/assets/dashboard_mobile_showcase.png" alt="Payrant Mobile Dashboard" />
                    </div>
                    <div className={styles.mobileAppText}>
                        <h2>Monitor your business from anywhere</h2>
                        <p className={styles.mobileAppIntro}>
                            Access your payment dashboard on any device. Track real-time transactions, manage settlements, and handle disputes on the go.
                        </p>
                        <div className={styles.mobileAppFeatures}>
                            <div className={styles.mobileFeature}>
                                <CheckCircle2 size={20} color="#755AE2" />
                                <span>Real-time transaction monitoring</span>
                            </div>
                            <div className={styles.mobileFeature}>
                                <CheckCircle2 size={20} color="#755AE2" />
                                <span>Instant settlement status</span>
                            </div>
                            <div className={styles.mobileFeature}>
                                <CheckCircle2 size={20} color="#755AE2" />
                                <span>Dispute resolution center</span>
                            </div>
                            <div className={styles.mobileFeature}>
                                <CheckCircle2 size={20} color="#755AE2" />
                                <span>Biometric access control</span>
                            </div>
                        </div>
                        <div className={styles.heroButtons} style={{ marginTop: '24px', justifyContent: 'flex-start' }}>
                            <a href="https://app.payrant.com/auth-login.php" className={styles.primaryBtn}>
                                Access Dashboard <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section >



            {/* Testimonials Section */}
            < section className={styles.testimonialsSection} >
                <div className={styles.sectionHeader}>
                    <h2>Trusted by innovative businesses</h2>
                    <p>See what our merchants are saying</p>
                </div>

                <div className={styles.testimonialsGrid}>
                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialStars}>★★★★★</div>
                        <p className={styles.testimonialText}>
                            "Payrant transformed how we handle payments. The API is incredibly easy to integrate,
                            and settlements are instant. Our conversion rate increased by 40%."
                        </p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>AO</div>
                            <div>
                                <div className={styles.authorName}>Adebayo Ogunleye</div>
                                <div className={styles.authorTitle}>CEO, TechHub Lagos</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialStars}>★★★★★</div>
                        <p className={styles.testimonialText}>
                            "The fraud detection alone has saved us thousands. We've processed over $2M through
                            Payrant with zero chargebacks. Absolutely game-changing."
                        </p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>CN</div>
                            <div>
                                <div className={styles.authorName}>Chioma Nwosu</div>
                                <div className={styles.authorTitle}>Founder, ShopNaija</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialStars}>★★★★★</div>
                        <p className={styles.testimonialText}>
                            "Best payment gateway we've used in Africa. The dashboard is beautiful,
                            support is responsive, and the documentation is top-notch."
                        </p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>KM</div>
                            <div>
                                <div className={styles.authorName}>Kwame Mensah</div>
                                <div className={styles.authorTitle}>CTO, EduLearn Ghana</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Support Section */}
            < AnimatedSection className={styles.contactSection} id="contact" animation="reveal" as="section" >
                <div className={styles.contactContainer}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactBadge}>
                            <Headphones size={16} /> 24/7 Support
                        </div>
                        <h2>We're here to help you grow</h2>
                        <p>Our dedicated support team is available round the clock to help you with integration, payments, or any questions you might have.</p>

                        <div className={styles.contactMethods}>
                            <div className={styles.contactMethod}>
                                <div className={styles.methodIconWrapper}>
                                    <Mail size={24} color="#755AE2" />
                                </div>
                                <div>
                                    <h4>Email Support</h4>
                                    <p>hello@payrant.com</p>
                                </div>
                            </div>

                            <div className={styles.contactMethod}>
                                <div className={styles.methodIconWrapper}>
                                    <Phone size={24} color="#755AE2" />
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+234-8100000654</p>
                                </div>
                            </div>

                            <div className={styles.contactMethod}>
                                <div className={styles.methodIconWrapper}>
                                    <MessageCircle size={24} color="#755AE2" />
                                </div>
                                <div>
                                    <h4>Live Chat</h4>
                                    <p>Mon-Fri, 9AM-6PM WAT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactVisual}>
                        <img src="/assets/payrant_contact_support.png" alt="Payrant Support Team" className={styles.contactImg} />
                        <div className={styles.contactGlow}></div>
                    </div>
                </div>
            </AnimatedSection >

            {/* FAQ Section */}
            < section className={styles.faqSection} id="faq" >
                <div className={styles.sectionHeader}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about getting started with Payrant.</p>
                </div>
                <FAQAccordion items={FAQ_ITEMS} />
            </section >

            {/* CTA Section */}
            < section className={styles.ctaSection} >
                <div className={styles.ctaContent}>
                    <h2>Ready to scale your business?</h2>
                    <p>Join thousands of businesses accepting payments with Payrant today.</p>
                    <a href="https://app.payrant.com/auth-register.php" className={styles.ctaBigBtn}>Create Free Account</a>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default LandingPage;

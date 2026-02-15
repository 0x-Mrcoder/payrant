
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Shield, Users, Globe, TrendingUp, Award, Heart } from 'lucide-react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="About Payrant - Leading Virtual Account Payment Gateway in Nigeria"
                description="Learn about Payrant's mission to revolutionize payments in Nigeria. Discover our story, team, and commitment to providing secure virtual account payment solutions for businesses."
                keywords="about payrant, payment gateway company, fintech Nigeria, virtual account provider, payment solution company, Nigerian fintech"
                url="https://payrant.com/about"
            />
            <Navbar />

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroWrapper}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> About Payrant
                        </div>
                        <h1 className={styles.headline}>
                            Building the Future of<br />
                            <span className={styles.gradientText}> African Payments</span>
                        </h1>
                        <p className={styles.subheadline}>
                            We're on a mission to make payments seamless for every business in Africa. Our virtual account solution empowers merchants to accept payments effortlessly.
                        </p>
                    </div>
                    <div className={styles.heroVisual}>
                        <img src="/images/api_illustration.png" alt="Payrant Payment Infrastructure" className={styles.heroImage} />
                    </div>
                </div>
            </header>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.sectionHeader}>
                    <h2>Our Mission</h2>
                    <p>Empowering African businesses with world-class payment infrastructure</p>
                </div>

                <div className={styles.missionGrid}>
                    <div className={styles.missionCard}>
                        <div className={styles.missionIcon}>
                            <Globe size={32} />
                        </div>
                        <h3>Accessibility</h3>
                        <p>Making payment solutions accessible to businesses of all sizes across Africa</p>
                    </div>

                    <div className={styles.missionCard}>
                        <div className={styles.missionIcon}>
                            <Shield size={32} />
                        </div>
                        <h3>Security</h3>
                        <p>Bank-level security and compliance to protect every transaction</p>
                    </div>

                    <div className={styles.missionCard}>
                        <div className={styles.missionIcon}>
                            <TrendingUp size={32} />
                        </div>
                        <h3>Innovation</h3>
                        <p>Continuously improving our platform with cutting-edge technology</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>12,000+</div>
                        <div className={styles.statLabel}>Active Businesses</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>₦2.5B+</div>
                        <div className={styles.statLabel}>Processed Monthly</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>99.9%</div>
                        <div className={styles.statLabel}>Uptime</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>24/7</div>
                        <div className={styles.statLabel}>Support</div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.sectionHeader}>
                    <h2>Our Values</h2>
                    <p>The principles that guide everything we do</p>
                </div>

                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <Users size={40} />
                        <h3>Customer First</h3>
                        <p>We build products that solve real problems for our customers</p>
                    </div>

                    <div className={styles.valueCard}>
                        <Heart size={40} />
                        <h3>Integrity</h3>
                        <p>We operate with transparency and honesty in everything we do</p>
                    </div>

                    <div className={styles.valueCard}>
                        <Award size={40} />
                        <h3>Excellence</h3>
                        <p>We strive for excellence in every product and service we deliver</p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.storySection}>
                <div className={styles.storyContent}>
                    <div className={styles.storyText}>
                        <div className={styles.sectionBadge}>
                            <span className={styles.badgeDot}></span> Our Story
                        </div>
                        <h2>Building Payment Rails for Africa's Digital Economy</h2>
                        <p>
                            Founded in 2020, Payrant emerged from a simple yet powerful vision: to make payments seamless for Nigerian businesses. We recognized the challenges businesses face with traditional payment methods - high failure rates, complex integrations, and limited payment options.
                        </p>
                        <p>
                            Our team of experienced fintech professionals and banking experts came together to create a solution that addresses these pain points. We built Payrant as a comprehensive virtual account payment gateway that enables businesses to accept payments directly from customers' bank accounts.
                        </p>
                        <p>
                            Today, we're proud to serve thousands of businesses across Nigeria, from startups to enterprise-level companies, helping them increase their payment success rates and grow their revenue.
                        </p>
                    </div>
                    <div className={styles.storyImageWrapper}>
                        <img src="/images/our_story.png" alt="Payrant Story" className={styles.storyImage} />
                        <div className={styles.storyGlow}></div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <div className={styles.sectionHeader}>
                    <h2>Meet Our Leadership</h2>
                    <p>The experts behind Payrant's innovative payment solutions</p>
                </div>

                <div className={styles.teamGrid}>
                    <div className={styles.teamCard}>
                        <div className={styles.memberImage}>
                            <div className={styles.memberInitials}>UM</div>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Umar Muhammad</h3>
                            <span className={styles.memberRole}>CEO & Co-Founder</span>
                            <p>Former VP at a leading Nigerian bank with 15+ years in fintech. Passionate about financial inclusion and digital transformation.</p>
                        </div>
                    </div>

                    <div className={styles.teamCard}>
                        <div className={styles.memberImage}>
                            <div className={styles.memberInitials}>DO</div>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>David Okafor</h3>
                            <span className={styles.memberRole}>CTO & Co-Founder</span>
                            <p>Technology leader with expertise in payment systems and API development. Previously led engineering teams at top fintech companies.</p>
                        </div>
                    </div>

                    <div className={styles.teamCard}>
                        <div className={styles.memberImage}>
                            <div className={styles.memberInitials}>AH</div>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Amina Hassan</h3>
                            <span className={styles.memberRole}>Head of Product</span>
                            <p>Product strategist focused on user experience and business growth. Expert in payment flows and customer journey optimization.</p>
                        </div>
                    </div>

                    <div className={styles.teamCard}>
                        <div className={styles.memberImage}>
                            <div className={styles.memberInitials}>MA</div>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Michael Adebayo</h3>
                            <span className={styles.memberRole}>Head of Security</span>
                            <p>Cybersecurity expert ensuring the highest levels of security for our platform. Former security consultant for major financial institutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2>Ready to get started?</h2>
                <p>Join thousands of businesses already using Payrant</p>
                <a href="https://app.payrant.com/auth-register.php" className={styles.ctaButton}>Create Free Account</a>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;

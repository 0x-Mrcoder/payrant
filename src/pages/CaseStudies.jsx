import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('all');

    const caseStudies = [
        {
            id: 1,
            company: 'ShopNow Nigeria',
            industry: 'E-commerce',
            logo: '🛍️',
            challenge: 'High cart abandonment rate due to complex checkout process and failed card transactions',
            solution: 'Implemented Payrant virtual accounts for seamless bank transfers and integrated multiple payment channels',
            results: [
                { metric: '40%', label: 'Increase in conversion rate' },
                { metric: '65%', label: 'Reduction in failed transactions' },
                { metric: '₦50M', label: 'Monthly transaction volume' }
            ],
            testimonial: {
                quote: 'Payrant transformed our payment experience. Our customers love the flexibility of virtual accounts, and we\'ve seen a massive boost in successful transactions.',
                author: 'Chioma Okafor',
                position: 'CEO, ShopNow Nigeria'
            },
            image: '/assets/case-study-ecommerce.jpg'
        },
        {
            id: 2,
            company: 'EduLearn Africa',
            industry: 'Education',
            logo: '📚',
            challenge: 'Difficulty collecting tuition fees from students across multiple countries with varying payment preferences',
            solution: 'Deployed Payrant\'s multi-currency virtual accounts and automated payment reconciliation system',
            results: [
                { metric: '85%', label: 'Faster payment collection' },
                { metric: '99.9%', label: 'Payment success rate' },
                { metric: '10,000+', label: 'Students onboarded' }
            ],
            testimonial: {
                quote: 'The virtual account feature is a game-changer. Each student gets a dedicated account number, making fee collection and reconciliation effortless.',
                author: 'Dr. Adebayo Williams',
                position: 'Director, EduLearn Africa'
            },
            image: '/assets/case-study-education.jpg'
        },
        {
            id: 3,
            company: 'LogiMove Express',
            industry: 'Logistics',
            logo: '🚚',
            challenge: 'Managing cash-on-delivery payments and driver settlements across 20+ cities',
            solution: 'Integrated Payrant API for automated payouts to drivers and real-time transaction tracking',
            results: [
                { metric: '70%', label: 'Reduction in settlement time' },
                { metric: '₦200M', label: 'Monthly payout volume' },
                { metric: '500+', label: 'Active drivers' }
            ],
            testimonial: {
                quote: 'Payrant\'s payout API has streamlined our driver settlements. What used to take days now happens in minutes.',
                author: 'Emeka Nwosu',
                position: 'Operations Manager, LogiMove Express'
            },
            image: '/assets/case-study-logistics.jpg'
        },
        {
            id: 4,
            company: 'HealthPlus Clinics',
            industry: 'Healthcare',
            logo: '🏥',
            challenge: 'Patients struggling with upfront payment for medical services, leading to delayed treatments',
            solution: 'Implemented flexible payment plans using Payrant virtual accounts and installment tracking',
            results: [
                { metric: '55%', label: 'Increase in patient admissions' },
                { metric: '90%', label: 'Payment plan completion rate' },
                { metric: '₦30M', label: 'Monthly revenue growth' }
            ],
            testimonial: {
                quote: 'Payrant enabled us to offer flexible payment options, making healthcare more accessible while ensuring we get paid reliably.',
                author: 'Dr. Funmi Adeleke',
                position: 'Medical Director, HealthPlus Clinics'
            },
            image: '/assets/case-study-healthcare.jpg'
        }
    ];

    const industries = ['all', 'E-commerce', 'Education', 'Logistics', 'Healthcare'];

    const filteredStudies = selectedIndustry === 'all'
        ? caseStudies
        : caseStudies.filter(study => study.industry === selectedIndustry);

    return (
        <>
            <Navbar />
            <div className={styles.caseStudies}>
                <SEO
                    title="Case Studies - Success Stories from Payrant Customers | Payrant"
                    description="Discover how businesses across Africa are growing with Payrant. Read real success stories from e-commerce, education, logistics, and healthcare companies."
                    keywords="payrant case studies, success stories, customer testimonials, payment gateway results, business growth, fintech success"
                    url="https://payrant.com/case-studies"
                />

                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Success Stories</h1>
                        <p>See how businesses across Africa are transforming payments with Payrant</p>
                    </div>
                </section>

                {/* Featured Case Study */}
                <section className={styles.featured}>
                    <div className={styles.container}>
                        <div className={styles.featuredCard}>
                            <div className={styles.featuredContent}>
                                <div className={styles.badge}>Featured Case Study</div>
                                <div className={styles.companyLogo}>{caseStudies[0].logo}</div>
                                <h2>{caseStudies[0].company}</h2>
                                <p className={styles.industry}>{caseStudies[0].industry}</p>

                                <div className={styles.featuredMetrics}>
                                    {caseStudies[0].results.map((result, index) => (
                                        <div key={index} className={styles.metric}>
                                            <div className={styles.metricValue}>{result.metric}</div>
                                            <div className={styles.metricLabel}>{result.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <blockquote className={styles.quote}>
                                    "{caseStudies[0].testimonial.quote}"
                                    <footer>
                                        <strong>{caseStudies[0].testimonial.author}</strong>
                                        <span>{caseStudies[0].testimonial.position}</span>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter */}
                <section className={styles.filterSection}>
                    <div className={styles.container}>
                        <h2>Explore by Industry</h2>
                        <div className={styles.filters}>
                            {industries.map(industry => (
                                <button
                                    key={industry}
                                    className={selectedIndustry === industry ? styles.active : ''}
                                    onClick={() => setSelectedIndustry(industry)}
                                >
                                    {industry === 'all' ? 'All Industries' : industry}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className={styles.studiesGrid}>
                    <div className={styles.container}>
                        {filteredStudies.map(study => (
                            <div key={study.id} className={styles.studyCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.companyInfo}>
                                        <div className={styles.logo}>{study.logo}</div>
                                        <div>
                                            <h3>{study.company}</h3>
                                            <span className={styles.industryTag}>{study.industry}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.section}>
                                        <h4>Challenge</h4>
                                        <p>{study.challenge}</p>
                                    </div>

                                    <div className={styles.section}>
                                        <h4>Solution</h4>
                                        <p>{study.solution}</p>
                                    </div>

                                    <div className={styles.section}>
                                        <h4>Results</h4>
                                        <div className={styles.results}>
                                            {study.results.map((result, index) => (
                                                <div key={index} className={styles.resultItem}>
                                                    <TrendingUp size={20} />
                                                    <div>
                                                        <strong>{result.metric}</strong>
                                                        <span>{result.label}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.testimonialCard}>
                                        <p>"{study.testimonial.quote}"</p>
                                        <div className={styles.author}>
                                            <strong>{study.testimonial.author}</strong>
                                            <span>{study.testimonial.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className={styles.stats}>
                    <div className={styles.container}>
                        <h2>Powering Growth Across Africa</h2>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <Users size={32} />
                                <div className={styles.statValue}>12,000+</div>
                                <div className={styles.statLabel}>Active Businesses</div>
                            </div>
                            <div className={styles.statCard}>
                                <DollarSign size={32} />
                                <div className={styles.statValue}>₦500M+</div>
                                <div className={styles.statLabel}>Processed Monthly</div>
                            </div>
                            <div className={styles.statCard}>
                                <TrendingUp size={32} />
                                <div className={styles.statValue}>99.9%</div>
                                <div className={styles.statLabel}>Uptime</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Ready to Transform Your Payments?</h2>
                        <p>Join thousands of businesses growing with Payrant</p>
                        <div className={styles.ctaButtons}>
                            <Link to="/signup" className={styles.primaryBtn}>
                                Get Started Free
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className={styles.secondaryBtn}>
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default CaseStudies;

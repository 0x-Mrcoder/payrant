import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag, Mail } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import MeshBackground from '../../components/MeshBackground';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './Blog.module.css';

const CATEGORIES = ['All', 'Product Updates', 'Engineering', 'Company', 'Customer Stories'];

import { POSTS, FEATURED_POST } from '../../data/blogPosts';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? POSTS
        : POSTS.filter(post => post.tag === activeCategory);

    return (
        <div className={styles.container}>
            <SEO
                title="Payrant Blog - Fintech Insights & Updates"
                description="Stay updated with the latest fintech trends, product updates, and business insights from Payrant. Learn how to optimize your payment processes and grow your business."
                keywords="payrant blog, fintech news, payment gateway updates, business insights, financial technology Nigeria, payment processing tips"
                url="https://payrant.com/blog"
            />
            <Navbar />

            {/* Hero */}
            <header className={styles.hero}>
                <MeshBackground />
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span> Blog & Resources
                    </div>
                    <h1 className={styles.headline}>Latest Updates & Insights</h1>
                    <p className={styles.subheadline}>
                        News, tutorials, and stories from the team building the future of African payments.
                    </p>
                </div>
            </header>

            {/* Categories */}
            <div className={styles.categoriesWrapper}>
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        className={`${styles.categoryBtn} ${activeCategory === category ? styles.activeCategory : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Featured Post */}
            <AnimatedSection className={styles.featuredSection} animation="scale">
                <Link to={`/blog/${FEATURED_POST.id}`} className={styles.featuredCard}>
                    <div
                        className={styles.featuredImage}
                        style={{ backgroundImage: `url(${FEATURED_POST.image})` }}
                    ></div>
                    <div className={styles.featuredContent}>
                        <div className={styles.postMeta}>
                            <span className={styles.postTag}>{FEATURED_POST.tag}</span>
                            <span>•</span>
                            <span>{FEATURED_POST.date}</span>
                            <span>•</span>
                            <span>{FEATURED_POST.readTime}</span>
                        </div>
                        <h2 className={styles.featuredTitle}>{FEATURED_POST.title}</h2>
                        <p className={styles.featuredExcerpt}>{FEATURED_POST.excerpt}</p>
                        <span className={styles.readMore}>
                            Read Full Article <ArrowRight size={18} />
                        </span>
                    </div>
                </Link>
            </AnimatedSection>

            {/* Posts Grid */}
            <div className={styles.postsGrid}>
                {filteredPosts.map(post => (
                    <AnimatedSection key={post.id} animation="fade" className={styles.postCard}>
                        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div
                                className={styles.cardImage}
                                style={{ backgroundImage: `url(${post.image})` }}
                            ></div>
                            <div className={styles.cardContent}>
                                <div className={styles.postMeta}>
                                    <span className={styles.postTag}>{post.tag}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>

            {/* Newsletter */}
            <section className={styles.newsletterSection}>
                <MeshBackground />
                <div className={styles.newsletterContent}>
                    <h2>Stay in the loop</h2>
                    <p>Get the latest product updates and engineering deep dives delivered to your inbox.</p>
                    <div className={styles.newsletterForm}>
                        <input type="email" placeholder="Enter your email address" className={styles.newsletterInput} />
                        <button className={styles.newsletterBtn}>Subscribe</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;

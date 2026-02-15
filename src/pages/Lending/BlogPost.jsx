import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MeshBackground from '../../components/MeshBackground';
import SEO from '../../components/SEO';
import { POSTS, FEATURED_POST } from '../../data/blogPosts';
import styles from './BlogPost.module.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find post in posts or check if it's the featured one
    // We convert id to string because URL params are strings
    let post = POSTS.find(p => p.id.toString() === id);

    if (!post && FEATURED_POST.id.toString() === id) {
        post = FEATURED_POST;
    }

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className={styles.postContainer} style={{ textAlign: 'center', paddingTop: '150px' }}>
                <Navbar />
                <h1>Post not found</h1>
                <Link to="/blog" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                url={`https://payrant.com/blog/${post.id}`}
                keywords={`${post.tag}, payrant blog, fintech`}
            />
            <Navbar />

            <article>
                {/* Header */}
                <header className={styles.header}>
                    <Link to="/blog" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    <div className={styles.meta}>
                        <span className={styles.tag}>{post.tag}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>

                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                </header>

                {/* Hero Image */}
                <div className={styles.heroImageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.heroImage} />
                </div>

                {/* Content Body */}
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;

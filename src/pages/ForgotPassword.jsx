import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import styles from './Auth.module.css';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        setIsLoading(false);
    };

    if (isSubmitted) {
        return (
            <AuthLayout
                title="Check your email"
                subtitle={`We've sent a recovery link to ${email}`}
                image="/assets/auth_forgot.png"
            >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: '#DCFCE7',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px auto',
                        color: '#16A34A'
                    }}>
                        <CheckCircle2 size={40} />
                    </div>
                    <p style={{ color: '#4B5563', marginBottom: '32px', lineHeight: '1.6' }}>
                        Click the link in the email to set a new password. If you don't see the email, check your spam folder.
                    </p>

                    <div className={styles.form} style={{ gap: '16px' }}>
                        <Link to="/login" className={styles.submitBtn}>
                            Back to Sign In
                        </Link>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className={styles.footer}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
                        >
                            <span style={{ color: '#6B7280' }}>Didn't receive the email? </span>
                            <a href="#">Click to resend</a>
                        </button>
                    </div>
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Reset Password"
            subtitle="Enter your email to receive a recovery link"
        >
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className={styles.inputIconRight}>
                            <Mail size={20} />
                        </div>
                    </div>
                </div>

                <button type="submit" className={styles.glowBtn} disabled={isLoading}>
                    {isLoading ? (
                        <span className={styles.loadingSpinner}></span>
                    ) : (
                        "Send Reset Link"
                    )}
                </button>

                <div className={styles.footer}>
                    Remember your password? <Link to="/login" className={styles.linkPrimary}>Sign in</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;

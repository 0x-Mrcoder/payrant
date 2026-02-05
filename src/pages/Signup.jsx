import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import styles from './Auth.module.css';
import { Mail, Eye, EyeOff, User, Building2, CheckCircle2, ArrowLeft } from 'lucide-react';
import OtpInput from '../components/OtpInput';

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Details, 2: OTP, 3: Success
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        password: ''
    });

    // Step 1: Submit Details
    const handleDetailsSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call to send OTP
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setStep(2);
    };

    // Step 2: Receive OTP from component
    const handleOtpComplete = async (otp) => {
        setIsLoading(true);
        console.log("Verifying OTP:", otp);
        // Simulate OTP verification
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep(3);

        // Auto redirect after success
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    // Render Success Modal
    if (step === 3) {
        return (
            <div className={styles.successOverlay}>
                <div className={styles.successModal}>
                    <div className={styles.successIconWrapper}>
                        <CheckCircle2 size={40} strokeWidth={3} />
                    </div>
                    <h2 className={styles.successTitle}>Account Verified!</h2>
                    <p className={styles.successDesc}>
                        Your email has been verified successfully. Redirecting you to your dashboard...
                    </p>
                    <div className={styles.loadingSpinner} style={{ margin: '0 auto', borderColor: '#E5E7EB', borderTopColor: '#755AE2' }}></div>
                </div>
            </div>
        );
    }

    // Step 2: OTP Verification UI
    if (step === 2) {
        return (
            <AuthLayout
                title="Verify your email"
                subtitle={`We've sent a 6-digit code to ${formData.email}`}
            >
                <div className={styles.form}>
                    <button
                        onClick={() => setStep(1)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', border: 'none', background: 'none', cursor: 'pointer', marginBottom: '-10px', fontSize: '0.9rem' }}
                    >
                        <ArrowLeft size={16} /> Change email
                    </button>

                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 500 }}>Enter the code below</p>
                        <OtpInput length={6} onComplete={handleOtpComplete} />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        {isLoading ? (
                            <div className={styles.loadingSpinner} style={{ margin: '0 auto', borderColor: '#E5E7EB', borderTopColor: '#755AE2' }}></div>
                        ) : (
                            <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                Didn't receive code? <button style={{ color: '#755AE2', fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer' }}>Resend</button>
                            </p>
                        )}
                    </div>
                </div>
            </AuthLayout>
        );
    }

    // Step 1: Default Signup Form
    return (
        <AuthLayout
            title="Create your account"
            subtitle="Start accepting payments in minutes"
        >
            <form onSubmit={handleDetailsSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <div className={styles.inputIconRight}>
                            <User size={20} />
                        </div>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Company Name (Optional)</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                        <div className={styles.inputIconRight}>
                            <Building2 size={20} />
                        </div>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Work Email</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div className={styles.inputIconRight}>
                            <Mail size={20} />
                        </div>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            className={`${styles.inputIconRight} ${styles.passwordToggle}`}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', margin: '16px 0' }}>
                    <input
                        type="checkbox"
                        id="terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        style={{ marginTop: '4px', cursor: 'pointer', accentColor: '#755AE2' }}
                    />
                    <label htmlFor="terms" style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.5', cursor: 'pointer' }}>
                        I agree to the <Link to="/terms" style={{ color: '#755AE2', textDecoration: 'none' }} target="_blank">Terms of Service</Link> and <Link to="/privacy" style={{ color: '#755AE2', textDecoration: 'none' }} target="_blank">Privacy Policy</Link>
                    </label>
                </div>

                <button type="submit" className={styles.glowBtn} disabled={isLoading || !acceptedTerms}>
                    {isLoading ? (
                        <span className={styles.loadingSpinner}></span>
                    ) : (
                        "Get Started"
                    )}
                </button>

                {/* Divider */}
                <div className={styles.divider}>
                    <div className={styles.dividerLine}></div>
                    <span>OR</span>
                    <div className={styles.dividerLine}></div>
                </div>

                {/* Google Button */}
                <button type="button" className={styles.googleBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className={styles.footer}>
                    Already have an account? <Link to="/login" className={styles.linkPrimary}>Sign in</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Signup;

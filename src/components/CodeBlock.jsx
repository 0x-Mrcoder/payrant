import { useState } from 'react';
import { Copy, Check, Sun, Moon } from 'lucide-react';
import styles from './CodeBlock.module.css';

const CodeBlock = () => {
    const [activeTab, setActiveTab] = useState('js');
    const [copied, setCopied] = useState(false);
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const CODE = {
        js: `// Initialize Payment
const response = await fetch('https://api.payrant.com/v1/initialize', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_test_5928...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 5000,
    email: 'customer@email.com',
    callback_url: 'https://yoursite.com/callback'
  })
});`,
        php: `// Initialize Payment
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.payrant.com/v1/initialize",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer sk_test_5928...",
    "Content-Type: application/json"
  ),
  CURLOPT_POSTFIELDS => json_encode([
    'amount' => 5000,
    'email' => 'customer@email.com'
  ])
));

$response = curl_exec($curl);`
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(CODE[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`${styles.codeBlock} ${theme === 'light' ? styles.lightMode : ''}`}>
            <div className={styles.codeHeader}>
                <div className={styles.controlsGroup}>
                    <div className={styles.windowControls}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className={styles.languageTabs}>
                        <button
                            className={`${styles.langTab} ${activeTab === 'js' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('js')}
                        >
                            payment.js
                        </button>
                        <button
                            className={`${styles.langTab} ${activeTab === 'php' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('php')}
                        >
                            payment.php
                        </button>
                    </div>
                </div>

                <div className={styles.actionsGroup}>
                    <button
                        className={styles.toggleBtn}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                        onClick={handleCopy}
                        aria-label="Copy code"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                </div>
            </div>
            <pre className={styles.codeContent}>
                {CODE[activeTab]}
            </pre>
        </div>
    );
};

export default CodeBlock;

export const POSTS = [
    {
        id: 1,
        title: "How to Secure Your Checkout Flow",
        excerpt: "Best practices for implementing 3D Secure 2.0 and preventing fraud without hurting conversion.",
        image: "/assets/payrant_security_shield_cartoon_1770133814394.png",
        date: "Oct 18, 2025",
        readTime: "8 min read",
        tag: "Engineering",
        content: `
            <p>Security is paramount in digital payments. As transaction volumes increase, so does the sophistication of fraud attempts. Implementing robust security measures like 3D Secure 2.0 is no longer optional—it's a necessity for protecting your revenue and your customers.</p>
            
            <h2>What is 3D Secure 2.0?</h2>
            <p>3D Secure 2.0 (3DS2) is the latest standard for authenticating online card transactions. Unlike its predecessor, it uses a wider range of data points to verify the cardholder's identity without necessarily requiring a password, leading to a frictionless checkout experience for low-risk transactions.</p>
            
            <h2>Key Benefits</h2>
            <ul>
                <li><strong>Reduced Fraud:</strong> Liability shift protects merchants from chargebacks on authenticated transactions.</li>
                <li><strong>Better UX:</strong> Most transactions are verified in the background, minimizing cart abandonment.</li>
                <li><strong>Mobile Optimization:</strong> Designed natively for mobile apps and browsers.</li>
            </ul>

            <h2>Implementing with Payrant</h2>
            <p>At Payrant, we handle the complexities of 3DS2 automatically. Our SDKs invoke the authentication flow only when necessary, ensuring the highest possible conversion rates while maintaining bank-grade security.</p>
        `
    },
    {
        id: 2,
        title: "Scaling to 1 Million Transactions",
        excerpt: "Lessons learned from our engineering team on building a high-volume payment gateway.",
        image: "/assets/payrant_global_payments_cartoon_1770133800270.png",
        date: "Oct 10, 2025",
        readTime: "12 min read",
        tag: "Engineering",
        content: `
            <p>Scaling a payment system is not just about handling more requests; it's about maintaining consistency, reliability, and speed under load. Here’s how Payrant engineered its platform to support over 1 million daily transactions.</p>

            <h2>Database Sharding</h2>
            <p>To prevent bottlenecks, we implemented horizontal partitioning (sharding) for our transaction tables. This allows us to distribute the load across multiple database nodes, ensuring that read/write operations remain fast even as data grows terabytes in size.</p>

            <h2>Asynchronous Processing</h2>
            <p>We decouple transaction processing from the user response loop. When a payment is initiated, we push the job to a scalable message queue (using RabbitMQ). This ensures that our API remains responsive, while heavy lifting—like fraud checks and bank communication—happens asynchronously.</p>
        `
    },
    {
        id: 3,
        title: "Payrant Raises Series A to Expand Across Africa",
        excerpt: "We're excited to announce our latest funding round led by top fintech investors.",
        image: "/assets/city_skyline_banner_1770324582454.png",
        date: "Sep 28, 2025",
        readTime: "3 min read",
        tag: "Company",
        content: `
            <p>We are thrilled to announce that Payrant has raised $15 million in Series A funding. This investment marks a significant milestone in our mission to simplify payments for businesses across Africa.</p>

            <h2>Fueling Expansion</h2>
            <p>The new capital will be used to accelerate our expansion into new markets, including Egypt and Francophone Africa. We are also doubling down on our engineering and support teams to continue delivering the world-class service our merchants expect.</p>
        `
    },
    {
        id: 4,
        title: "Case Study: How TechHub Tripled Revenue",
        excerpt: "See how switching to Payrant helped this Lagos-based startup grow their revenue by 300%.",
        image: "/assets/payrant_devices_cartoon_1770133830129.png",
        date: "Sep 15, 2025",
        readTime: "6 min read",
        tag: "Customer Stories",
        content: `
            <p>TechHub, a leading electronics retailer in Lagos, was facing a major challenge: high cart abandonment rates due to unreliable payment gateways. After switching to Payrant, they saw an immediate impact.</p>

            <h2>The Challenge</h2>
            <p>Customers were dropping off at the final step because of slow load times and failed transactions. TechHub needed a solution that was fast, reliable, and trusted by shoppers.</p>

            <h2>The Solution</h2>
            <p>TechHub integrated Payrant’s seamless checkout. With features like instant bank transfers and saved cards, the friction was removed from the buying process.</p>

            <h2>The Results</h2>
            <p>Within three months, TechHub’s successful transaction rate went from 75% to 99%. Consequently, their monthly revenue tripled, proving that a better checkout experience directly translates to bottom-line growth.</p>
        `
    },
    {
        id: 5,
        title: "Supported Payment Methods Guide (2025)",
        excerpt: "A complete breakdown of every payment method supported on the Payrant platform.",
        image: "/assets/payment_methods_showcase_1770141695039.png",
        date: "Sep 02, 2025",
        readTime: "10 min read",
        tag: "Product Updates",
        content: `
            <p>Flexibility is key to conversion. Payrant supports a wide array of payment methods to ensure your customers can pay however they prefer.</p>
            
            <h2>Cards</h2>
            <p>We support all major local and international cards, including Visa, Mastercard, and Verve.</p>

            <h2>Bank Transfers</h2>
            <p>Our virtual accounts allow customers to pay directly from their bank apps. This is one of the most popular payment methods in Nigeria.</p>

            <h2>USSD</h2>
            <p>For customers without internet access, USSD codes provide a quick and offline way to complete payments.</p>
        `
    },
    {
        id: 6,
        title: "Understanding PHP Integration",
        excerpt: "A deep dive into our PHP SDK and how to integrate it into your existing application.",
        image: "/assets/developer_php_view_1770756810108.png",
        date: "Aug 20, 2025",
        readTime: "15 min read",
        tag: "Engineering",
        content: `
            <p>PHP powers a significant portion of the web, and at Payrant, we ensure our PHP SDK is top-notch. This guide walks you through setting up the SDK and accepting your first payment.</p>

            <h2>Installation</h2>
            <p>You can install our PHP SDK via Composer:</p>
            <pre><code>composer require payrant/payrant-php</code></pre>

            <h2>Initialization</h2>
            <p>Once installed, initialize the client with your secret key. You can find this in your Payrant dashboard under Developer Settings.</p>
        `
    }
];

export const FEATURED_POST = {
    id: 99,
    title: "Introducing Virtual Accounts: A New Way to Collect Payments",
    excerpt: "We've rebuilt our virtual account infrastructure from the ground up to support instant settlements and 99.9% success rates.",
    image: "/assets/payrant_business_central_dashboard_final.png",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    tag: "Product Updates",
    content: `
        <p>Virtual accounts are changing the landscape of B2B and high-value B2C payments in Africa. Today, we are proud to launch our completely redesigned Virtual Accounts infrastructure.</p>

        <h2>Instant Settlements</h2>
        <p>Gone are the days of waiting T+1 for bank transfers. With our new direct bank integrations, payments made to persistent virtual accounts are settled instantly into your Payrant balance.</p>

        <h2>Unique Account Numbers</h2>
        <p>Assign a unique account number to each of your customers. This makes reconciliation automatic—you'll know exactly who paid you and for what invoice, without manual checking.</p>
    `
};

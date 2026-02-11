import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Payrant";
    const defaultDescription = "Payrant offers secure virtual account payment gateway for Nigerian businesses. Accept bank payments without cards, reduce failed transactions, and increase conversion rates.";
    const defaultImage = "/assets/payrant_social_share.png"; // Placeholder
    const siteUrl = "https://payrant.com";

    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Virtual Account Payment Gateway`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || "virtual account, payment gateway, bank payments, Nigeria, online payments, fintech, payment processing, secure payments"} />
            <meta name="author" content="Payrant" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;

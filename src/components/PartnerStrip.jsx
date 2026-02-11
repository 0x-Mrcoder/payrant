import { useRef, useEffect } from 'react';
import styles from './PartnerStrip.module.css';

const PARTNERS = [
    { name: 'Shopify', logo: '/assets/partners/shopify.svg' },
    { name: 'WooCommerce', logo: '/assets/partners/woocommerce.svg' },
    { name: 'BigCommerce', logo: '/assets/partners/bigcommerce.svg' },
    { name: 'Magento', logo: '/assets/partners/magento.svg' },
    { name: 'Xero', logo: '/assets/partners/xero.svg' },
    { name: 'PrestaShop', logo: '/assets/partners/prestashop.svg' },
];

const PartnerStrip = () => {
    return (
        <section className={styles.strip}>
            <p className={styles.label}>TRUSTED BY OVER 12,000 BUSINESSES ACROSS AFRICA</p>
            <div className={styles.scroller}>
                <div className={styles.track}>
                    {/* Quadruple the list for infinite scroll effect on wide screens */}
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div key={index} className={styles.partnerItem}>
                            {/* Text based logo since assets are missing */}
                            <span className={styles.partnerName}>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerStrip;

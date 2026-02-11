import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                >
                    <button
                        className={styles.header}
                        onClick={() => toggleItem(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <span className={styles.question}>{item.question}</span>
                        {activeIndex === index ?
                            <ChevronUp className={styles.icon} size={20} /> :
                            <ChevronDown className={styles.icon} size={20} />
                        }
                    </button>
                    <div
                        className={styles.contentWrapper}
                        style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                    >
                        <div className={styles.content}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;

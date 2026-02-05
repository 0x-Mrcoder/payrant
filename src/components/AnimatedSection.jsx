import useReveal from '../hooks/useReveal';


const AnimatedSection = ({ children, className = '', delay = '', animation = 'reveal', threshold = 0.1, as: Component = 'div' }) => {
    const [ref, isVisible] = useReveal(threshold);

    const getAnimationClass = () => {
        if (animation === 'slide') return isVisible ? 'slide-in-visible' : 'slide-in-hidden';
        if (animation === 'scale') return isVisible ? 'scale-in-visible' : 'scale-in-hidden';
        return isVisible ? 'reveal-visible' : 'reveal-hidden';
    };

    const getDelayClass = () => {
        if (delay === '100') return 'reveal-delay-100';
        if (delay === '200') return 'reveal-delay-200';
        if (delay === '300') return 'reveal-delay-300';
        return '';
    };

    return (
        <Component ref={ref} className={`${className} ${getAnimationClass()} ${getDelayClass()}`}>
            {children}
        </Component>
    );
};

export default AnimatedSection;

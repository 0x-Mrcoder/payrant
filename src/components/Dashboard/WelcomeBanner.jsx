import styles from './WelcomeBanner.module.css';
// Importing the image we just copied
import cityIllustration from '../../assets/city-skyline.png';

const WelcomeBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1>Good Afternoon, John Doe!</h1>
                <p>Welcome back!</p>
            </div>
            <div className={styles.illustration}>
                <img src={cityIllustration} alt="City Skyline" />
            </div>
        </div>
    );
};

export default WelcomeBanner;

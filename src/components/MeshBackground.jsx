import styles from './MeshBackground.module.css';

const MeshBackground = () => {
    return (
        <div className={styles.meshContainer}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default MeshBackground;

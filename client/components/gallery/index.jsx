import styles from './style.module.scss'
import Image from 'next/image';

export default function index({ handle }) {

    return (
        <div className={styles.gallery}>
            <div className={styles.imageContainer}>
                <Image
                    src={`/images/${handle}/background.jpg`}
                    alt="image"
                    fill
                />
            </div>
            <div className={styles.vignette}>
                <Image
                    src={`/images/${handle}/1.jpg`}
                    alt="image"
                    fill
                />
            </div>
        </div>
    )
}
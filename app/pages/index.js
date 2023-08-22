import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.diagonalLeft}>
        <span className={styles.companyTitle}>Company</span>
      </div>
      <div className={styles.diagonalRight}>
        <span className={styles.companyPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className={styles.linkContainer}>
        <Link href="/action">
          Go to next page
        </Link>
      </div>
    </div>
  );
}

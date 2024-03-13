import styles from './page.module.css';
import { playfairDisplayNormal } from '@/fonts';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={playfairDisplayNormal.className}>
          evanmarshall<span className={styles.brand__accent}>.</span>
          <span className={styles.brand__secondary}>dev</span>
        </h1>
      </div>
    </main>
  );
}

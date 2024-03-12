import styles from './page.module.css';

import type { Metadata } from 'next';
import { playfairDisplayNormal } from '@/fonts';

export const metadata: Metadata = {
  title: 'Web Developer: Evan Marshall',
  description:
    'I design, build and maintain businesses online. Whether it is branding, updates, or full website rebuilds; I am your web developer. Contact me to discuss how you want to get your business working for you online.',
};

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

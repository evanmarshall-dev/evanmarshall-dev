import Link from 'next/link';
import styles from './NavMenu.module.css';
import { latoNormal } from '@/fonts';

// Keep this as a server component for SEO.

export default function NavMenu() {
  return (
    <nav className={`${styles.nav} ${latoNormal.className}`}>
      <Link href={'/'}>
        evanmarshall<span className={styles.brand__accent}>.</span>
        <span className={styles.brand__secondary}>dev</span>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'#about'}>About</Link>
        </li>
        <li>
          <Link href={'#services'}>Services</Link>
        </li>
        <li>
          <Link href={'#projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'#contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
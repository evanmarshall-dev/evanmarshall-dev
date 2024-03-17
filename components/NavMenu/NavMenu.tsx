import Link from 'next/link';
import styles from './NavMenu.module.css';
import { latoNormal } from '@/fonts';

// Keep this as a server component for SEO.

export default function NavMenu() {
  return (
    <div className={`${styles.navbar} ${latoNormal.className}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContainerWrapper}>
          <Link href={'/'} className={styles.brandLink}>
            evanmarshall<span className={styles.brand__accent}>.</span>
            <span className={styles.brand__secondary}>dev</span>
          </Link>
          <nav className={styles.menu}>
            <div className={styles.menuWrapper}>
              <Link className={styles.menuLink} href={'#about'}>
                About
              </Link>
              <Link className={styles.menuLink} href={'#services'}>
                Services
              </Link>
              <Link className={styles.menuLink} href={'#projects'}>
                Projects
              </Link>
            </div>
          </nav>
          <div className={styles.ctaContainer}>
            <Link className={styles.ctaLink} href={'#contact'}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

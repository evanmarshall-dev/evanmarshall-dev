import styles from './page.module.css';
import { playfairDisplayNormal } from '@/fonts';

export default async function Home() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.sectionWrapper}>
        <div className={styles.sectionContent}>
          <h1 className={playfairDisplayNormal.className}>
            evanmarshall<span className={styles.brand__accent}>.</span>
            <span className={styles.brand__secondary}>dev</span>
          </h1>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.sectionContent}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            tempora cupiditate ullam odit ab a modi vero, doloremque magni
            veniam, maiores eius dignissimos ipsam ipsa quas debitis ipsum
            laudantium et? Repellat odit itaque consectetur aperiam omnis porro
            dolores, ipsum neque nemo consequatur, delectus distinctio
            inventore, ex error. Nemo dolorum corporis eveniet, eum velit
            deserunt exercitationem minus similique iste libero quasi!
            Architecto voluptate, nemo voluptatem saepe impedit eum distinctio
            ad tenetur porro rerum quis delectus quisquam consequuntur cumque
            natus quam, voluptatum molestias blanditiis beatae deleniti enim
            maxime! Repellat repudiandae quae aut.
          </p>
        </div>
      </section>
    </main>
  );
}

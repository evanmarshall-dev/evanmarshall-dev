import { playfairDisplayNormal } from '@/fonts';

export default async function Home() {
  return (
    <main className='w-full h-screen overflow-y-scroll snap-y snap-mandatory'>
      <section className='w-full h-screen flex items-center justify-center snap-start'>
        <div className='max-w-5xl'>
          <h1
            className={`${playfairDisplayNormal.className} ${'text-wild-sand'}`}
          >
            evanmarshall<span className='text-sunset-orange'>.</span>
            <span className='text-sandrift'>dev</span>
          </h1>
        </div>
      </section>
      <section className='w-full h-screen flex items-center justify-center snap-start'>
        <div className='max-w-5xl'>
          <p className='text-wild-sand'>
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

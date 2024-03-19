import Link from 'next/link';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-lato',
});

const NavMenu = () => {
  return (
    <div
      className={`${lato.variable} font-sans w-full h-fit items-center py-4 px-0 flex z-[1000] fixed bg-ebony`}
    >
      <div className='py-0 px-12 min-w-full justify-between items-center my-0 mx-auto flex max-w-5xl'>
        <div className='text-lg flex-1 justify-between items-center flex'>
          <Link href={'/'} className='text-wild-sand'>
            evanmarshall<span className='text-sunset-orange'>.</span>
            <span className='text-sandrift'>dev</span>
          </Link>
          <nav className='text-right float-right relative block'>
            <div className='items-center flex'>
              <Link
                className='text-lg text-wild-sand max-w-5xl py-2.5 px-5 align-top text-left my-0 mx-auto inline-block relative'
                href={'#about'}
              >
                About
              </Link>
              <Link
                className='text-lg text-wild-sand max-w-5xl py-2.5 px-5 align-top text-left my-0 mx-auto inline-block relative'
                href={'#services'}
              >
                Services
              </Link>
              <Link
                className='text-lg text-wild-sand max-w-5xl py-2.5 px-5 align-top text-left my-0 mx-auto inline-block relative'
                href={'#projects'}
              >
                Projects
              </Link>
            </div>
          </nav>
          <div className='text-lg gap-x-2.5 items-center ml-5 flex'>
            <Link
              className='text-lg text-wild-sand text-center cursor-pointer rounded-xl bg-sunset-orange border border-solid border-sunset-orange hover:bg-transparent tracking-wide normal-case py-3 px-6 transition-all duration-300 inline-block'
              href={'#contact'}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

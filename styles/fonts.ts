import { Lato, Playfair_Display } from 'next/font/google';

export const latoNormal = Lato({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const latoBold = Lato({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const playfairDisplayNormal = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

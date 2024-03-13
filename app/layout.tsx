import NavMenu from '../components/NavMenu/NavMenu';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: {
  //   template: '%s: Web Developer | Evan Marshall',
  //   default: 'Evan Marshall',
  // },
  title: 'Web Developer | Evan Marshall',
  description:
    'I design, build and maintain businesses online. Whether it is branding, updates, or full website rebuilds; I am your web developer. Contact me to discuss how you want to get your business working for you online',
  authors: [{ name: 'Evan Marshall', url: 'https://www.evanmarshall.dev' }],
  applicationName: 'evanmarshall.dev',
  // icons: [
  //   {
  //     rel: 'icon',
  //     sizes: '32x32',
  //     href: '/favicon.ico',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/svg+xml',
  //     href: '/icon.svg',
  //   },
  //   {
  //     rel: 'apple-touch-icon',
  //     href: '/apple-touch-icon.png',
  //   },
  //   {
  //     rel: 'manifest',
  //     href: '/manifest.webmanifest',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}

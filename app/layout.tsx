import NavMenu from '../components/NavMenu/NavMenu';
import './globals.css';
import type { Metadata } from 'next';
// import { GoogleAnalytics } from '@next/third-parties/google';

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
  icons: {
    icon: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon/favicon.ico',
      },
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon.png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon/icon.svg',
      },
    ],
  },
  manifest: 'https://www.evanmarshall.dev/favicon/manifest.webmanifest',
  openGraph: {
    title: 'Web Developer | Evan Marshall',
    description:
      'I design, build and maintain businesses online. Whether it is branding, updates, or full website rebuilds; I am your web developer. Contact me to discuss how you want to get your business working for you online',
    url: 'https://www.evanmarshall.dev',
    siteName: 'evanmarshall.dev',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer | Evan Marshall',
    description:
      'I design, build and maintain businesses online. Whether it is branding, updates, or full website rebuilds; I am your web developer. Contact me to discuss how you want to get your business working for you online',
    // siteId: '1467726470533754880',
    creator: 'Evan Marshall',
    // creatorId: '1467726470533754880',
    // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  appLinks: {
    web: {
      url: 'https://www.evanmarshall.dev',
      should_fallback: true,
    },
  },
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
      {/* TODO: Update with ID once in production. */}
      {/* <GoogleAnalytics gaId='G-XYZ' /> */}
    </html>
  );
}

import NavMenu from '../components/NavMenu/NavMenu';
import { Open_Sans } from 'next/font/google';
import './globals.css';

// ? const inter = Inter({ subsets: ['latin'] });
const oSans = Open_Sans({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={oSans.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}

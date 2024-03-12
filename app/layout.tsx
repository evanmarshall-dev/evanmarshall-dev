import NavMenu from '../components/NavMenu/NavMenu';
import './globals.css';

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

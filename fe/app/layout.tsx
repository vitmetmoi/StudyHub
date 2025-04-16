import { inter } from '@/app/ui/fonts';
import Head from 'next/head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <Head>
        <title>My Clothing Store</title>
        <meta name="description" content="Come to my store for great apparel!" />
        <meta property="og:title" content="My Clothing Store" />
        <meta property="og:description" content="Come to my store for great apparel!" />
        <meta property="og:url" content="https://myclothingstore.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

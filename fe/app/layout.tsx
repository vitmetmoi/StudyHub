import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is my home',

  openGraph: {
    images: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

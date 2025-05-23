import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Study room & Focus room | Focusly',
  description: 'This is my home',
  keywords: ["Focusly", "Study", "Together", "24/7"],
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Source Sans Pro, sans-serif' }}>{children}</body>
    </html>
  );
}

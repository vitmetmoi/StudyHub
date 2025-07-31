import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Register | Focusly',
    description: 'This is register page',
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

        <section style={{ margin: 0, fontFamily: 'Source Sans Pro, sans-serif' }}>{children}</section>

    );
}

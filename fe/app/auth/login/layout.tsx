import { Metadata } from 'next'
import { GoogleOAuthProvider } from '@react-oauth/google';
export const metadata: Metadata = {
    title: 'Login | Focusly',
    description: 'This is Login page',
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
        <GoogleOAuthProvider clientId={"757426770864-i99i1pgtliemm8lovqna44g9dhqtg1bi.apps.googleusercontent.com"}>
            <section style={{ margin: 0, fontFamily: 'Source Sans Pro, sans-serif' }}>{children}</section>
        </GoogleOAuthProvider>

    );
}

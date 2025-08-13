import type { Metadata } from "next";
import "./globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Layout from "./components/Layout";
export const metadata: Metadata = {
    title: "Zoe's Portfolio",
    description: "We provide end-to-end property services across the UK to help you build long-term value.",
};

const Plus_Jakarta_Sans_Font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>

            <body suppressHydrationWarning className={Plus_Jakarta_Sans_Font.className}>
                <NextTopLoader
                    color="#0599B3"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #0599B3,0 0 5px #0599B3"
                />
                {/* <ToastProvider> */}
                    <Layout>{children}</Layout>
                {/* </ToastProvider> */}

            </body>
        </html>
    );
}

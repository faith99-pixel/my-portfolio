import type { Metadata } from "next";
import "./globals.scss";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Layout from "./components/Layout";
export const metadata: Metadata = {
    title: "Zoe Zebedee | Frontend Engineer",
    description: "Portfolio of Zoe Zebedee, frontend engineer building responsive, accessible web experiences.",
};

const PlusJakartaSansFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-body",
});

const SpaceGroteskFont = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>

            <body suppressHydrationWarning className={`${PlusJakartaSansFont.variable} ${SpaceGroteskFont.variable} ${PlusJakartaSansFont.className}`}>
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

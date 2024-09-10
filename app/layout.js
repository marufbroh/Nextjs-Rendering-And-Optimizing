import "./globals.css";
import {GoogleTagManager, GoogleAnalytics, GoogleMapsEmbed, YouTubeEmbed} from "@next/third-parties/google";

export const metadata = {
    title: "My website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    openGraph: {
        images: [
            {
                url: "http://localhost:3000/api/og",
                width: 1200,
                height: 600,
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-XYZ" />
            <body className="bg-gray-200 px-5">
                <main className="mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]">
                    {children}
                </main>
                <YouTubeEmbed videoid="MCdVbYFAupg" height={400} params="controls=0" />
            </body>
            <GoogleAnalytics gaId="G-XYZ" />
        </html>
    );
}

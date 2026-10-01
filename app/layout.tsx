import type { Metadata } from "next";
import { Fraunces, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/config/config";
import { WavesBackground } from "@/components/WavesBackground";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${config.name} - Portfolio`,
  description: config.bio[0]
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\[\[(.*?)\]\]/g, "$1"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${sora.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Runs before first paint - removes dark class if user previously chose light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-foam text-ink antialiased dark:bg-ink dark:text-foam">
        <WavesBackground />
        {children}
      </body>
    </html>
  );
}

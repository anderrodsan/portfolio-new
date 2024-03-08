import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navigation/NavBar";
import NavBarBottom from "@/components/navigation/NavBarBottom";
import Head from "next/head";
import image from "@/public/opengraph-image.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://andr-portfolio.vercel.app"),
  title: "My Portfolio",
  description:
    "My newest web portfolio using latest technologies and frameworks as nextjs 14, Tailwind, Shadcn, Aceternity, Lucide-React, Leaflet, etc.",
  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* HTML meta tags */}
        <title>My Portfolio</title>
        <meta
          name="description"
          content="My newest web portfolio using latest technologies and frameworks as nextjs 14, Tailwind, Shadcn, Aceternity, Lucide-React, Leaflet, etc."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://andr-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="My newest web portfolio using latest technologies and frameworks as nextjs 14, Tailwind, Shadcn, Aceternity, Lucide-React, Leaflet, etc."
        />
        <meta property="og:image" content={image.src} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="andr-portfolio.vercel.app" />
        <meta
          property="twitter:url"
          content="https://andr-portfolio.vercel.app/"
        />
        <meta name="twitter:title" content="My Portfolio" />
        <meta
          name="twitter:description"
          content="My newest web portfolio using latest technologies and frameworks as nextjs 14, Tailwind, Shadcn, Aceternity, Lucide-React, Leaflet, etc."
        />
        <meta name="twitter:image" content={image.src} />

        {/* Umami.ls for site analytics */}
        <script
          defer
          src="https://analytics.eu.umami.is/script.js"
          data-website-id="3272d29b-19f2-4574-8b79-8a6f444cd788"
        ></script>
      </Head>
      <html className="" lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-dvh w-screen">
              <NavBar />
              <main className="relative flex-1 w-screen overflow-y-auto">
                {children}
              </main>
              <NavBarBottom />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

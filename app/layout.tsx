import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navigation/NavBar";
import NavBarBottom from "@/components/navigation/NavBarBottom";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "My newest web portfolio using latest technologies and frameworks as nextjs 14, Tailwind, Shadcn, Aceternity, Lucide-React, Leaflet, etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const openGraphImage = "/opengraph-image.jpg";

  return (
    <>
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:image" content={openGraphImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
              <main className="flex-1 w-screen overflow-y-auto">
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navigation/NavBar";
import NavBarBottom from "@/components/navigation/NavBarBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html className="" lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-dvh w-screen">
              <NavBar/>
              <main className="flex-1 w-screen overflow-y-auto">
                {children}
              </main>
              <NavBarBottom/>
            </div>
            
          </ThemeProvider>
        </body>
    </html>
  );
}

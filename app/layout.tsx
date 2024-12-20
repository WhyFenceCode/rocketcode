import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Overpass_Mono, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import {
  app_query_names,
  app_query_slogans,
} from "@/components/navigation/data/naming.js"

const overpass_mono = Overpass_Mono({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: app_query_names.app,
  description: app_query_slogans.landingMainText,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass_mono.className} ${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

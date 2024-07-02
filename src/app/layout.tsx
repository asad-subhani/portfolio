import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/views/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asad Subhani",
  description: "Software Engineer in Lahore",
  verification: {
    google: "LN-2jMweV_3AaxGrQVyzlqLUxoGY3fpJbyry00xpr6Q",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="absolute right-0 top-0 z-10">
            <Header />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

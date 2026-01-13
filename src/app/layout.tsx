import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chebster Tech | Innovative Tech Solutions",
  description: "Empowering businesses with cutting-edge technology.",
  icons: {
    // This points specifically to public/logo.png
    icon: "/logo.png?v=4", 
    shortcut: "/logo.png?v=4",
    apple: "/logo.png?v=4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

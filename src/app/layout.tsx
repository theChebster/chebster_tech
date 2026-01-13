import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chebster Tech | Innovative Tech Solutions",
  description: "Empowering businesses with cutting-edge technology. From enterprise web development to secure mobile architectures.",
  metadataBase: new URL("https://chebstertech.vercel.app"), // Replace with your actual domain
  icons: {
    icon: "public/logo.png", // This makes your company logo the icon in the browser tab
    shortcut: "public/logo.png",
    apple: "public/logo.png",
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

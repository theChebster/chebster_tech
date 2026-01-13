export const metadata: Metadata = {
  title: "Chebster Tech",
  description: "Innovative Tech Solutions",
  // We use "apple-touch-icon" and "icon" to cover all browser bases
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
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

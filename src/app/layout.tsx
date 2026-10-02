import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rawan Ayman | Front-End Developer",
  description:
    "Front-End Developer specializing in React, Next.js, TypeScript and Flutter. Explore my projects and get in touch.",
  openGraph: {
    title: "Rawan Ayman | Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, TypeScript and Flutter.",
    images: ["/images/hero-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>

    <body
  className={`${inter.className} bg-fixed bg-gradient-to-br 
  from-indigo-300 via-purple-300 to-pink-300 text-gray-800 relative overflow-x-hidden`}>

<Providers>
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/50 rounded-full blur-3xl opacity-20 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500/50 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/50 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
  </div>

  <div className="relative z-10 min-h-screen">
    <Header />
    {children}
    <Footer />
  </div>
</Providers>

      </body>
    </html>
  );
}
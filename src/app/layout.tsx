import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Ayush Tomar : Web Developer and Designer",
  description: "Ayush Tomar is a web developer and designer based in India, creating websites which aren't only fuctional but asthetic as well. He is currently building Doplo, the UI library and Inconcise, the ready to use components library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

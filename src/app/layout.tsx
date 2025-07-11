import type { Metadata } from "next";
import { Micro_5, Jersey_10 } from "next/font/google";
import "./globals.css";

const micro5 = Micro_5({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-micro5",
});

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey10",
});

export const metadata: Metadata = {
  title: "The Virtual Photobooth",
  description: "Created by Hana <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${micro5.variable} ${jersey10.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

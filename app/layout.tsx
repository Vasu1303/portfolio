import type { Metadata } from "next";
import { Poppins, Silkscreen, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const poppins = Poppins({
  weight: ["100","200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const jetbrains = JetBrains_Mono({
  variable:"--font-jetbrains",
  weight:['100','200','300','400'],
  subsets:['latin'],
  style:['italic', 'normal']

})

export const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Vasu | Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${silkscreen.variable} ${jetbrains.variable}  antialiased bg-neutral-950 text-white pb-[100px]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

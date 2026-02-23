import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Messias | Full Stack Developer",
  description: "Portfólio Profissional de Matheus Messias - Desenvolvedor Full Stack especializado em React, Next.js, Python, Java e mais.",
  keywords: ["Full Stack", "Java", "Python", "Spring Boot", "Node.js", "Developer", "React", "Next.js", "Portfolio", "Matheus Messias", "Matheus Campagnolo", "CodeMatth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

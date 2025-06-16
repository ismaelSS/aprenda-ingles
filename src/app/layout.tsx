import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/aplication/appSidebar";
import AppHeader from "@/components/aplication/appHeader";
import { appVariables } from "@/lib/project-variables";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appVariables.appTitle,
  description: appVariables.appDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          <SidebarProvider>
            <AppSidebar/>
            <div className="flex flex-col flex-1 min-h-screen">
            <AppHeader />
            {children}
            </div>
          </SidebarProvider>
        </body>
    </html>
  );
}

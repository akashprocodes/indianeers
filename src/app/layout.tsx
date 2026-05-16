import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import AppLayout from "@/components/layout/AppLayout";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillionaires",
  description: "Skilling India's Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <AppLayout>
            {children}
          </AppLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

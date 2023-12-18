import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainHeader from "@/components/MainHeader";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cashier Cafe App',
  description: 'Ini halaman cashier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

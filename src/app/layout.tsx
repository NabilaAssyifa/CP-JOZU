import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';


import './globals.css';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Professional company website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Navbar fixed di atas dengan shadow biar konsisten di mobile */}
        <header className="sticky top-0 z-50 shadow bg-white">
          <Navbar/>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}

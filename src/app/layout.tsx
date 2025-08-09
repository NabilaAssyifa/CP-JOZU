import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Company from '@/components/company';
import Choose from '@/components/choose';
import Complete from '@/components/complete';
import Client from '@/components/client';


import './globals.css';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Professional company website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Company/>
        <Choose/>
        <Complete/>
        <Client/>
        <Footer />
      </body>
    </html>
  );
}
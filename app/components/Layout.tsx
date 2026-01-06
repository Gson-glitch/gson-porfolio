'use client';

import { ReactNode } from 'react';
import Navbar from './dom/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative">{children}</main>
    </>
  );
}

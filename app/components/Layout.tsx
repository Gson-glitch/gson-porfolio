'use client';

import { ReactNode } from 'react';
import Navbar from './dom/Navbar';
import MouseFollower from './dom/MouseFollower';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <main className="relative">{children}</main>
    </>
  );
}

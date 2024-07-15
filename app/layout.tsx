import { getEvents } from './data';
import './globals.css';
import type { Metadata } from 'next';
import type React from 'react';
import SidebarCareer from './ui/sidebar-layout';

export const metadata: Metadata = {
  title: {
    template: '%s - Career Companion',
    default: 'Career Companion',
  },
  description: '',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents();

  return (
    <html lang="en" className="text-zinc-950 antialiased lg:bg-zinc-100 text-black">
      <body>
        <SidebarCareer events={events}>{children}</SidebarCareer>
      </body>
    </html>
  );
}

// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DynamicNotificationInbox = dynamic(
  () => import('../components/NotificationInbox'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Ad Banner Creator',
  description: 'Create and edit ad banners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <DynamicNotificationInbox />
      </body>
    </html>
  );
}
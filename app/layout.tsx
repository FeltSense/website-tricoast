import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tricoast Dental',
  description: 'Quality dental care for Houston families with a 4.9-star rating and commitment to patient comfort and modern dentistry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

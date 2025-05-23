import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Add Toaster here */}
        <Toaster position="bottom-right" richColors />
        {children}
        <footer className="py-10 flex justify-center items-center">
          Made for Vercel
        </footer>
      </body>
    </html>
  );
}

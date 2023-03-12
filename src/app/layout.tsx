import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GitHub Vagas Brasil',
  description:
    'Encontre vagas de emprego para iniciar sua carreira em tecnologia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={inter.style}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

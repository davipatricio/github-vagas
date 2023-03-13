import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GitHub Vagas Brasil',
  description:
    'Encontre vagas de emprego para iniciar sua carreira em tecnologia.',
  keywords: [
    'vagas',
    'emprego',
    'tecnologia',
    'desenvolvimento',
    'programação',
    'brasil',
    'remoto',
    'front-end',
    'back-end',
    'github',
  ],
  verification: {
    google: '2xJbRdcKuFm-bPMz7eIVWdHgC7ixwnpeBPlc1nqUTQE',
  },
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

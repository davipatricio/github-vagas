import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { allRepos } from '@/data/all-repos';
import categories from '@/data/categories';
import tools from '@/data/tools';
import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateMetadata({
  params: { repo },
}: {
  params: { repo: [string, string] };
}): Metadata {
  const fullRepo = repo.join('/') as `${string}/${string}`;

  if (repo.length !== 2 || !allRepos.includes(fullRepo.toLowerCase())) {
    return {
      robots: {
        index: false,
        follow: true,
        nocache: true,
      },
    };
  }

  const repoDescription =
    categories.find((category) => category.repo === fullRepo)?.description ??
    tools.find((tool) => tool.repo === fullRepo)?.description;

  return {
    title: `${repoDescription} - GitHub Vagas Brasil`,
    description: `${repoDescription}. | Encontre vagas de emprego para iniciar sua carreira em tecnologia.`,
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
  };
}

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

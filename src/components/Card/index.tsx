'use client';

import Link from 'next/link';
import { BaseCard } from './styles';

interface CardProps {
  icon: JSX.Element;
  name: string;
  repo: string;
}

export default function Card({ icon, name, repo }: CardProps) {
  return (
    <BaseCard>
      {icon}
      <p>{name}</p>
      <Link href={`https://github.com/${repo}`} className="repo-name">
        {repo}
      </Link>

      <Link href={`/vagas/${repo}`} className="repo-link">
        Ver vagas
      </Link>
    </BaseCard>
  );
}

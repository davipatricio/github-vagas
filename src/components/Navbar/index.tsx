'use client';

import Link from 'next/link';
import { Container } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Link href="/">GitHubVagas</Link>

      <span>
        <Link href="https://github.com/davipatricio/github-vagas">GitHub</Link>
      </span>
    </Container>
  );
}

'use client';

import Link from 'next/link';
import { Container } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Link href="/">GitHubVagas</Link>

      <div>
        <Link href="https://github.com/davipatricio">Autor</Link>
      </div>
    </Container>
  );
}

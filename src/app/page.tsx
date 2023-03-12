'use client';

import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import categories from '@/data/categories';
import tools from '@/data/tools';
import { CategoryContainer, Container } from './styles';

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <CategoryContainer>
          <h2>Por categorias</h2>

          <div className="cards">
            {categories.map((category) => (
              <Card {...category} key={category.name} />
            ))}
          </div>
        </CategoryContainer>

        <CategoryContainer>
          <h2>Por tecnologia</h2>

          <div className="cards">
            {tools.map((category) => (
              <Card {...category} key={category.name} />
            ))}
          </div>
        </CategoryContainer>
      </Container>
    </>
  );
}

/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { notFound } from 'next/navigation';
import { useCallback, useState } from 'react';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import Navbar from '@/components/Navbar';
import { allRepos } from '@/data/all-repos';
import type { Issue } from '@/utils/getIssues';
import getIssues from '@/utils/getIssues';
import { Container, JobsContainer, JobsHeader } from './styles';

export default function Home({
  params: { repo },
}: {
  params: { repo: [string, string] };
}) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fullRepo = repo.join('/') as `${string}/${string}`;

  if (repo.length !== 2 || !allRepos.includes(fullRepo.toLowerCase())) {
    return notFound();
  }

  const fetchIssues = useCallback(
    async (page: number) => {
      return getIssues(fullRepo, page);
    },
    [fullRepo]
  );

  if (!isLoaded) {
    fetchIssues(1).then(setIssues).catch(console.error);
    setIsLoaded(true);
  }

  return (
    <>
      <Navbar />

      <Container>
        <h1>{fullRepo}</h1>

        <JobsContainer>
          <JobsHeader>
            {/* options */}
            <label htmlFor="filter">Filtrar por:</label>
            <select name="filter" id="filter">
              <option value="all">Todas</option>
              <option value="open">Java</option>
            </select>
          </JobsHeader>

          {isLoaded &&
            issues.map((issue) => <JobCard issue={issue} key={issue.id} />)}
        </JobsContainer>
      </Container>

      <Footer />
    </>
  );
}

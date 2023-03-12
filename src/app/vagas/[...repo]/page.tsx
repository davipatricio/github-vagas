/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { notFound } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import Navbar from '@/components/Navbar';
import { allRepos } from '@/data/all-repos';
import type { Issue } from '@/utils/getIssues';
import getIssues from '@/utils/getIssues';
import type { Label } from '@/utils/getLabels';
import getLabels from '@/utils/getLabels';
import { Container, JobsContainer, JobsHeader } from './styles';

export default function Home({
  params: { repo },
}: {
  params: { repo: [string, string] };
}) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [labels, setLabels] = useState<Label[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const filterRef = useRef<HTMLSelectElement>(null);

  const fullRepo = repo.join('/') as `${string}/${string}`;

  if (repo.length !== 2 || !allRepos.includes(fullRepo.toLowerCase())) {
    return notFound();
  }

  const fetchIssues = useCallback(
    (page: number) => getIssues(fullRepo, page),
    [fullRepo]
  );

  const fetchLabels = useCallback(() => getLabels(fullRepo), [fullRepo]);

  if (!isLoaded) {
    Promise.all([fetchIssues(1), fetchLabels()])
      .then(([issues, labels]) => {
        setIssues(issues);
        setLabels(labels);
        setIsLoaded(true);
      })
      .catch(console.error);
  }

  return (
    <>
      <Navbar />

      <Container>
        <h1>{fullRepo}</h1>

        <JobsContainer>
          <JobsHeader>
            {/* options */}
            <select placeholder="Filtrar por" ref={filterRef}>
              <option value="no-filter" selected>
                Nenhum filtro
              </option>

              {labels.map((label) => (
                <option value={label.name} key={label.id}>
                  {label.name}
                </option>
              ))}
            </select>
          </JobsHeader>

          {isLoaded &&
            issues.map((issue) => <JobCard issue={issue} key={issue.id} />)}

          {isLoaded && issues.length === 0 && (
            <span className="no-jobs">Nenhuma vaga em aberto encontrada.</span>
          )}
        </JobsContainer>
      </Container>

      <Footer />
    </>
  );
}

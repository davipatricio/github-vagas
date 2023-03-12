/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { allRepos } from '@/data/all-repos';
import type { Issue } from '@/utils/getIssues';
import getIssues from '@/utils/getIssues';
import { Container, Job, JobsContainer, JobsHeader } from './styles';

export default function Home({
  params: { repo },
}: {
  params: { repo: [string, string] };
}) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

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

  const handleClick = useCallback(
    (url: string) => {
      router.push(url);
    },
    [router]
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
            issues.map((issue) => (
              <Job
                key={issue.id}
                onClick={() => handleClick(issue.html_url)}
                onKeyPress={(e) =>
                  e.key === 'Enter' && handleClick(issue.html_url)
                }
                role="button"
                tabIndex={0}
              >
                <h3>{issue.title}</h3>

                <div className="labels">
                  {issue.labels.map((label) => (
                    <span
                      key={label.id}
                      style={{
                        backgroundColor: `#${label.color}`,
                        // make sure the text is readable
                        color: label.color > '666666' ? '#000' : '#fff',
                        padding: '5px',
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                      }}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>

                <div className="data">
                  <span>#{issue.number}</span>
                  <span>há 2 dias</span>
                  <span>
                    por{' '}
                    <Link href={issue.user.html_url}>{issue.user.login}</Link>
                  </span>
                  <Link href={issue.html_url} target="_blank">
                    ver no GitHub
                  </Link>
                </div>
              </Job>
            ))}
        </JobsContainer>
      </Container>

      <Footer />
    </>
  );
}

import Link from 'next/link';
import { useCallback } from 'react';
import type { Issue } from '@/utils/getIssues';
import { Job } from './style';

export default function JobCard({ issue }: { issue: Issue }) {
  const calculateDate = useCallback((createdDate: string) => {
    const date = new Date(createdDate);
    const now = new Date();

    const diff = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diff / (1_000 * 3_600 * 24));
  }, []);

  return (
    <Job key={issue.id} href={issue.html_url} target="_blank">
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
        <span>há {calculateDate(issue.created_at)} dias</span>
        <span>
          por{' '}
          <Link href={issue.user.html_url} target="_blank">
            {issue.user.login}
          </Link>
        </span>
        <Link href={issue.html_url} target="_blank">
          ver no GitHub
        </Link>
      </div>
    </Job>
  );
}

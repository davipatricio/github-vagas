import type { Label } from './getLabels';

export interface Issue {
  created_at: string;
  html_url: string;
  id: number;
  labels: Label[];
  number: number;
  title: string;
  user: {
    html_url: string;
    login: string;
  };
}

interface GetIssuesParams {
  labels?: string | undefined;
  page?: number;
  repo: string;
}

export default async function getIssues({
  repo,
  page = 1,
  labels,
}: GetIssuesParams): Promise<Issue[]> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/issues?state=open&page=${page}&per_page=15${
      labels ? `&labels=${labels}` : ''
    }`
  );
  return response.json();
}

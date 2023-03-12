import type { Label } from './getLabels';

export interface Issue {
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

export default async function getIssues(
  repo: string,
  page = 1
): Promise<Issue[]> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/issues?state=open&page=${page}&per_page=15`
  );
  return response.json();
}

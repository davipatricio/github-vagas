export interface Label {
  color: string;
  id: number;
  name: string;
}

export default async function getLabels(repo: string): Promise<Label[]> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/labels?per_page=100`
  );
  return response.json();
}

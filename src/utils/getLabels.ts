export interface Label {
  color: string;
  id: number;
  name: string;
}

export default function getIssues(repo: string, page = 1) {
  console.log(repo, page);
}

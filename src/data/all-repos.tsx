import categories from './categories';
import tools from './tools';

export const allRepos = [...categories, ...tools].map((repo) =>
  repo.repo.toLowerCase()
);

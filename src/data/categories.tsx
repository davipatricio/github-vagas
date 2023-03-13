import { AiFillApple } from 'react-icons/ai';
import { BsFillDatabaseFill } from 'react-icons/bs';
import { FaAndroid, FaBrush, FaServer } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import { MdOutlineDesignServices, MdOutlineQueryStats } from 'react-icons/md';

export interface Category {
  description: string;
  icon: JSX.Element;
  name: string;
  repo: string;
}

const categories: Category[] = [
  {
    icon: <FaBrush />,
    name: 'Frontend',
    repo: 'frontendbr/vagas',
    description: 'Vagas para desenvolvedores Frontend',
  },
  {
    icon: <BsFillDatabaseFill />,
    name: 'Backend',
    repo: 'backend-br/vagas',
    description: 'Vagas para desenvolvedores Backend',
  },
  {
    icon: <FaServer />,
    name: 'DevOps',
    repo: 'devops-Brazil/Vagas',
    description: 'Vagas para DevOps',
  },
  {
    icon: <MdOutlineDesignServices />,
    name: 'UI/UX',
    repo: 'remotejobsbr/design-ux-vagas',
    description: 'Vagas para UI/UX',
  },
  {
    icon: <ImLab />,
    name: 'QA/Testes',
    repo: 'qa-brasil/vagas',
    description: 'Vagas para QA/Testes',
  },
  {
    icon: <AiFillApple />,
    name: 'iOS/macOS',
    repo: 'cocoaheadsbrasil/vagas',
    description: 'Vagas para desenvolvedores iOS/macOS',
  },
  {
    icon: <FaAndroid />,
    name: 'Android',
    repo: 'androiddevbr/vagas',
    description: 'Vagas para desenvolvedores Android',
  },
  {
    icon: <MdOutlineQueryStats />,
    name: 'Data Science',
    repo: 'datascience-br/vagas',
    description: 'Vagas para Data Science (cientistas de dados)',
  },
];

export default categories;

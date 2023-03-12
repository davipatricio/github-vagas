import { AiFillApple } from 'react-icons/ai';
import { BsFillDatabaseFill } from 'react-icons/bs';
import { FaAndroid, FaBrush, FaServer } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import { MdOutlineDesignServices, MdOutlineQueryStats } from 'react-icons/md';

export interface Category {
  icon: JSX.Element;
  name: string;
  repo: string;
}

const categories: Category[] = [
  {
    icon: <FaBrush />,
    name: 'Frontend',
    repo: 'frontendbr/vagas',
  },
  {
    icon: <BsFillDatabaseFill />,
    name: 'Backend',
    repo: 'backend-br/vagas',
  },
  {
    icon: <FaServer />,
    name: 'DevOps',
    repo: 'DevOps-Brazil/Vagas',
  },
  {
    icon: <MdOutlineDesignServices />,
    name: 'UI/UX',
    repo: 'remotejobsbr/design-ux-vagas',
  },
  {
    icon: <ImLab />,
    name: 'QA/Testes',
    repo: 'qa-brasil/vagas',
  },
  {
    icon: <AiFillApple />,
    name: 'iOS/macOS',
    repo: 'CocoaHeadsBrasil/vagas',
  },
  {
    icon: <FaAndroid />,
    name: 'Android',
    repo: 'androiddevbr/vagas',
  },
  {
    icon: <MdOutlineQueryStats />,
    name: 'Data Science',
    repo: 'datascience-br/vagas',
  },
];

export default categories;

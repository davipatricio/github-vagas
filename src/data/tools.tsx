import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import {
  SiDotnet,
  SiFlutter,
  SiPhp,
  SiVuedotjs,
  SiKotlin,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

export interface Category {
  icon: JSX.Element;
  name: string;
  repo: string;
}

const tools: Category[] = [
  {
    icon: <FaJava />,
    name: 'Java',
    repo: 'soujava/vagas-java',
  },
  { icon: <SiDotnet />, name: '.NET', repo: 'dotnetdevbr/vagas' },
  { icon: <FaPython />, name: 'Python', repo: 'pydevbr/vagas' },
  { icon: <SiPhp />, name: 'PHP', repo: 'brasil-php/vagas' },
  { icon: <FaReact />, name: 'React', repo: 'react-brasil/vagas' },
  { icon: <SiVuedotjs />, name: 'Vue', repo: 'vuejs-br/vagas' },
  { icon: <SiKotlin />, name: 'Kotlin', repo: 'kotlin-br/vagas' },
  { icon: <TbBrandGolang />, name: 'Golang', repo: 'Gommunity/vagas' },
  { icon: <SiFlutter />, name: 'Flutter', repo: 'flutterbr/vagas' },
];

export default tools;

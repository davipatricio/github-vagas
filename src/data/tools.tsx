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
  description: string;
  icon: JSX.Element;
  name: string;
  repo: string;
}

const tools: Category[] = [
  {
    icon: <FaJava />,
    name: 'Java',
    repo: 'soujava/vagas-java',
    description: 'Vagas para desenvolvedores Java',
  },
  {
    icon: <SiDotnet />,
    name: '.NET',
    repo: 'dotnetdevbr/vagas',
    description: 'Vagas para desenvolvedores .NET',
  },
  {
    icon: <FaPython />,
    name: 'Python',
    repo: 'pydevbr/vagas',
    description: 'Vagas para desenvolvedores Python',
  },
  {
    icon: <SiPhp />,
    name: 'PHP',
    repo: 'brasil-php/vagas',
    description: 'Vagas para desenvolvedores PHP',
  },
  {
    icon: <FaReact />,
    name: 'React',
    repo: 'react-brasil/vagas',
    description: 'Vagas para desenvolvedores React e React Native',
  },
  {
    icon: <SiVuedotjs />,
    name: 'Vue',
    repo: 'vuejs-br/vagas',
    description: 'Vagas para desenvolvedores Vue',
  },
  {
    icon: <SiKotlin />,
    name: 'Kotlin',
    repo: 'kotlin-br/vagas',
    description: 'Vagas para desenvolvedores Kotlin',
  },
  {
    icon: <TbBrandGolang />,
    name: 'Golang',
    repo: 'gommunity/vagas',
    description: 'Vagas para desenvolvedores Golang',
  },
  {
    icon: <SiFlutter />,
    name: 'Flutter',
    repo: 'flutterbr/vagas',
    description: 'Vagas para desenvolvedores Flutter e Dart',
  },
];

export default tools;

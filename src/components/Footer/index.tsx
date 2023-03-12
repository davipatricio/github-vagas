import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  margin-top: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;

  background-color: #343a40;
  padding: 30px;

  span,
  a {
    font-size: 1.2rem;
  }

  span {
    color: #fff;
    margin-right: 5px;
  }

  a {
    color: #3182ce;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>Made with ❤ by </span>
      <Link href="https://github.com/davipatricio">davipatricio</Link>
    </StyledFooter>
  );
}

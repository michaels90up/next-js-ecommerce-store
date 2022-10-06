import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  background-color: #e8b151;
  border-radius: 6px;
  margin: 20px 10px;
  padding: 10px;
  > a + a {
    margin-left: 13px;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <Link href="/">Home</Link>
        <Link href="/sculptures">Sculptures</Link>
      </nav>
    </header>
  );
}

import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  background-color: #f2d94b;
  border-radius: 6px;
  margin: 20px 10px;
  padding: 10px;
  > a + a {
    margin-left: 30px;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <Link href="/">Home</Link>
        <Link href="/sculptures">Sculptures</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}

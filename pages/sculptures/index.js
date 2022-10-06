import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sculptures } from '../../database/sculptures';

const sculptureStyles = css`
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 20px;
  h2 {
    margin-top: 0;
  }
  & + & {
    margin-top: 25px;
  }
`;

export default function Sculptures(props) {
  return (
    <>
      <Head>
        <title>Overview of all available sculptures</title>
        <meta name="description" content="List page of all sculptures" />
      </Head>

      <h1>Sculptures</h1>

      {props.sculptures.map((sculpture) => {
        return (
          <div
            data-test-id={`sculpture-material-${sculpture.material}`}
            key={`sculpture-${sculpture.id}`}
            css={sculptureStyles}
          >
            <h2>
              <Link href={`/sculpture/${sculpture.id}`}>{sculpture.name}</Link>
            </h2>

            <Link href={`/sculptures/${sculpture.id}`}>
              <a>
                <Image
                  src={`/${sculpture.id}-${sculpture.name.toLowerCase()}.jpeg`}
                  alt=""
                  width="300"
                  height="300"
                />
              </a>
            </Link>

            <div>Material: {sculpture.material}</div>
            <div>Price: {sculpture.price}</div>
          </div>
        );
      })}
    </>
  );
}

// Anything inside of this function will
// ONLY be run on the server (in Node.js)
//
// This means you can access things like `fs`
//
// Note: this function can only be exported
// from files within pages/

export function getServerSideProps() {
  return {
    // Anything that you write in this props object
    // will become the props that are passed to
    // the `Animals` page component above
    props: {
      // First prop, containing all animals
      sculptures: sculptures,
      // Second prop, example
      // abc: 123,
    },
  };
}

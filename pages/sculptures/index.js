import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

const sculptures = [
  { id: 1, name: 'Donatello', material: 'Plastic', price: 150 },
  { id: 2, name: 'Moai', material: 'Stone', price: 500 },
  { id: 3, name: 'Spider', material: 'Bronze', price: 700 },
  { id: 4, name: 'Bean', material: 'Steal', price: 1200 },
  { id: 5, name: 'Voyageur', material: 'Metal', price: 3350 },
];

export default function Sculptures() {
  return (
    <>
      <Head>
        <title>Overview of all available sculptures</title>
        <meta name="description" content="List page of all sculptures" />
      </Head>

      <h1>Sculptures</h1>

      {sculptures.map((sculpture) => {
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

// export async function getServerSideProps() {
// const sculptures = await getSculptures();
// return {
// Anything that you write in this props object
// will become the props that are passed to
// the `Animals` page component above
// props: {
// First prop, containing all animals
// sculptures: sculptures,
// Second prop, example
// abc: 123,
// },
// };
// }

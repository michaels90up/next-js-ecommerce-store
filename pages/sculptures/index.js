import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSculptures } from '../../database/sculptures';

const sculptureStyles = css`
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 20px;
  align-items: center;
  h2 {
    margin-top: 0;
  }
  & + & {
    margin-top: 25px;
  }
`;

const sculptureInputStyles = css`
  text-align: center;
  border: 0 none;
  height: 32px;
  width: 60px;
  margin: 4px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 8px;
`;

const sculptureButtonStyles = css`
  height: 34px;
  width: 25px;
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
              <Link href={`/sculptures/${sculpture.id}`}>{sculpture.name}</Link>
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
            <br />
            <div>You can buy up to 10 sculptures.</div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <button css={sculptureButtonStyles}>-</button>
              <input
                type="number"
                min={1}
                max={10}
                css={sculptureInputStyles}
              />
              <button css={sculptureButtonStyles}>+</button>
              <button>Add to cart</button>
            </form>
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

export async function getServerSideProps() {
  const sculptures = await getSculptures();
  return {
    // Anything that you write in this props object
    // will become the props that are passed to
    // the `Animals` page component above
    props: {
      sculptures: sculptures,
    },
  };
}

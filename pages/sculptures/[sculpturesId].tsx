import { css } from '@emotion/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSculptureById, Sculpture } from '../../database/sculptures';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cart';
import { parseIntFromContextQuery } from '../../utils/contextQuery';

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

type Props =
  | {
      sculpture: Sculpture;
    }
  | {
      error: string;
    };

export default function SingleSculpture(props: Props) {
  if ('error' in props) {
    return (
      <div>
        <Head>
          <title>Sculpture not found</title>
          <meta name="description" content="Sculpture not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/sculptures">sculptures page</Link>
      </div>
    );
  }

  return (
    <div css={sculptureStyles}>
      <Head>
        <title>{props.sculpture.name}</title>
        <meta
          name="description"
          content={`${
            props.sculpture.name
          } made out of ${props.sculpture.material.toLowerCase()} costs ${
            props.sculpture.price
          }`}
        />
      </Head>
      <h2>{props.sculpture.name}</h2>
      <Image
        data-test-id="product-image"
        src={`/${
          props.sculpture.id
        }-${props.sculpture.name.toLowerCase()}.jpeg`}
        alt=""
        width="300"
        height="300"
      />
      <div>Id: {props.sculpture.id}</div>
      <div>Material: {props.sculpture.material}</div>
      <div data-test-id="product-price">Price: {props.sculpture.price}</div>
      <div>
        <input type="number" min={1} max={10} />
        <button
          onClick={() => {
            const currentCookieValue = getParsedCookie('cart');
            if (!currentCookieValue) {
              setStringifiedCookie('cart', [
                { id: props.sculpture.id, cart: 1 },
              ]);
            } else {
              setStringifiedCookie('cart', currentCookieValue + 1);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> {
  // Retrieve the animal ID from the URL
  const sculptureId = parseIntFromContextQuery(context.query.sculpturesId);
  if (typeof sculptureId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Sculpture not found',
      },
    };
  }
  const foundSculpture = await getSculptureById(sculptureId);

  if (typeof foundSculpture === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Sculpture not found',
      },
    };
  }

  return {
    props: {
      sculpture: foundSculpture,
    },
  };
}

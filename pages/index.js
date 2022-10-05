import Head from 'next/head';
import Image from 'next/image';
import donatello from '../public/1-donatello.jpeg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sculptures for everyone</title>
        <meta
          name="description"
          content="Overview of all sculptures for sale"
        />
      </Head>
      <main>
        <h1>Sculptures for everyone</h1>
        <Image
          src={donatello}
          alt="famous Donatello sculpture"
          width={300}
          height={300}
        />
      </main>
    </>
  );
}

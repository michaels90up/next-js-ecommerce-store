import Head from 'next/head';
import Header from '../components/Header';

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
        <Header />
        Sculptures for everyone
      </main>
    </>
  );
}

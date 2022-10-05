import Head from 'next/head';

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
        <img src="/donatello.jpeg" alt="famous Donatello sculpture" />
      </main>
    </>
  );
}

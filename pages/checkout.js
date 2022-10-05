import Head from 'next/head';
import Header from '../components/Header';

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout with user infos" />
      </Head>
      <Header />
      Checkout page
    </div>
  );
}

import { css } from '@emotion/react';
import Head from 'next/head';

const formStyles = css`
  display: grid;
  margin-right: 600px;
`;

const addressStyles = css`
  display: flex;
  justify-content: left;
`;

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout with user infos" />
      </Head>
      Checkout page
      <h3>Total sum:</h3>
      <hr />
      <form css={formStyles}>
        <label>First Name:</label>
        <input data-test-id="checkout-first-name" />
        <label>Last Name:</label>
        <input data-test-id="checkout-last-name" />
        <label>E-Mail:</label>
        <input data-test-id="checkout-email" />
        <label>Address:</label>
        <input data-test-id="checkout-address" />
      </form>
      <br />
      <form>
        <span css={addressStyles}>
          <label>City:</label>
          <input data-test-id="checkout-city" />
          <label>Postal Code:</label>
          <input data-test-id="checkout-postal-code" />
          <label>Country:</label>
          <input data-test-id="checkout-country" />
        </span>
      </form>
      <br />
      <form>
        <span css={formStyles}>
          <label>Credit Card Number:</label>
          <input data-test-id="checkout-credit-card" />
          <label>Expiration Date:</label>
          <input data-test-id="checkout-expiration-date" />
          <label>Security Code:</label>
          <input data-test-id="checkout-security-code" />
        </span>
      </form>
      <br />
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </div>
  );
}

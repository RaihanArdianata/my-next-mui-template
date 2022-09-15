/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    // eslint-disable-next-line no-undef
    const isProduction = process.env.NODE_ENV === 'production';

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {

    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
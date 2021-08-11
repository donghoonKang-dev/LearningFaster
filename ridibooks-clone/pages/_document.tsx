/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta name="theme-color" content="#273bb9" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Source+Code+Pro:wght@300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

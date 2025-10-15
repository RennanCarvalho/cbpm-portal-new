import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" >
        <Head>
          <title>CBPM</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){
                dataLayer.push(arguments);
              } 
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname});`
          }}></script>
        </Head>
        <body>
        <noscript>
          <div style={{ backgroundColor: "#ffcc00", padding: "10px", textAlign: "center" }}>
            Para melhor experiência, ative o JavaScript no seu navegador.
          </div>
        </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

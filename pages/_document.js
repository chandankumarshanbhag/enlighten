import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from 'theme/index';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme().palette.primary.main} />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&amp;display=swap" rel="stylesheet"></link>
          <style>
            {`
            body{
              background-color: #F4F6F8;
            }
            ::-webkit-scrollbar {
              height: 16px;
              overflow: visible;
              width: 16px;
          }
          ::-webkit-scrollbar-button {
              height: 0;
              width: 0;
          }
          ::-webkit-scrollbar-track {
              background-clip: padding-box;
              border: solid transparent;
              border-width: 0 0 0 4px;
          }
          ::-webkit-scrollbar-track:horizontal {
              border-width: 4px 0 0
          }
          ::-webkit-scrollbar-track:hover {
              background-color: rgba(0,0,0,.05);
              box-shadow: inset 1px 0 0 rgba(0,0,0,.1);
          }
          ::-webkit-scrollbar-track:horizontal:hover {
              box-shadow: inset 0 1px 0 rgba(0,0,0,.1)
          }
          ::-webkit-scrollbar-track:active {
              background-color: rgba(0,0,0,.05);
              box-shadow: inset 1px 0 0 rgba(0,0,0,.14),inset -1px 0 0 rgba(0,0,0,.07);
          }
          ::-webkit-scrollbar-track:horizontal:active {
              box-shadow: inset 0 1px 0 rgba(0,0,0,.14),inset 0 -1px 0 rgba(0,0,0,.07)
          }
          ::-webkit-scrollbar-thumb {
              background-color: rgba(0,0,0,.2);
              background-clip: padding-box;
              border: solid transparent;
              border-width: 1px 1px 1px 6px;
              min-height: 28px;
              padding: 100px 0 0;
              box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);
          }
          ::-webkit-scrollbar-thumb:horizontal {
              border-width: 6px 1px 1px;
              padding: 0 0 0 100px;
              box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.07);
          }
          ::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0,0,0,.4);
              box-shadow: inset 1px 1px 1px rgba(0,0,0,.25);
          }
          ::-webkit-scrollbar-thumb:active {
              background-color: rgba(0,0,0,0.5);
              box-shadow: inset 1px 1px 3px rgba(0,0,0,0.35);
          }
          ::-webkit-scrollbar-corner {
              background: transparent
          }
          body::-webkit-scrollbar-track-piece {
              background-clip: padding-box;
              background-color: #f5f5f5;
              border: solid #fff;
              border-width: 0 0 0 3px;
              box-shadow: inset 1px 0 0 rgba(0,0,0,.14),inset -1px 0 0 rgba(0,0,0,.07);
          }
          body::-webkit-scrollbar-track-piece:horizontal {
              border-width: 3px 0 0;
              box-shadow: inset 0 1px 0 rgba(0,0,0,.14),inset 0 -1px 0 rgba(0,0,0,.07);
          }
          body::-webkit-scrollbar-thumb {
              border-width: 1px 1px 1px 5px
          }
          body::-webkit-scrollbar-thumb:horizontal {
              border-width: 5px 1px 1px
          }
          body::-webkit-scrollbar-corner {
              background-clip: padding-box;
              background-color: #f5f5f5;
              border: solid #fff;
              border-width: 3px 0 0 3px;
              box-shadow: inset 1px 1px 0 rgba(0,0,0,.14);
          }
            
            `}

          </style>
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
          </link>
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

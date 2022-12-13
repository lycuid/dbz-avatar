import React from 'react';
import Head from 'next/head';
import GlobalStyle, { Wrapper } from '../src/Style/global';

const Meta = {
  name: 'dbz avatar',
  description: 'Avatar generator for dragonball z characters.',
  author: '@lycuid',
};

const MyApp = ({ Component, pageProps }: { Component: React.FC, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>{`${Meta.name} | ${Meta.description}`}</title>
        <link rel="icon" href={`${process.env.ASSET_PREFIX}/images/icon.png`} type="image/png" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={Meta.description} />
        <meta property="og:title" content={Meta.name} />
        <meta property="og:description" content={Meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={Meta.author} />
        <meta name="twitter:title" content={Meta.name} />
        <meta name="twitter:description" content={Meta.description} />
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
};

export default MyApp;

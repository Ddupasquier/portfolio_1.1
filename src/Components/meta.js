import React from 'react';
import { Helmet } from 'react-helmet';
import Preview from '../assets/Untitled.jpg';

function Meta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dupasquier.dev</title>
      <meta name="og:title" content="Dupasquier.dev" />
      <meta
        name="og:description"
        content="This portfolio is where I will be displaying projects as well as providing contact information to perspective employers."
      />
      <link rel="canonical" href="https://www.dupasquier.dev" />
    </Helmet>
  );
}

export default Meta;

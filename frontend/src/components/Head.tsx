import React from 'react';
// @ts-ignore
import { Helmet } from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Web Engineering Coding Playground</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet"
      type="text/css"
    />
    {/* Fix for old IE versions */}
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  </Helmet>
);

export default Head;

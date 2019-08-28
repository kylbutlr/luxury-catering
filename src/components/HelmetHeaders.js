import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetHeaders() {
  return (
    <Helmet>
      <html lang="en" amp />
      <meta charSet='utf-8' />
      <title>Luxury Catering</title>
      <link rel='canonical' href='https://github.com/kylbutlr/luxury-catering#readme' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#c56e6e' />
      <meta name='msapplication-TileColor' content='#c56e6e' />
      <meta name='theme-color' content='#c56e6e' />
      <meta name="Description" content="Luxury Catering Website" />
    </Helmet>
  );
}

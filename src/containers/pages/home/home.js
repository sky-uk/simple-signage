import React from 'react';
import { WebviewGrid } from '../../../components';

export default function Home() {

  const webviews = {};
  webviews['0-0'] = 'http://www.sky.com';
  webviews['0-1'] = 'http://www.bbc.co.uk/news';
  webviews['1-0'] = 'http://tv.sky.com/tv-guide/';
  webviews['1-1'] = 'http://news.sky.com/';

  return (
    <div>
      <h1>Home Test speed...</h1>
      <WebviewGrid rows={2} cols={2} webviews={webviews} />
    </div>
  );
}

Home.displayName = 'Home';

import React from 'react';
import { WebviewGrid } from '../../../components';

export default function Home() {

  const webviews = {};
  webviews['0-0'] = 'http://news.sky.com';
  webviews['0-1'] = 'http://www.bbc.co.uk/news';
  webviews['1-0'] = 'https://www.rt.com/';
  webviews['1-1'] = 'http://edition.cnn.com/';

  return (
    <div>
      <WebviewGrid rows={2} cols={2} webviews={webviews} />
    </div>
  );
}

Home.displayName = 'Home';

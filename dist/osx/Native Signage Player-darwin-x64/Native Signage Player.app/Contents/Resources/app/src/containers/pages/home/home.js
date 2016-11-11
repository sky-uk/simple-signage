import React from 'react';
import { WebviewGrid, Webview } from '../../../components';

export default function Home() {
  const webviewElements = [];

  webviewElements.push(<Webview src={'http://news.sky.com'} />);
  webviewElements.push(<Webview src={'http://www.bbc.co.uk/news'} />);
  webviewElements.push(<Webview src={'https://www.rt.com/'} />);
  webviewElements.push(<Webview src={'http://edition.cnn.com/'} />);

  return (
    <div className="signage-display">
      <WebviewGrid rows={2} cols={2} webviews={webviewElements} />
    </div>
  );
}

Home.displayName = 'Home';

import React from 'react';
import { Webview, WebviewCarousel } from '../../../components';

export default function Carousel() {

  const webviewElements = [];

  webviewElements.push(<Webview src={'http://monitoring.bskyb.com/dashboards/ott/#/proposition'} />);
  webviewElements.push(<Webview src={'http://build.id.bskyb.com/view/build-monitor-1/'} />);
  webviewElements.push(<Webview src={'http://gwhjen01.dev.skyid.id.bskyb.com/view/Rango%20Build%20Monitor/'} />);
  webviewElements.push(<Webview src={'http://team.id.bskyb.com/now.html'} />);

  return (
    <div className="signage-display">
       <WebviewCarousel webviews={webviewElements} rotationTime={7} />
    </div>
  );
}

Carousel.displayName = 'Carousel';

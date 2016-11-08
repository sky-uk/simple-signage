import React from 'react';
import { WebviewCarousel } from '../../../components';

export default function Carousel() {

  const webviewElements = {};
  webviewElements['0'] = 'http://monitoring.bskyb.com/dashboards/ott/#/proposition';
  webviewElements['1'] = 'http://build.id.bskyb.com/view/build-monitor-1/';
  webviewElements['2'] = 'http://gwhjen01.dev.skyid.id.bskyb.com/view/Rango%20Build%20Monitor/';
  webviewElements['3'] = 'http://team.id.bskyb.com/now.html';

  return (
    <div>
       <WebviewCarousel webviews={ webviewElements } rotationTime={5} />
    </div>
  );
}

Carousel.displayName = 'Carousel';

import React from 'react';
import { Webview } from '../../../components'; // TODO: Get a webpack loader working

export default function About() {
  return (
    <div>
      <Webview src="http://www.sky.com" styles={{height: '1500px'}}/>
    </div>
  );
}

About.displayName = 'About';

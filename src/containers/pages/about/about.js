import React from 'react';
import { Webview } from '../../../components'; // TODO: Get a webpack loader working

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Webview />
    </div>
  );
}

About.displayName = 'About';

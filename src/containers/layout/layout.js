import React from 'react';
import { Nav } from '../../containers';

import './layout.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main id="content">{children}</main>
    </div>
  );
}

Layout.displayName = 'Layout';

import React, { PropTypes, Component } from 'react';
import { Nav } from '../../containers';

import './layout.scss';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div>
        <Nav />
        <main id="content">{this.props.children}</main>
      </div>
    );
  }
}

Layout.displayName = 'Layout';

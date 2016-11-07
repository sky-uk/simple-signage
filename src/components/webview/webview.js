import React, {PropTypes, Component } from 'react';

export default class Webview extends Component {

    // TODO: Add event listeners for the webview.
    // TODO: Add the PropTypes to all of the webview options...
    // TODO: Add a grid component?
    // TODO: look at local storage to persist the configuration
    // TODO: create a containers/pages
    // TODO: Configuration pages....

    static propTypes = {
      scr: PropTypes.string.isRequired,
      styles: PropTypes.object
    }

    static defaultProps = {
      scr: 'http://www.sky.com',
      styles: {}
    }

    render() {
      return (
        <div className="webview-wrap">
          <webview
            src="https://www.github.com/"
            style={{minHeight: 1300}}>
          </webview>
        </div>
      );
    }
}

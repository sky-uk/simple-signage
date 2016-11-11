import React, { PropTypes, Component } from 'react';

import './webview.scss';

export default class Webview extends Component {

    // TODO: Add event listeners for the webview.
    // TODO: Add the PropTypes to all of the webview options...
    // TODO: Add a grid component?
    // TODO: look at local storage to persist the configuration
    // TODO: create a containers/pages
    // TODO: Configuration pages....
    static propTypes = {
      scr: PropTypes.string.isRequired,
      styles: PropTypes.object,
      zoom: PropTypes.number
    }

    static defaultProps = {
      scr: 'http://www.sky.com',
      styles: {},
      zoom: null
    }

    componentDidMount = () => {
      /* Apply events to the element */
      const element = this.refs.webview;

      element.addEventListener('dom-ready', () => {
        // console.log('dom-ready for: ' + this.props.src);
      });

      element.addEventListener('did-finish-load', () => {
        /* Apply the zoom value to the page */
        if (this.props.zoom !== null) {
          setTimeout(() => {
            this.refs.webview.setZoomFactor(1 / this.props.zoom);
          }, 1000);
        }
      });
    }

    render() {
      return (
        <div className="webview-wrap">
          <webview
            ref={'webview'}
            src={ this.props.src }
            style={ this.props.styles }>
          </webview>
        </div>
      );
    }
}

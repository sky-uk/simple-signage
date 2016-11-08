import React, { PropTypes, Component } from 'react';
import { Webview } from '../../components';

import './webview-grid.scss';

export default class WebviewGrid extends Component {
    // TODO: add class name overwrites...
    static propTypes = {
      rows: PropTypes.number.isRequired,
      cols: PropTypes.number.isRequired,
      webviews: PropTypes.object.isRequired // Object of strings in the format {'0-0': url, '0-1': url2, '1-0': 'url3', ...}
    };

    static defaultProps = {
      cols: 1,
      rows: 1,
      webviews: {}
    };

    renderWebview = (url) => {
      // console.log(url);
      return (
        <Webview src={url} />
      );
    }

    renderCols = (rowIndex) => {
      const cols = this.props.cols;
      const colElements = [];
      const widthPercentage = (100 / cols) + '%';

      for (let i = 0; i < cols; i++) {
        const url = this.props.webviews[ rowIndex + '-' + i ];

        colElements.push(
          <div key={'webview-grid-cols-' + rowIndex + '-' + i} className="webview-grid-cols" style={{width: widthPercentage}}>
            { this.renderWebview(url) }
          </div>
        );
      }
      return colElements;
    }

    renderRows = () => {
      const rows = this.props.rows;
      const rowElements = [];
      const heightPercentage = (100 / rows) + '%';

      for (let i = 0; i < rows; i++) {
        rowElements.push(
          <div key={'webview-grid-rows-' + i} className="webview-grid-rows" style={{height: heightPercentage}}>
            { this.renderCols(i) }
          </div>
        );
      }
      return rowElements;
    }

    render() {
      return (
        <div className="webview-grid">
          { this.renderRows() }
        </div>
      );
    }
}

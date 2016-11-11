import React, { PropTypes, Component } from 'react';

import './webview-grid.scss';

export default class WebviewGrid extends Component {
    // TODO: add class name overwrites...
    // TODO: Allow config to change widths and height percentages
    static propTypes = {
      rows: PropTypes.number.isRequired,
      cols: PropTypes.number.isRequired,
      webviews: PropTypes.array.isRequired
    };

    static defaultProps = {
      cols: 1,
      rows: 1,
      webviews: {}
    };

    renderCols = (rowIndex) => {
      const cols = this.props.cols;
      const colElements = [];
      const widthPercentage = (100 / cols) + '%';

      for (let i = 0; i < cols; i++) {
        colElements.push(
          <div key={'webview-grid-cols-' + rowIndex + '-' + i} className="webview-grid-cols" style={{width: widthPercentage}}>
            { this.props.webviews[(rowIndex * cols) + i] }
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

import React, { PropTypes, Component } from 'react';
import { Webview } from '../../components';

import './webview-carousel.scss';

export default class WebviewCarousel extends Component {
    static propTypes = {
      webviews: PropTypes.object.isRequired,
      rotationTime: PropTypes.number
    };

    static defaultProps = {
      webviews: {},
      rotationTime: 10
    };

    constructor(props) {
      super(props);

      this.state = {
        webviewLength: Object.keys(props.webviews).length,
        position: 0
      }
    }

    componentDidMount = () => {
      this.startCarouselLoop();
    }

    startCarouselLoop = () => {
      setTimeout(() => {
        this.carouselLoopNext();
      }, this.props.rotationTime * 1000);
    }

    carouselLoopNext = () => {
      let newPosition = this.state.position + 1;
      if (newPosition >= this.state.webviewLength) {
        newPosition = 0;
      }

      this.setState({
        position: newPosition
      });
      this.startCarouselLoop();
    }

    renderWebview = (url, index) => {
      let classNameString = 'webview-carousel-item';
      if (index === this.state.position) {
        classNameString += ' webview-carousel-item-selected';
      }

      return (
        <div className={classNameString} key={'webview-carousel-' + index} style={{zIndex: index}}>
          <Webview src={url} />
        </div>
      );
    }

    renderWebviews = () => {
      const webviewElements = Object.keys(this.props.webviews).map((key, index) => {
        const webviewURL = this.props.webviews[key];
        return this.renderWebview(webviewURL, index);
      });

      return webviewElements;
    }

    render() {
      return (
        <div className="webview-carousel">
          { this.renderWebviews() }
        </div>
      );
    }
}
